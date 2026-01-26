import { useState } from 'react';
import { COURTROOM_CONTENT as CONTENT } from '../../constants/roles/student/courtroom';
import { COURT_STYLES as CSS } from '../../styles/dashboard/courtroomStyles';
import toast from 'react-hot-toast';

export default function AICourtroom() {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [score, setScore] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [gameStatus, setGameStatus] = useState("START");

  const activeLevel = CONTENT.LEVELS[currentLevel];

  const handleVerdict = () => {
    // Basic Gamification Logic
    if (userInput.length > 5) {
      setScore(score + 10);
      setGameStatus("WIN");
      toast.success(CONTENT.GAME_MESSAGES.WIN);
      
      // Level Up Logic
      if (score >= 20 && currentLevel < 2) {
        setCurrentLevel(currentLevel + 1);
        toast(CONTENT.GAME_MESSAGES.LEVEL_UP, { icon: '🔥' });
      }
    } else {
      setGameStatus("LOSE");
      toast.error(CONTENT.GAME_MESSAGES.LOSE);
    }
    setUserInput("");
  };

  return (
    <div className={CSS.WRAPPER}>
      <div className={CSS.CONTAINER}>
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-black tracking-tighter">{CONTENT.TITLE}</h1>
          <p className="text-slate-400">{CONTENT.SUBTITLE}</p>
        </div>

        {/* Judge/Game UI */}
        <div className={CSS.JUDGE_CARD}>
          <div className="flex justify-between items-center mb-12">
            <span className={`${CSS.LEVEL_TAG} ${activeLevel.color} ${activeLevel.bg} border-current`}>
              RANK: {activeLevel.rank}
            </span>
            <div className="text-right">
              <span className="text-[10px] text-slate-500 block uppercase font-bold">Vocabulary XP</span>
              <span className="text-3xl font-mono text-sky-400">{score}</span>
            </div>
          </div>

          <div className="text-center py-10">
            <h2 className={CSS.WORD_DISPLAY}>Photosynthesis</h2>
            <p className="text-slate-400 mb-8 font-light italic text-lg">
              "The Judge demands a simple definition at the {activeLevel.rank} level."
            </p>
          </div>

          <div className="space-y-6">
            <textarea 
              className={CSS.INPUT_AREA}
              rows="3"
              placeholder="Type your explanation here..."
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
            />
            
            <button onClick={handleVerdict} className={CSS.ACTION_BTN}>
              Submit for Verdict
            </button>
          </div>
        </div>

        {/* Level Guide */}
        <div className="grid grid-cols-3 gap-4">
          {CONTENT.LEVELS.map((lvl, i) => (
            <div key={i} className={`p-4 rounded-3xl border ${currentLevel === i ? 'border-sky-500 bg-sky-500/5' : 'border-white/5 opacity-50'}`}>
              <div className={`text-[10px] font-bold mb-1 ${lvl.color}`}>{lvl.rank}</div>
              <div className="text-xs text-slate-400">Level {lvl.level} Vocabulary</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}