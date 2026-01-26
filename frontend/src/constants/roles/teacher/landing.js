export const TEACHER_LANDING = {
  // Shared System Assets
  ICONS: {
    VS_TEXT: "VS",
    ARROW_RIGHT: "→",
    CHECK_PATH: "M5 13l4 4L19 7",
    PULSE_DOT_CLASS: "w-2 h-2 rounded-full bg-sky-400 animate-pulse",
  },
  BADGE: "🚀 PS-504 • Accessibility Rewriter Agent",
  TITLE_PREFIX: "ACCESS-",
  TITLE_SUFFIX: "AI",

  FEATURES: [
    { 
      icon: "🔒", 
      title: "AI Courtroom", 
      desc: "Prevents factual drift.", 
      path: "/teacher/meaning-lock" 
    },
    { icon: "⚖️", title: "Aptitue Test", desc: "Agents verify compliance.", path: "/teacher/courtroom" },
    { icon: "🎨", title: "Visual Fallback", desc: "Diagrams when text fails.", path: "/teacher/visuals" }
  ],

  // Teacher Specific Content
  HERO: {
    SUBTITLE_PREFIX: "Empower your classroom with",
    SUBTITLE_HIGHLIGHT: "Automated Accessibility",
    SUBTITLE_SUFFIX: ". Convert materials for all learners instantly.",
    BTN_PRIMARY: "Manage Content",
    BTN_SECONDARY: "Class Analytics",
  },

  MISSION: {
    TITLE: "Your Teaching Superpower",
    TEXT: [
      { text: "Upload any material and instantly generate ", highlight: false },
      { text: "accessible versions", highlight: true },
      { text: " for every student, with ", highlight: false },
      { text: "verified accuracy.", highlight: true },
    ],
    POINTS: [
      "Save hours on lesson preparation.",
      "Ensure 100% WCAG & legal compliance.",
      "Verify AI changes before distribution.",
      "Monitor student comprehension in real-time."
    ]
  },

  COMPARISON: {
    TITLE: "The Workflow Shift",
    PROBLEM: {
      TITLE: "Current Workflow",
      ITEMS: [
        "Manual simplification leads to fact loss.",
        "Accessibility compliance is manual & error-prone.",
        "Lack of audit trail for AI-generated content.",
        "One-size-fits-all ignores student diversity."
      ]
    },
    SOLUTION: {
      TITLE: "ACCESS-AI Workflow",
      ITEMS: [
        "Meaning Lock Engine protects core definitions.",
        "Accessibility Courtroom verifies every rewrite.",
        "Generates Teacher-Ready Output Packets.",
        "CI/CD style pipeline for educational content."
      ]
    }
  },

  // Shared sections moved into this file for a self-contained page
  ARCHITECTURE: {
    title: "System Architecture",
    steps: [
      { id: "01", title: "Teacher Upload", desc: "Input Source Material" },
      { id: "02", title: "Meaning Lock", desc: "Extract Core Facts" },
      { id: "03", title: "Student Profile", desc: "Analyze Proficiency" },
      { id: "04", title: "Adaptive Rewrite", desc: "Simplify Text" },
      { id: "05", title: "Consistency Guard", desc: "Verify Meaning" },
      { id: "06", title: "Visual Gen", desc: "Create Diagrams" },
      { id: "07", title: "Courtroom", desc: "Final Approval" },
      { id: "08", title: "Output Packet", desc: "Teacher Ready" },
    ]
  },

  MODULES: {
    title: "Core Modules",
    list: [
      { title: "Meaning Lock Engine", desc: "Prevents meaning drift before rewriting." },
      { title: "Student Level Adapter", desc: "Personalized simplification per student." },
      { title: "Cognitive Load Meter", desc: "Ensures mental effort stays safe." },
      { title: "Visual Generator", desc: "Creates image-based explanations." },
      { title: "Consistency Guard", desc: "Verifies facts & logic." },
      { title: "Accessibility Courtroom", desc: "Approve/Reject logic for QA." },
    ]
  }
};