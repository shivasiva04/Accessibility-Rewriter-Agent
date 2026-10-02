import { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom'; 
import GridPopup from '../../components/GridPopup';
import { loginUser } from '../../services/api';
import { GRID_STYLES } from '../../styles/gridStyles';
import { AUTH_TEXT } from '../../constants/gridContent';

export default function Signin({ onLogin }) {
  const navigate = useNavigate(); 
  const [form, setForm] = useState({ email: '', gridSize: '4', gridShape: 'square' });
  const [isPopupOpen, setPopupOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "gridSize") {
      if (value === "") { setForm({ ...form, [name]: "" }); return; }
      
      const numValue = parseInt(value);
      if (numValue > 10) {
        toast.error("Maximum grid limit is 10!", { style: { background: '#333', color: '#fff' } });
        setForm({ ...form, [name]: "10" });
        return;
      }
      if (numValue < 0) return;
    }
    setForm({ ...form, [name]: value });
  };

  const handlePatternSubmit = async (selectedIds) => {
    if (selectedIds.length < 3) {
      toast.error("Please select at least 3 points!", { icon: '⚠️' });
      return;
    }
    
    const loadingToast = toast.loading("Verifying Credentials...");

    try {
      const response = await loginUser({ 
        email: form.email,
        gridSize: parseInt(form.gridSize),
        gridShape: form.gridShape,
        pattern: selectedIds 
      });
      
      if(response.success) {
        toast.dismiss(loadingToast);
        toast.success("Login Successful! Welcome back.");
        
        // Update global app state
        if(onLogin) onLogin({ username: response.username, email: form.email, role: response.role });
        
        setPopupOpen(false);

        // 3. Redirect to Home Page after 1.5 seconds
        setTimeout(() => {
          navigate('/');
        }, 1500);
      }
    } catch (err) {
      toast.dismiss(loadingToast);
      toast.error("Login Failed: Invalid credentials");
      
      toast("Hint: Did you use the same Grid Size & Shape as registration?", { 
        icon: '💡', 
        duration: 5000,
        style: { border: '1px solid #FCD34D', padding: '16px', color: '#713200' },
      });
    }
  };

  return (
    <div className={GRID_STYLES.WRAPPER}>
      <Toaster position="top-center" />

      {/* --- FORM CARD --- */}
      <div className={GRID_STYLES.CARD_FORM}>
        
        <h2 className={GRID_STYLES.HEADING}>{AUTH_TEXT.LOGIN_TITLE}</h2>
        
        <form onSubmit={(e) => e.preventDefault()}>
          <input 
            name="email" 
            placeholder={AUTH_TEXT.EMAIL_PLACEHOLDER} 
            className={GRID_STYLES.INPUT} 
            onChange={handleChange} 
          />
          
          <input 
            name="gridSize" 
            type="number" 
            min="4" max="10" 
            placeholder="Grid Size (4-10)" 
            className={GRID_STYLES.INPUT} 
            onChange={handleChange} 
            value={form.gridSize}
          />
          
          <select name="gridShape" className={GRID_STYLES.SELECT} onChange={handleChange}>
            {AUTH_TEXT.SHAPES.map(s => <option key={s.value} value={s.value}>{s.label}</option>)}
          </select>

          {/* Trigger Button */}
          <div 
            className={GRID_STYLES.INPUT_TRIGGER}
            onClick={() => {
              const size = parseInt(form.gridSize);
              if(!size || size < 4) {
                 toast.error("Minimum grid size is 4!", { style: { background: '#333', color: '#fff' } });
                 return;
              }
              setPopupOpen(true);
            }}
          >
            <span>{AUTH_TEXT.PASS_PLACEHOLDER_ENTER}</span>
            <span>🔑</span>
          </div>

          <button 
             type="button" 
             onClick={() => {
                if(!form.email) return toast.error("Please enter email");
                setPopupOpen(true);
             }}
             className={GRID_STYLES.BUTTON_PRIMARY + " mt-4 animate-fade-in"}
          >
            {AUTH_TEXT.BTN_LOGIN}
          </button>
        </form>

        {/* --- GRID CARD (Side Popout) --- */}
        {isPopupOpen && (
          <div className={GRID_STYLES.CARD_GRID_ABSOLUTE}>
             {/* Close Button */}
             <button 
               onClick={() => setPopupOpen(false)}
               className="absolute top-4 right-4 text-white/50 hover:text-white"
             >
               ✕
             </button>

             <GridPopup 
               isOpen={true}
               gridSize={form.gridSize} 
               gridShape={form.gridShape}
               onConfirm={handlePatternSubmit}
               isLoginMode={true} 
             />
          </div>
        )}

      </div>
    </div>
  );
} 