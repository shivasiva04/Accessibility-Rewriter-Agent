export const COURTROOM_CONTENT = {
  TITLE: "AI Courtroom",
  SUBTITLE: "The ultimate trial for your vocabulary. Can you defend your English level?",
  
  LEVELS: [
    { rank: "Novice", level: 1, color: "text-emerald-400", bg: "bg-emerald-400/10" },
    { rank: "Intermediate", level: 2, color: "text-sky-400", bg: "bg-sky-400/10" },
    { rank: "Expert", level: 3, color: "text-purple-400", bg: "bg-purple-400/10" }
  ],

  GAME_MESSAGES: {
    START: "The Judge is ready. Present your case!",
    WIN: "Objection Overruled! You have mastered this word.",
    LOSE: "Contempt of Court! Your vocabulary needs practice.",
    LEVEL_UP: "Rank Promoted! Your English level has increased."
  },

  API: {
    SIMPLIFY: "http://localhost:8080/api/materials/simplify-raw"
  }
};