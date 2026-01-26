export const STUDENT_CONTENT_FEED = {
  TITLE: "Meaning Lock Feed",
  SUBTITLE: "Factual concepts protected by AI. Tap to simplify with real-world examples.",
  CARDS: {
    TOPIC_LABEL: "Verified Knowledge",
    AI_BTN: "AI Meaning Simplify",
    ORIGINAL_BTN: "Show Original",
    DOWNLOAD_BTN: "Get File",
    DATE_PREFIX: "Shared on:"
  },
  MESSAGES: {
    LOADING_AI: "Consulting Gemini AI...",
    SUCCESS_AI: "Concept simplified with real-time example!",
    ERROR: "Academic sync failed.",
    EMPTY: "No materials shared yet."
  },
  API: {
    FETCH_CONTENT: "http://localhost:8080/api/materials/class",
    SIMPLIFY: "http://localhost:8080/api/materials/simplify"
  }
};