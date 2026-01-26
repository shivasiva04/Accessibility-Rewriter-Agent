export const NAV_CONTENT = {
  LOGO_TEXT: "ACCESS-AI",
  NAV_LINKS: [
    { label: "Mission", id: "mission" },
    { label: "Solution", id: "solution" },
    { label: "Architecture", id: "architecture" },
    { label: "Modules", id: "modules" },
  ],
  // --- NEW ROLE BASED LABELS ---
  TEACHER_CLASSROOM: "Classroom",
  STUDENT_JOIN: "Join Classroom",
  
  LINK_REGISTER: "Register",
  LINK_LOGIN: "Login",
  BTN_LOGOUT: "Logout", 
  THEME_DARK: "🌙",
  THEME_LIGHT: "☀️",
};

export const FOOTER_CONTENT = {
  BRAND: "ACCESS-AI",
  TAGLINE: "Empowering education through AI-driven accessibility.",
  COPYRIGHT: "© 2026 ACCESS-AI. All rights reserved.",
  
  COLUMNS: [
    {
      title: "Platform",
      links: [
        { label: "Home", path: "/" },
        { label: "Teacher Login", path: "/signin" },
        { label: "Student Portal", path: "/signup" },
        { label: "System Status", path: "#" }
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "Documentation", path: "#" },
        { label: "Accessibility Standards", path: "#" },
        { label: "API Reference", path: "#" },
        { label: "Community", path: "#" }
      ]
    },
    {
      title: "Contact",
      isContact: true,
      info: [
        { label: "support@accessai.com", icon: "✉️" },
        { label: "+1 (555) 123-4567", icon: "📞" },
        { label: "Chennai, Tamil Nadu, India", icon: "📍" }
      ]
    }
  ]
};