import { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { STUDENT_FEED_STYLES as CSS } from '../../styles/dashboard/studentStyles';

export default function StudentContentFeed() {
  const [inputData, setInputData] = useState({ title: "", concept: "" });
  const [result, setResult] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const handleGenerate = async () => {
    if (!inputData.title || !inputData.concept) return toast.error("Fill both fields!");

    setIsProcessing(true);
    const loadToast = toast.loading("Unlocking Meaning...");

    try {
      const res = await axios.post(`http://localhost:8080/api/materials/simplify-raw`, inputData);
      
      // If AI worked, use its result. If it returned an error string, use fallback.
      if (res.data.simplifiedContent && !res.data.simplifiedContent.includes("Error")) {
        setResult(res.data.simplifiedContent);
        toast.success("AI Meaning Unlocked!");
      } else {
        throw new Error("AI Offline");
      }
    } catch (err) {
      // EMERGENCY FALLBACK LOGIC
      const fallback = `SIMPLIFIED: ${inputData.concept.substring(0, 150)}...\n\nEXAMPLE: Think of ${inputData.title} like a factory processing raw materials into a finished product.\n\nKEYWORDS: ${inputData.title.split(' ')[0]}, System, Process.`;
      setResult(fallback);
      toast.error("AI Busy - Using Instant Meaning Lock Fallback");
    } finally {
      toast.dismiss(loadToast);
      setIsProcessing(false);
    }
  };

  return (
    <div className={CSS.WRAPPER}>
      <div className={CSS.CONTAINER}>
        <h1 className={CSS.TITLE}>Meaning Lock</h1>
        <div className={CSS.CONCEPT_CARD}>
          <input 
            className="w-full p-4 mb-4 rounded-2xl bg-slate-900 text-white border border-white/10"
            placeholder="Topic Title" 
            value={inputData.title}
            onChange={(e) => setInputData({...inputData, title: e.target.value})}
          />
          <textarea 
            rows="5"
            className="w-full p-4 mb-4 rounded-2xl bg-slate-900 text-white border border-white/10"
            placeholder="Complex Concept"
            value={inputData.concept}
            onChange={(e) => setInputData({...inputData, concept: e.target.value})}
          />
          <button 
            onClick={handleGenerate}
            className="w-full py-4 rounded-2xl bg-emerald-600 text-white font-bold"
          >
            {isProcessing ? "Processing..." : "UNLOCK MEANING"}
          </button>
        </div>

        {result && (
          <div className={`${CSS.CONCEPT_CARD} mt-8 border-emerald-500/50 animate-fade-in`}>
            <h2 className="text-2xl font-bold text-emerald-400 mb-4">{inputData.title}</h2>
            <p className="text-slate-200 italic whitespace-pre-wrap leading-relaxed border-l-4 border-emerald-500 pl-4">
              {result}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}