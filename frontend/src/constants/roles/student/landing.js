export const STUDENT_LANDING = {
  BADGE: "🚀 PS-504 • Accessibility Rewriter Agent",
  TITLE_PREFIX: "ACCESS-",
  TITLE_SUFFIX: "AI",

  ICONS: {
    VS_TEXT: "VS",
    ARROW_RIGHT: "→",
    CHECK_PATH: "M5 13l4 4L19 7",
    PULSE_DOT_CLASS: "w-2 h-2 rounded-full bg-emerald-400 animate-pulse",
  },

  FEATURES: [
    { 
      icon: "🔒", 
      title: "Meaning Lock", 
      desc: "Prevents factual drift.",
      path: "/student/content-feed/joined" 
    },
    { 
      icon: "📚", 
      title: "LexiQuest", 
      desc: "Master vocabulary levels.", 
      path: "/student/ai-courtroom" 
    },
    { 
      icon: "🎨", 
      title: "Visual Fallback", 
      desc: "Diagrams when text fails.", 
      path: "/student/explore" 
    }
  ],

  HERO: {
    SUBTITLE_PREFIX: "Your personal AI tutor that",
    SUBTITLE_HIGHLIGHT: "Simplifies Learning",
    SUBTITLE_SUFFIX: "without losing key concepts. Learn at your own pace.",
    BTN_PRIMARY: "Attend Test",
    BTN_SECONDARY: "View My Courses",
  },

  MISSION: {
    TITLE: "Why This Helps You",
    TEXT: [
      { text: "We translate complex textbooks into ", highlight: false },
      { text: "simple, clear language", highlight: true },
      { text: " tailored exactly to your ", highlight: false },
      { text: "reading level.", highlight: true },
    ],
    POINTS: [
      "Understand tough concepts instantly.",
      "Visual diagrams for every complex topic.",
      "Ask AI to re-explain until you get it.",
      "Track your progress and improve grades."
    ]
  },

  COMPARISON: {
    TITLE: "Learning: Then vs. Now",
    PROBLEM: {
      TITLE: "Traditional Learning",
      ITEMS: [
        "Textbooks use confusing, hard words.",
        "One explanation for everyone.",
        "Getting stuck means falling behind.",
        "Lack of visuals for complex ideas."
      ]
    },
    SOLUTION: {
      TITLE: "ACCESS-AI Learning",
      ITEMS: [
        "Content adapted to your reading level.",
        "Visual Generator creates diagrams instantly.",
        "Step-by-step breakdowns of hard topics.",
        "Zero meaning drift (you learn the right facts)."
      ]
    }
  },

  ARCHITECTURE: {
    title: "How It Helps You",
    steps: [
      { id: "01", title: "Input", desc: "Lesson Material" },
      { id: "02", title: "Analyze", desc: "Check Your Profile" },
      { id: "03", title: "Simplify", desc: "Rewrite Text" },
      { id: "04", title: "Check", desc: "Too Hard?" },
      { id: "05", title: "Visuals", desc: "Create Images" },
      { id: "06", title: "Verify", desc: "Check Facts" },
    ]
  },

  MODULES: {
    title: "Learning Boosters",
    list: [
      { title: "Visual Generator", desc: "Turns text into easy diagrams." },
      { title: "Student Level Adapter", desc: "Adjusts words to match your English level." },
      { title: "Visual Fallback", desc: "If you don't get the text, we show a picture." },
      { title: "Bilingual Support", desc: "See explanations in your native language." },
      { title: "Key Concept Highlighter", desc: "Focuses on exactly what you need to learn." },
      { title: "Consistency Guard", desc: "Verifies facts & logic automatically." },
    ]
  }
};