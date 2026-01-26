export const APP_STYLES = {
  // ... existing MAIN_WRAPPER ...
  MAIN_WRAPPER: "min-h-screen w-full flex flex-col transition-colors duration-300 dark:bg-gray-900 bg-gray-50",

  NAVBAR: {
    CONTAINER: "fixed top-0 left-0 w-full h-20 px-8 flex justify-between items-center z-50 backdrop-blur-md border-b transition-all duration-300 " +
               "dark:bg-gray-900/60 dark:border-sky-500/10 " +
               "bg-white/80 border-gray-200",
    
    LOGO_LINK: "text-2xl font-extrabold tracking-wider flex items-center gap-3 group cursor-pointer transition-colors " +
               "dark:text-white text-gray-800",
    
    LOGO_BAR: "w-1.5 h-8 rounded-full group-hover:h-10 transition-all duration-300 " +
              "bg-gradient-to-b from-sky-400 to-blue-600 shadow-[0_0_15px_rgba(56,189,248,0.5)]",
    
    RIGHT_SECTION: "flex items-center gap-4",
    
    LINK_REGISTER: "text-sm font-medium transition-colors tracking-wide py-2 relative group " +
                   "dark:text-gray-300 text-gray-600 hover:text-sky-500 dark:hover:text-white",
    
    LINK_REGISTER_UNDERLINE: "absolute bottom-0 left-0 w-0 h-0.5 bg-sky-500 transition-all duration-300 group-hover:w-full shadow-[0_0_10px_rgba(14,165,233,0.5)]",
    
    LINK_LOGIN: "px-6 py-2.5 rounded-xl text-sm font-bold border transition-all duration-300 shadow-lg transform hover:-translate-y-0.5 " +
                "dark:bg-white/5 dark:border-white/10 dark:text-white dark:hover:bg-sky-600 dark:hover:border-sky-500 " +
                "bg-gradient-to-r from-sky-500 to-blue-600 border-transparent text-white hover:shadow-sky-500/30",
                
    THEME_BTN: "p-2 mr-2 rounded-full transition-all duration-300 hover:scale-110 active:scale-95 " + 
               "dark:bg-white/10 dark:text-yellow-400 hover:bg-sky-100 dark:hover:bg-white/20 " +
               "bg-gray-100 text-gray-600",

    // UPDATED PILL FOR ALIGNMENT
    USER_PILL: "flex items-center gap-3 pl-2 pr-4 py-1.5 rounded-2xl border transition-all " +
               "dark:bg-white/5 dark:border-white/10 border-gray-200 bg-white shadow-sm",

    AVATAR: "w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-400 to-blue-600 flex items-center justify-center text-white font-black text-sm shadow-md",

    USER_TEXT: "font-bold text-sm hidden md:block dark:text-gray-200 text-gray-700",

    BTN_LOGOUT: "text-sm font-bold transition-colors hover:text-red-500 dark:text-gray-400 text-gray-500",
  },

  // ... existing FOOTER styles ...
  FOOTER: {
    CONTAINER: "w-full border-t z-10 relative backdrop-blur-md transition-all duration-300 dark:bg-gray-900/60 dark:border-sky-500/10 bg-white/80 border-gray-200",
    INNER_GRID: "max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12",
    BRAND_COL: "col-span-1 flex flex-col gap-4",
    BRAND_TITLE: "text-2xl font-extrabold tracking-wider bg-gradient-to-r from-sky-400 to-blue-600 text-transparent bg-clip-text",
    TAGLINE: "text-sm leading-relaxed dark:text-gray-400 text-gray-600",
    COL_TITLE: "font-bold mb-6 text-sm uppercase tracking-widest dark:text-white text-gray-900",
    LINK_LIST: "flex flex-col gap-3",
    LINK_ITEM: "text-sm transition-colors cursor-pointer dark:text-gray-400 dark:hover:text-sky-400 text-gray-600 hover:text-sky-600",
    CONTACT_ITEM: "flex items-center gap-3 text-sm dark:text-gray-400 text-gray-600",
    CONTACT_ICON: "text-lg text-sky-500",
    BOTTOM_BAR: "w-full py-6 border-t text-center dark:border-white/5 border-gray-200",
    COPYRIGHT: "text-xs dark:text-gray-500 text-gray-400",
  }
};