import { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import GridPopup from '../../components/GridPopup';
import { sendOtp, verifyAndRegister } from '../../services/api';
import { GRID_STYLES } from '../../styles/gridStyles';
import { AUTH_TEXT } from '../../constants/gridContent';

export default function Signup({ onLogin }) { // Accept onLogin prop
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: '', email: '', gridSize: '4', gridShape: 'square' });
  const [pattern, setPattern] = useState([]);
  
  // States for Modals
  const [isPopupOpen, setPopupOpen] = useState(false); // For Grid
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [showRoleModal, setShowRoleModal] = useState(false); // NEW: Role Selection
  
  const [otp, setOtp] = useState("");

  const handleChange = (e) => {
      const { name, value } = e.target;
      if (name === "gridSize") {
          if (value === "") { setForm({ ...form, [name]: "" }); return; }
          const num = parseInt(value);
          if(num > 10) { 
            toast.error("Max grid size is 10"); 
            setForm({...form, [name]: "10"}); 
            return;
          }
      }
      setForm({...form, [name]: value});
  };

  const handlePatternConfirm = (selectedIds) => {
      if(selectedIds.length < 3) return toast.error("Select at least 3 points");
      setPattern(selectedIds);
      toast.success("Pattern Saved", { style: { background: '#10B981', color: '#fff' } });
  };

  // 1. Send OTP
  const handleRegisterClick = async (e) => {
    e.preventDefault();
    if (!form.username || !form.email) return toast.error("Please fill all fields");
    if (pattern.length === 0) return toast.error("Please set a password pattern");

    const loadToast = toast.loading("Sending OTP...");
    try {
      await sendOtp(form.email);
      toast.dismiss(loadToast);
      toast.success("OTP Sent!");
      setShowOtpModal(true); 
    } catch (err) {
      toast.dismiss(loadToast);
      toast.error(typeof err === 'string' ? err : "Failed to send OTP");
    }
  };

  // 2. Verify OTP & Open Role Selection
  const handleOtpSubmit = () => {
    if (!otp || otp.length < 4) return toast.error("Please enter valid OTP");
    
    // Logic: OTP is entered -> Close OTP Modal -> Open Role Modal
    setShowOtpModal(false);
    setShowRoleModal(true); 
  };

  // 3. Select Role & Finalize Registration
  const handleRoleSelect = async (role) => {
    const loadToast = toast.loading(`Creating ${role} Account...`);
    
    try {
      // Create DTO with Role
      const userDto = { ...form, pattern, role }; 
      
      // Call API
      await verifyAndRegister(form.email, otp, userDto);
      
      toast.dismiss(loadToast);
      toast.success("Account Created!");
      
      // Auto Login State Update
      if (onLogin) onLogin({ username: form.username, email: form.email, role: role });

      // Redirect Logic
      setTimeout(() => {
        if (role === 'TEACHER') {
            navigate('/teacher-dashboard');
        } else {
            navigate('/student-dashboard');
        }
      }, 1000);
      
    } catch (err) {
      toast.dismiss(loadToast);
      toast.error("Registration Failed. Invalid OTP?");
      setShowRoleModal(false);
      setShowOtpModal(true); // Go back to OTP if failed
    }
  };

  return (
    <div className={GRID_STYLES.WRAPPER}>
      <Toaster position="top-center" />

      {/* --- MAIN FORM --- */}
      <div className={GRID_STYLES.CARD_FORM}>
        <h2 className={GRID_STYLES.HEADING}>{AUTH_TEXT.SIGNUP_TITLE}</h2>
        <form onSubmit={handleRegisterClick}>
          <input name="username" placeholder={AUTH_TEXT.NAME_PLACEHOLDER} className={GRID_STYLES.INPUT} onChange={handleChange} />
          <input name="email" placeholder={AUTH_TEXT.EMAIL_PLACEHOLDER} className={GRID_STYLES.INPUT} onChange={handleChange} />
          
          <input 
            name="gridSize" type="number" min="4" max="10" 
            placeholder="Grid Size (4-10)" className={GRID_STYLES.INPUT} 
            value={form.gridSize} onChange={handleChange} 
          />
          
          <select name="gridShape" className={GRID_STYLES.SELECT} onChange={handleChange}>
             {AUTH_TEXT.SHAPES.map(s => <option key={s.value} value={s.value}>{s.label}</option>)}
          </select>

          <div 
            className={`${GRID_STYLES.INPUT_TRIGGER} ${pattern.length > 0 ? 'border-sky-500 ring-2 ring-sky-400/30 bg-white/40' : ''}`}
            onClick={() => {
               const size = parseInt(form.gridSize);
               if(!size || size < 4) return toast.error("Min grid size is 4");
               setPopupOpen(true); 
            }}
          >
             <span className="text-gray-900 font-semibold">
               {pattern.length > 0 ? `Pattern Set (${pattern.length} pts) ✅` : AUTH_TEXT.PASS_PLACEHOLDER_SET}
             </span>
             <span>🔐</span>
          </div>

          <button type="submit" className={GRID_STYLES.BUTTON_PRIMARY + " mt-2"}>
             {AUTH_TEXT.BTN_SIGNUP}
          </button>
        </form>

        {/* --- 1. OTP MODAL --- */}
        {showOtpModal && (
           <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-black/85 backdrop-blur-xl rounded-3xl animate-fade-in p-6">
              <h3 className="text-2xl font-bold text-white mb-2">Verification</h3>
              <p className="text-gray-400 mb-6 text-sm text-center">
                Code sent to <br/><span className="text-white font-medium">{form.email}</span>
              </p>
              
              <input 
                autoFocus
                className="w-40 bg-white/10 border border-white/30 rounded-xl text-center text-3xl text-white tracking-[0.5em] p-3 outline-none focus:border-sky-400 mb-6"
                maxLength="6"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
              
              <div className="flex gap-4 w-full">
                <button onClick={() => setShowOtpModal(false)} className="flex-1 py-3 bg-gray-600/50 text-white rounded-xl font-bold hover:bg-gray-600 border border-white/10">Cancel</button>
                <button onClick={handleOtpSubmit} className="flex-1 py-3 bg-green-600 text-white rounded-xl font-bold hover:bg-green-500 shadow-lg shadow-green-500/20 border border-white/10">Verify</button>
              </div>
           </div>
        )}

        {/* --- 2. ROLE SELECTION MODAL (NEW) --- */}
        {showRoleModal && (
           <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-slate-900/95 backdrop-blur-xl rounded-3xl animate-fade-in p-6">
              <h3 className="text-2xl font-bold text-white mb-6">Select Your Role</h3>
              
              <div className="grid grid-cols-2 gap-4 w-full">
                <div 
                  onClick={() => handleRoleSelect('STUDENT')}
                  className="p-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-sky-500/20 hover:border-sky-400 cursor-pointer flex flex-col items-center text-center transition-all hover:scale-105"
                >
                  <div className="text-4xl mb-2">🎓</div>
                  <div className="text-white font-bold">Student</div>
                </div>

                <div 
                  onClick={() => handleRoleSelect('TEACHER')}
                  className="p-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-sky-500/20 hover:border-sky-400 cursor-pointer flex flex-col items-center text-center transition-all hover:scale-105"
                >
                  <div className="text-4xl mb-2">🧑‍🏫</div>
                  <div className="text-white font-bold">Teacher</div>
                </div>
              </div>
           </div>
        )}

        {/* --- GRID POPUP --- */}
        {isPopupOpen && (
           <div className={GRID_STYLES.CARD_GRID_ABSOLUTE}>
              <button onClick={() => setPopupOpen(false)} className="absolute top-4 right-4 text-white/50 hover:text-white">✕</button>
              <GridPopup isOpen={true} gridSize={form.gridSize} gridShape={form.gridShape} onConfirm={handlePatternConfirm} />
           </div>
        )}

      </div>
    </div>
  );
}