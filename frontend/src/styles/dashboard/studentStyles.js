export const STUDENT_STYLES = {
  // --- BASE WRAPPER ---
  WRAPPER: "relative min-h-screen w-full overflow-x-hidden " +
           "bg-[url('/smoke.jpg')] bg-cover bg-center bg-no-repeat bg-fixed " +
           "before:absolute before:inset-0 before:z-0 " +
           "before:bg-gradient-to-br dark:before:from-slate-950/95 dark:before:via-slate-900/90 dark:before:to-slate-950/95 " +
           "before:from-slate-50/95 before:via-white/90 before:to-slate-100/95",

  CONTAINER: "relative z-10 text-center max-w-5xl px-6 py-20 mx-auto animate-fade-in-up",

  // --- HERO SECTION ---
  BADGE: "inline-block mb-6 mt-6 px-4 py-1.5 rounded-full backdrop-blur-md shadow-lg border uppercase tracking-widest text-xs font-bold " +
         "dark:bg-emerald-500/10 dark:border-emerald-400/20 dark:text-emerald-300 dark:shadow-[0_0_20px_rgba(16,185,129,0.15)] " +
         "bg-white/80 border-emerald-200 text-emerald-600 shadow-sm",

  TITLE_MAIN: "text-5xl md:text-7xl font-extrabold mb-6 tracking-tight drop-shadow-2xl dark:text-white text-slate-900",

  TITLE_GRADIENT: "text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500",

  SUBTITLE: "text-lg md:text-2xl mb-8 font-light max-w-3xl mx-auto leading-relaxed dark:text-slate-300 text-slate-600",
  SUBTITLE_BOLD: "font-semibold dark:text-white text-slate-900",

  // --- FEATURE CARDS ---
  FEATURE_GRID: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 text-left w-full",
  
  FEATURE_CARD: "p-6 rounded-2xl border backdrop-blur-lg transition-all duration-300 group " +
                "dark:bg-white/[0.03] dark:border-white/[0.08] dark:hover:bg-emerald-500/[0.05] dark:hover:border-emerald-500/30 " +
                "bg-white/60 border-slate-200 hover:border-emerald-300 hover:shadow-lg hover:bg-white",

  FEATURE_ICON: "text-3xl mb-4 transform group-hover:scale-110 transition-transform duration-300 grayscale group-hover:grayscale-0",
  
  FEATURE_TITLE: "text-xl font-bold mb-2 transition-colors dark:text-white dark:group-hover:text-emerald-300 text-slate-900 group-hover:text-emerald-600",
  
  FEATURE_DESC: "text-sm transition-colors dark:text-slate-400 dark:group-hover:text-slate-200 text-slate-500 group-hover:text-slate-700",

  // --- BUTTONS ---
  BTN_GROUP: "flex flex-col sm:flex-row gap-5 justify-center items-center",
  
  BTN_PRIMARY: "w-full sm:w-auto px-8 py-4 rounded-xl text-white font-bold text-lg shadow-xl shadow-emerald-500/20 hover:scale-[1.02] transition-all duration-300 " +
               "bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500",
               
  BTN_SECONDARY: "w-full sm:w-auto px-8 py-4 rounded-xl border backdrop-blur-sm transition-all font-bold text-lg " +
                 "dark:bg-white/[0.02] dark:text-white dark:border-white/10 dark:hover:bg-white/[0.08] " +
                 "bg-white/80 text-slate-700 border-slate-200 hover:bg-white",

  // --- SECTIONS ---
  SECTION_WRAPPER: "relative z-10 w-full min-h-screen flex flex-col justify-center items-center py-24 border-t backdrop-blur-sm " +
                   "dark:border-white/[0.05] dark:bg-slate-950/50 border-slate-200/60 bg-slate-50/50",

  SECTION_TITLE: "text-4xl md:text-5xl font-extrabold mb-16 text-center drop-shadow-lg tracking-tight dark:text-white text-slate-900",

  // --- MISSION ---
  MISSION_CONTAINER: "max-w-6xl w-full px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch",
  
  MISSION_MAIN_CARD: "lg:col-span-7 p-12 rounded-[2.5rem] border backdrop-blur-2xl shadow-2xl flex flex-col justify-center relative overflow-hidden " +
                     "dark:border-white/[0.1] dark:bg-gradient-to-br dark:from-slate-900/90 dark:via-slate-800/90 dark:to-slate-900/90 border-slate-200 bg-white",

  MISSION_GLOW: "absolute -top-20 -left-20 w-80 h-80 rounded-full blur-[100px] opacity-60 dark:bg-emerald-600/30 bg-emerald-200/50",

  MISSION_LABEL: "relative z-10 font-bold tracking-[0.2em] text-sm mb-6 uppercase flex items-center gap-2 dark:text-emerald-400 text-emerald-600",

  MISSION_TEXT: "relative z-10 text-3xl md:text-4xl font-light leading-tight dark:text-slate-100 text-slate-900",

  MISSION_HIGHLIGHT: "font-semibold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400",

  MISSION_RIGHT_STACK: "lg:col-span-5 flex flex-col gap-4 justify-center",

  MISSION_POINT_CARD: "p-6 rounded-2xl border transition-all duration-300 group flex items-center gap-5 cursor-default shadow-sm hover:shadow-md " +
                      "dark:border-white/[0.05] dark:bg-slate-900/60 dark:hover:bg-slate-800/80 dark:hover:border-emerald-500/20 " +
                      "border-slate-200 bg-white hover:border-emerald-300",

  CHECK_ICON_BOX: "w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 border transition-transform group-hover:scale-110 " +
                  "dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20 bg-emerald-50 text-emerald-600 border-emerald-100",

  MISSION_POINT_TEXT: "text-sm md:text-base font-medium leading-relaxed transition-colors dark:text-slate-400 dark:group-hover:text-slate-200 text-slate-600 group-hover:text-slate-900",

  // --- COMPARISON ---
  COMP_CONTAINER: "max-w-7xl w-full px-6",
  
  COMP_GRID: "grid md:grid-cols-2 gap-0 border rounded-[2.5rem] overflow-hidden shadow-2xl backdrop-blur-3xl relative " +
             "dark:border-white/[0.08] dark:bg-slate-950/90 border-slate-200 bg-white",

  COMP_VS_BADGE: "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-16 h-16 rounded-full border-4 flex items-center justify-center text-base font-black shadow-[0_0_30px_rgba(0,0,0,0.3)] hidden md:flex " +
                 "dark:bg-slate-950 dark:border-slate-800 dark:text-slate-400 bg-white border-slate-100 text-slate-400",

  // Left Side (Problem)
  COMP_SIDE_BAD: "p-10 md:p-16 relative overflow-hidden group border-b md:border-b-0 md:border-r transition-all duration-500 " +
                 "dark:border-white/[0.05] dark:bg-gradient-to-b dark:from-red-500/[0.08] dark:to-transparent dark:hover:from-red-500/[0.12] border-slate-100 bg-red-50/40 hover:bg-red-50/70",

  COMP_TITLE_BAD: "text-2xl md:text-3xl font-bold mb-10 flex items-center gap-4 tracking-tight dark:text-red-400 text-red-600",

  COMP_LIST_BAD: "space-y-8",
  
  COMP_ITEM_BAD: "flex items-start gap-5 text-base leading-relaxed transition-colors duration-300 dark:text-slate-300 dark:group-hover:text-white text-slate-600 group-hover:text-slate-900",

  ICON_BAD: "text-xl mt-0.5 flex-shrink-0 dark:text-red-400 text-red-500 drop-shadow-md",

  // Right Side (Solution)
  COMP_SIDE_GOOD: "p-10 md:p-16 relative overflow-hidden group transition-all duration-500 " +
                  "dark:bg-gradient-to-b dark:from-emerald-500/[0.08] dark:to-transparent dark:hover:from-emerald-500/[0.12] bg-emerald-50/40 hover:bg-emerald-50/70",

  COMP_TITLE_GOOD: "text-2xl md:text-3xl font-bold mb-10 flex items-center gap-4 tracking-tight dark:text-emerald-400 text-emerald-600",

  COMP_LIST_GOOD: "space-y-8",
  
  COMP_ITEM_GOOD: "flex items-start gap-5 text-base leading-relaxed transition-colors duration-300 dark:text-slate-200 dark:group-hover:text-white text-slate-700 group-hover:text-slate-900",

  ICON_GOOD: "text-xl mt-0.5 flex-shrink-0 dark:text-emerald-400 text-emerald-600 drop-shadow-md",

  // --- ARCHITECTURE & MODULES ---
  ARCH_GRID: "flex flex-wrap justify-center gap-8 max-w-6xl w-full px-4",
  
  ARCH_CARD: "w-44 p-6 rounded-2xl border transition-all flex flex-col items-center text-center shadow-sm hover:shadow-lg " +
             "dark:border-white/10 dark:bg-white/[0.02] dark:hover:border-emerald-400/40 dark:hover:bg-slate-900/20 border-slate-200 bg-white hover:border-emerald-300 hover:-translate-y-1",

  ARCH_NUM: "w-10 h-10 rounded-full font-bold flex items-center justify-center mb-4 text-xs border " +
            "dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20 bg-emerald-50 text-emerald-600 border-emerald-100",

  ARCH_TITLE: "font-bold text-sm mb-2 dark:text-white text-slate-900",
  
  ARCH_DESC: "text-xs dark:text-slate-400 text-slate-500 leading-relaxed",
  
  ARCH_ARROW: "hidden md:block text-2xl self-center dark:text-slate-600 text-slate-300",

  MOD_GRID: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full px-4",
  
  MOD_CARD: "p-8 rounded-2xl border transition-all group shadow-sm hover:shadow-xl " +
            "dark:border-white/10 dark:bg-white/[0.02] dark:hover:bg-emerald-500/[0.05] dark:hover:border-emerald-400/30 border-slate-200 bg-white hover:border-emerald-300",

  MOD_TITLE: "text-lg font-bold mb-3 transition-colors dark:text-white dark:group-hover:text-emerald-300 text-slate-900 group-hover:text-emerald-600",
  
  MOD_DESC: "text-sm leading-relaxed dark:text-slate-400 text-slate-600",
};



export const STUDENT_CLASSROOM_STYLES = {
  // --- BASE WRAPPER & LAYOUT ---
  WRAPPER: "relative min-h-screen w-full overflow-x-hidden " +
           "bg-[url('/smoke.jpg')] bg-cover bg-center bg-no-repeat bg-fixed " +
           "before:absolute before:inset-0 before:z-0 " +
           "before:bg-gradient-to-br dark:before:from-slate-950/95 dark:before:via-slate-900/90 dark:before:to-slate-950/95 " +
           "before:from-slate-50/95 before:via-white/90 before:to-slate-100/95",

  CONTAINER: "relative z-10 max-w-7xl px-8 py-20 mx-auto animate-fade-in",

  // --- PAGE HEADER ---
  HEADER_SECTION: "text-left mb-12",
  TITLE_TEXT: "text-5xl font-extrabold dark:text-white text-slate-900 mb-4 tracking-tight",
  SUBTITLE_TEXT: "text-gray-400 dark:text-gray-500 -mt-2 font-light text-lg",

  // --- TABS & NAVIGATION ---
  TAB_BAR: "flex gap-8 border-b dark:border-white/10 border-slate-200 mb-12",
  TAB_BTN_BASE: "pb-4 text-xs font-black uppercase tracking-widest transition-all border-b-2",
  TAB_ACTIVE: "border-emerald-500 text-emerald-500 drop-shadow-[0_0_8px_rgba(16,185,129,0.3)]",
  TAB_INACTIVE: "border-transparent text-gray-400 hover:text-gray-300 dark:hover:text-white",

  // --- SEARCH UI ---
  SEARCH_WRAPPER: "relative mb-12 max-w-2xl",
  SEARCH_BOX: "w-full p-5 rounded-3xl outline-none border transition-all duration-300 " +
              "dark:bg-slate-900/50 bg-white dark:border-white/10 border-slate-200 shadow-2xl " +
              "focus:ring-4 focus:ring-emerald-500/20 dark:text-white text-slate-900 placeholder:text-gray-500",
  SEARCH_ICON: "absolute right-6 top-1/2 -translate-y-1/2 text-xl opacity-30",

  // --- CLASSROOM GRIDS ---
  GRID_LAYOUT: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
  EMPTY_STATE: "col-span-full py-20 text-center opacity-60 italic dark:text-white text-slate-600 text-lg",

  // --- CLASSROOM CARDS ---
  CARD: "p-8 rounded-[2.5rem] border backdrop-blur-xl transition-all duration-300 group " +
        "dark:bg-white/[0.03] dark:border-white/[0.08] dark:hover:bg-emerald-500/[0.05] dark:hover:border-emerald-500/30 " +
        "bg-white/60 border-slate-200 hover:border-emerald-300 hover:shadow-2xl text-left",
  CARD_TOP_ROW: "flex justify-between items-start mb-6",
  CARD_TAG: "px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-500 text-[10px] font-black uppercase tracking-widest border border-emerald-500/20",
  CARD_CODE_TXT: "text-[10px] text-gray-500 dark:text-gray-400 font-mono font-bold",
  CARD_TITLE: "text-2xl font-extrabold dark:text-white text-slate-900 mt-6 mb-8 tracking-tight",
  
  // --- BUTTONS ---
  BTN_JOIN: "w-full py-4 rounded-2xl font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:scale-[1.02] transition-all shadow-lg shadow-emerald-500/20",
  BTN_MANAGE: "w-full py-4 rounded-2xl font-bold text-white bg-sky-600 hover:bg-sky-500 transition-all shadow-lg shadow-sky-500/20",
  
  // --- MODAL / POPUP ---
  MODAL_OVERLAY: "fixed inset-0 z-[110] flex items-center justify-center p-6 bg-slate-950/90 backdrop-blur-2xl animate-fade-in",
  MODAL_BODY: "relative w-full max-w-4xl max-h-[85vh] overflow-hidden rounded-[3rem] border shadow-[0_0_100px_rgba(0,0,0,0.5)] flex flex-col " +
               "dark:bg-slate-900 bg-white dark:border-white/10 border-slate-200",
  MODAL_HEADER: "p-8 border-b flex justify-between items-center dark:bg-white/[0.02] bg-slate-50 dark:border-white/5 border-slate-100",
  MODAL_TITLE_WRAP: "text-2xl font-extrabold dark:text-white text-slate-900 tracking-tight",
  MODAL_TITLE_ACCENT: "text-emerald-500 opacity-50 ml-2",
  MODAL_CLOSE_BTN: "text-2xl text-gray-400 hover:text-red-500 transition-colors",
  MODAL_CONTENT: "p-8 overflow-y-auto flex-grow custom-scrollbar",
  
  // --- MATERIAL ITEMS ---
  MATERIAL_CARD: "p-6 mb-4 rounded-2xl border transition-all duration-300 " +
                  "dark:bg-white/[0.02] dark:border-white/5 bg-slate-50 border-slate-100 hover:shadow-md",
  MATERIAL_TOPIC: "text-emerald-500 font-extrabold text-lg mb-2 tracking-tight",
  MATERIAL_DESC: "text-sm dark:text-gray-300 text-slate-700 leading-relaxed font-normal mb-4",
  ATTACHMENT_BTN: "inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-emerald-500 bg-emerald-500/10 px-4 py-2 rounded-lg border border-emerald-500/20 hover:bg-emerald-500/20 transition-all"
};


// Styles for the Student Feed (Concepts/Materials) Page

export const STUDENT_FEED_STYLES = {
  // --- LAYOUT ---
  WRAPPER: "relative min-h-screen w-full overflow-x-hidden bg-[url('/smoke.jpg')] bg-cover bg-fixed before:absolute before:inset-0 before:z-0 dark:before:bg-slate-950/95 before:bg-slate-50/95",
  CONTAINER: "relative z-10 max-w-5xl px-8 py-20 mx-auto animate-fade-in",
  
  // --- HEADER ---
  HEADER_AREA: "text-left mb-16",
  TITLE: "text-5xl font-extrabold dark:text-white text-slate-900 mb-4 tracking-tight drop-shadow-2xl",
  SUBTITLE: "text-lg text-gray-400 font-light max-w-2xl leading-relaxed",

  // --- CONTENT GRID ---
  FEED_STACK: "space-y-8",
  
  // --- CONCEPT CARD ---
  CONCEPT_CARD: "p-10 rounded-[3rem] border backdrop-blur-2xl transition-all duration-500 " +
                "dark:bg-white/[0.03] dark:border-white/10 border-slate-200 bg-white/60 shadow-2xl hover:shadow-sky-500/5",
  
  TAG: "inline-block px-4 py-1.5 rounded-full bg-sky-500/10 text-sky-500 text-[10px] font-black uppercase tracking-widest border border-sky-500/20 mb-6",
  
  TOPIC_TITLE: "text-3xl font-bold dark:text-white text-slate-900 mb-4 tracking-tight",
  
  DATE_TEXT: "text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-6 block",
  
  CONCEPT_BODY: "text-lg dark:text-slate-300 text-slate-700 leading-relaxed font-light italic border-l-4 border-sky-500/30 pl-6 mb-8",
  
  // --- ATTACHMENT SECTION ---
  ATTACHMENT_BOX: "flex items-center justify-between p-6 rounded-2xl bg-slate-950/20 border border-white/5",
  FILE_INFO: "flex items-center gap-4",
  FILE_NAME: "text-sm font-bold dark:text-white text-slate-900",
  DOWNLOAD_LINK: "px-6 py-2.5 rounded-xl bg-sky-600 text-white text-xs font-black uppercase tracking-widest hover:bg-sky-500 transition-all shadow-lg shadow-sky-500/20"
};