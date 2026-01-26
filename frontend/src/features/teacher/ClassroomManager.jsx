import { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { TEACHER_CLASSROOM_CONTENT as CONTENT } from "../../constants/roles/teacher/classroom";
import { TEACHER_MANAGE_CONTENT as MANAGE } from "../../constants/roles/teacher/management";
import { TEACHER_CLASSROOM_STYLES as CSS } from "../../styles/dashboard/teacherStyles";

export default function ClassroomManager({ user }) {
  const [form, setForm] = useState({ className: "", subject: "" });
  const [createdCode, setCreatedCode] = useState(null);
  const [myClasses, setMyClasses] = useState([]);
  const [selectedClass, setSelectedClass] = useState(null);
  const [activeTab, setActiveTab] = useState("materials");

  const [materialForm, setMaterialForm] = useState({ topic: "", content: "", file: null });
  const [sharedMaterials, setSharedMaterials] = useState([]);

  useEffect(() => { fetchMyClasses(); }, []);
  
  useEffect(() => { 
    if (selectedClass) fetchMaterials(selectedClass.id); 
  }, [selectedClass]);

  const fetchMyClasses = async () => {
    try {
      const res = await axios.get(`${CONTENT.API_URL}/all`);
      setMyClasses(res.data.filter(c => c.teacherEmail === user?.email));
    } catch (err) { console.error(err); }
  };

  const fetchMaterials = async (id) => {
    try {
      const res = await axios.get(`http://localhost:8080/api/materials/class/${id}`);
      setSharedMaterials(res.data);
    } catch (err) { console.error(err); }
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    if (!form.className || !form.subject) return toast.error("All fields required");

    const loadToast = toast.loading("Syncing with Dashboard...");
    try {
      const response = await axios.post(`${CONTENT.API_URL}/create`, {
        ...form,
        teacherEmail: user?.email
      });
      toast.dismiss(loadToast);
      toast.success(CONTENT.SUCCESS_MSG);
      setCreatedCode(response.data.classCode);
      fetchMyClasses();
    } catch (err) {
      toast.dismiss(loadToast);
      toast.error("Process failed");
    }
  };

  const handleShareContent = async () => {
    if (!materialForm.topic) return toast.error("Enter a topic title");
    const formData = new FormData();
    formData.append("classId", selectedClass.id);
    formData.append("topic", materialForm.topic);
    formData.append("content", materialForm.content);
    if (materialForm.file) formData.append("file", materialForm.file);

    const loadToast = toast.loading("Broadcasting...");
    try {
      await axios.post("http://localhost:8080/api/materials/upload", formData);
      toast.dismiss(loadToast);
      toast.success(MANAGE.MATERIALS.SUCCESS_UPLOAD);
      setMaterialForm({ topic: "", content: "", file: null });
      fetchMaterials(selectedClass.id);
    } catch (err) {
      toast.dismiss(loadToast);
      toast.error("Upload failed");
    }
  };

  return (
    <div className={CSS.WRAPPER}>
      <div className={CSS.CONTAINER}>
        {/* Page Header */}
        <div className="text-left mb-16 animate-fade-in">
          <h2 className={CSS.PAGE_TITLE}>{CONTENT.TITLE}</h2>
          <p className={CSS.PAGE_SUBTITLE}>{CONTENT.SUBTITLE}</p>
        </div>

        <div className={CSS.MAIN_GRID}>
          {/* Create Section */}
          <div className={CSS.FORM_SECTION}>
            <h3 className="text-3xl font-extrabold dark:text-white text-slate-900 mb-2 tracking-tight">
              {CONTENT.CREATE_CARD_TITLE}
            </h3>
            <p className="text-sm text-gray-500 mb-10 font-medium">{CONTENT.CREATE_CARD_DESC}</p>
            
            {!createdCode ? (
              <form onSubmit={handleCreate} className="space-y-4">
                <input className={CSS.INPUT_FIELD} placeholder={CONTENT.PLACEHOLDERS.CLASS_NAME} value={form.className} onChange={e => setForm({...form, className: e.target.value})} />
                <input className={CSS.INPUT_FIELD} placeholder={CONTENT.PLACEHOLDERS.SUBJECT} value={form.subject} onChange={e => setForm({...form, subject: e.target.value})} />
                <button type="submit" className={CSS.SUBMIT_BTN}>{CONTENT.BTN_CREATE}</button>
              </form>
            ) : (
              <div className="text-center py-8 bg-sky-500/5 rounded-3xl border-2 border-dashed border-sky-500/20">
                <div className="text-5xl font-black tracking-[0.1em] text-sky-500 mb-6 drop-shadow-sm">{createdCode}</div>
                <button onClick={() => setCreatedCode(null)} className="text-xs font-black uppercase tracking-widest text-gray-500 hover:text-sky-500 transition-colors underline">Create New Class</button>
              </div>
            )}
          </div>

          {/* List Section */}
          <div className={CSS.LIST_SECTION}>
            <h3 className={CSS.LIST_HEADER}>
              {CONTENT.LIST_TITLE} <span className="px-3 py-1 rounded-lg bg-sky-500/10 text-sky-500 text-xs font-black">{myClasses.length}</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {myClasses.map(cls => (
                <div key={cls.id} className={CSS.CLASS_CARD}>
                  <div className="flex justify-between items-center">
                    <span className={CSS.CARD_TAG}>{cls.subject}</span>
                    <span className={CSS.CARD_CODE}>CODE: {cls.classCode}</span>
                  </div>
                  <h4 className={CSS.CARD_TITLE}>{cls.className}</h4>
                  <button onClick={() => setSelectedClass(cls)} className={CSS.MANAGE_BTN}>Access Classroom</button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Dashboard */}
        {selectedClass && (
          <div className={CSS.MODAL_OVERLAY}>
            <div className={CSS.MODAL_BODY}>
              <div className={CSS.MODAL_HEADER}>
                <div>
                  <h3 className={CSS.HEADER_TITLE}>{selectedClass.className}</h3>
                  <div className={CSS.HEADER_SUB}>{selectedClass.subject} • Enrolled via {selectedClass.classCode}</div>
                </div>
                <button onClick={() => setSelectedClass(null)} className={CSS.MODAL_CLOSE}>✕</button>
              </div>

              <div className={CSS.TAB_CONTAINER}>
                <button onClick={() => setActiveTab("materials")} className={`${CSS.TAB_LINK} ${activeTab === "materials" ? CSS.TAB_ACTIVE : CSS.TAB_INACTIVE}`}>{MANAGE.TAB_MATERIALS}</button>
                <button onClick={() => setActiveTab("students")} className={`${CSS.TAB_LINK} ${activeTab === "students" ? CSS.TAB_ACTIVE : CSS.TAB_INACTIVE}`}>{MANAGE.TAB_STUDENTS}</button>
              </div>

              <div className={CSS.CONTENT_SCROLL}>
                {activeTab === "materials" ? (
                  <div className="animate-fade-in">
                    <div className={CSS.SHARE_BOX}>
                      <input className={CSS.SHARE_INPUT} placeholder="Topic Title" value={materialForm.topic} onChange={e => setMaterialForm({...materialForm, topic: e.target.value})} />
                      <textarea className={CSS.SHARE_AREA} placeholder="Context, notes, or instructions for your students..." value={materialForm.content} onChange={e => setMaterialForm({...materialForm, content: e.target.value})} />
                      <div className="flex flex-col sm:flex-row gap-6 items-center border-t border-white/5 pt-6">
                        <input type="file" className="text-[10px] text-gray-500 file:mr-4 file:py-2 file:px-6 file:rounded-xl file:border-0 file:text-[10px] file:font-black file:uppercase file:bg-sky-500/10 file:text-sky-400 cursor-pointer" onChange={e => setMaterialForm({...materialForm, file: e.target.files[0]})} />
                        <button onClick={handleShareContent} className={CSS.POST_BTN}>{MANAGE.MATERIALS.BTN_UPLOAD}</button>
                      </div>
                    </div>

                    {sharedMaterials.map(mat => (
                      <div key={mat.id} className={CSS.ITEM_CARD}>
                        <span className={CSS.ITEM_TOPIC}>{mat.topic}</span>
                        <span className="text-[9px] font-mono text-gray-500 block mb-4 uppercase tracking-[0.2em] font-bold">
                          POSTED: {new Date(mat.uploadDate).toLocaleDateString()}
                        </span>
                        <p className={CSS.ITEM_CONTENT}>{mat.content}</p>
                        {mat.fileName && <div className={CSS.ATTACHMENT}>📎 {mat.fileName}</div>}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="animate-fade-in">
                    <table className={CSS.TABLE}>
                      <thead>
                        <tr className={CSS.THEAD}>
                          <th className="pb-6">STUDENT NAME</th>
                          <th className="pb-6">EMAIL IDENTITY</th>
                          <th className="pb-6 text-right">SYSTEM STATUS</th>
                        </tr>
                      </thead>
                      <tbody>
                        {selectedClass.students?.map(s => (
                          <tr key={s.id} className="border-b dark:border-white/5 border-slate-100 hover:bg-slate-50 dark:hover:bg-white/[0.01] transition-colors">
                            <td className={CSS.TD_NAME}>{s.username}</td>
                            <td className="py-6 text-gray-500 font-mono text-xs">{s.email}</td>
                            <td className="py-6 text-right"><span className={CSS.STATUS_BADGE}>Verified</span></td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}