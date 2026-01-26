import { useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { STUDENT_EXPLORE_CONTENT as CONTENT } from '../../constants/roles/student/explore';
import { STUDENT_CLASSROOM_STYLES as CSS } from '../../styles/dashboard/studentStyles';

export default function ExploreClasses({ user }) {
  const [classrooms, setClassrooms] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("explore"); 
  const [selectedClass, setSelectedClass] = useState(null);
  const [materials, setMaterials] = useState([]);
  const [loadingMaterials, setLoadingMaterials] = useState(false);

  useEffect(() => { loadClassrooms(); }, []);

  const loadClassrooms = async () => {
    try {
      const response = await axios.get(`${CONTENT.API.BASE}/all`);
      setClassrooms(response.data);
    } catch (err) { 
      toast.error(CONTENT.MESSAGES.ERR_LOAD); 
    }
  };

  const handleViewMaterials = async (cls) => {
    setSelectedClass(cls);
    setMaterials([]); 
    setLoadingMaterials(true);
    
    try {
      const res = await axios.get(`${CONTENT.API.MATERIALS}/${cls.id}`);
      setMaterials(res.data);
    } catch (err) { 
      toast.error("Failed to load materials.");
    } finally {
      setLoadingMaterials(false);
    }
  };

  // NEW: Download Handler
  const handleDownload = async (materialId, fileName) => {
    const downloadToast = toast.loading(`Downloading ${fileName}...`);
    try {
      const response = await axios.get(`http://localhost:8080/api/materials/download/${materialId}`, {
        responseType: 'blob', // Important for binary files
      });

      // Create download link in browser
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', fileName);
      document.body.appendChild(link);
      link.click();
      
      // Cleanup
      link.parentNode.removeChild(link);
      window.URL.revokeObjectURL(url);
      toast.dismiss(downloadToast);
      toast.success("Download Successful!");
    } catch (err) {
      toast.dismiss(downloadToast);
      toast.error("Download failed.");
    }
  };

  const handleJoin = async (classCode) => {
    const loadToast = toast.loading(CONTENT.MESSAGES.JOINING);
    try {
      const response = await axios.post(`${CONTENT.API.BASE}/join`, {
        classCode: classCode.trim(),
        studentEmail: user.email
      });
      toast.dismiss(loadToast);
      if (response.data.success) {
        toast.success(CONTENT.MESSAGES.SUCCESS_JOIN);
        loadClassrooms(); 
      } else {
        toast.error(response.data.message || CONTENT.MESSAGES.ERR_JOIN);
      }
    } catch (err) {
      toast.dismiss(loadToast);
      toast.error(CONTENT.MESSAGES.ERR_JOIN);
    }
  };

  const isEnrolled = (cls) => cls.students?.some(s => s.email === user.email);

  const filtered = classrooms.filter(c => {
    const term = searchTerm.toLowerCase().trim();
    const matchesSearch = c.className.toLowerCase().includes(term) ||
                         c.subject.toLowerCase().includes(term) ||
                         c.classCode.toLowerCase() === term;
    
    return activeTab === "joined" ? (matchesSearch && isEnrolled(c)) : (matchesSearch && !isEnrolled(c));
  });

  return (
    <div className={CSS.WRAPPER}>
      <div className={CSS.CONTAINER}>
        <div className={CSS.HEADER_SECTION}>
          <h2 className={CSS.TITLE_TEXT}>{CONTENT.TITLE}</h2>
          <p className={CSS.SUBTITLE_TEXT}>{CONTENT.SUBTITLE}</p>
        </div>

        <div className={CSS.TAB_BAR}>
          <button 
            onClick={() => setActiveTab("explore")}
            className={`${CSS.TAB_BTN_BASE} ${activeTab === "explore" ? CSS.TAB_ACTIVE : CSS.TAB_INACTIVE}`}
          >
            {CONTENT.TABS.EXPLORE}
          </button>
          <button 
            onClick={() => setActiveTab("joined")}
            className={`${CSS.TAB_BTN_BASE} ${activeTab === "joined" ? CSS.TAB_ACTIVE : CSS.TAB_INACTIVE}`}
          >
            {CONTENT.TABS.JOINED}
          </button>
        </div>

        <div className={CSS.SEARCH_WRAPPER}>
          <input className={CSS.SEARCH_BOX} placeholder={CONTENT.SEARCH_PLACEHOLDER} value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
          <span className={CSS.SEARCH_ICON}>🔍</span>
        </div>

        <div className={CSS.GRID_LAYOUT}>
          {filtered.length > 0 ? filtered.map((cls) => (
            <div key={cls.id} className={CSS.CARD}>
              <div className={CSS.CARD_TOP_ROW}>
                <span className={CSS.CARD_TAG}>{cls.subject}</span>
                <span className={CSS.CARD_CODE_TXT}>{CONTENT.CARDS.CODE_LABEL} {cls.classCode}</span>
              </div>
              <h3 className={CSS.CARD_TITLE}>{cls.className}</h3>
              {activeTab === "explore" ? (
                <button onClick={() => handleJoin(cls.classCode)} className={CSS.BTN_JOIN}>{CONTENT.CARDS.JOIN_BTN}</button>
              ) : (
                <button onClick={() => handleViewMaterials(cls)} className={CSS.BTN_MANAGE}>{CONTENT.CARDS.MANAGE_BTN}</button>
              )}
            </div>
          )) : <div className={CSS.EMPTY_STATE}>{CONTENT.MESSAGES.EMPTY_MSG}</div>}
        </div>
      </div>

      {selectedClass && (
        <div className={CSS.MODAL_OVERLAY}>
          <div className={CSS.MODAL_BODY}>
            <div className={CSS.MODAL_HEADER}>
              <h3 className={CSS.MODAL_TITLE_WRAP}>{selectedClass.className} <span className={CSS.MODAL_TITLE_ACCENT}>/ {CONTENT.MODAL.MATERIALS_TITLE}</span></h3>
              <button onClick={() => setSelectedClass(null)} className={CSS.MODAL_CLOSE_BTN}>{CONTENT.MODAL.CLOSE}</button>
            </div>
            
            <div className={CSS.MODAL_CONTENT}>
              {loadingMaterials ? (
                <div className="text-center py-10 text-sky-500 animate-pulse">Syncing materials...</div>
              ) : materials.length > 0 ? materials.map(m => (
                <div key={m.id} className={CSS.MATERIAL_CARD}>
                  <div className="flex justify-between items-start mb-2">
                    <h4 className={CSS.MATERIAL_TOPIC}>{m.topic}</h4>
                    <span className="text-[10px] bg-sky-500/10 text-sky-500 px-2 py-1 rounded-md border border-sky-500/20 font-bold uppercase">Verified Resource</span>
                  </div>
                  <p className={CSS.MATERIAL_DESC}>{m.content}</p>
                  
                  {m.fileName && (
                    <div className="mt-4 pt-4 border-t border-white/5">
                        <button onClick={() => handleDownload(m.id, m.fileName)} className={CSS.ATTACHMENT_BTN}>
                          📎 {CONTENT.MODAL.ATTACHMENT_LABEL}: {m.fileName}
                        </button>
                    </div>
                  )}
                </div>
              )) : <div className={CSS.EMPTY_STATE}>{CONTENT.MODAL.EMPTY_MATERIALS}</div>}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}