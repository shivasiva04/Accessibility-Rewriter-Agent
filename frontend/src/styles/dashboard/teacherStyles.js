export const TEACHER_STYLES = {
  // --- BASE WRAPPER ---
  WRAPPER: "relative min-h-screen w-full overflow-x-hidden " +
           "bg-[url('/smoke.jpg')] bg-cover bg-center bg-no-repeat bg-fixed " +
           "before:absolute before:inset-0 before:z-0 " +
           "before:bg-gradient-to-br dark:before:from-slate-950/95 dark:before:via-slate-900/90 dark:before:to-slate-950/95 " +
           "before:from-slate-50/95 before:via-white/90 before:to-slate-100/95",

  CONTAINER: "relative z-10 text-center max-w-5xl px-6 py-20 mx-auto animate-fade-in-up",

  // --- HERO ---
  BADGE: "inline-block mb-6 px-4 py-1.5 rounded-full backdrop-blur-md shadow-lg border uppercase tracking-widest text-xs font-bold " +
         "dark:bg-sky-500/10 dark:border-sky-400/20 dark:text-sky-300 dark:shadow-[0_0_20px_rgba(14,165,233,0.15)] " +
         "bg-white/80 border-sky-200 text-sky-600 shadow-sm",

  TITLE_MAIN: "text-5xl md:text-7xl font-extrabold mb-6 tracking-tight drop-shadow-2xl dark:text-white text-slate-900",

  TITLE_GRADIENT: "text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500",

  SUBTITLE: "text-lg md:text-2xl mb-8 font-light max-w-3xl mx-auto leading-relaxed dark:text-slate-300 text-slate-600",
  SUBTITLE_BOLD: "font-semibold dark:text-white text-slate-900",

  // --- FEATURES ---
  FEATURE_GRID: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 text-left w-full",
  FEATURE_CARD: "p-6 rounded-2xl border backdrop-blur-lg transition-all duration-300 group " +
                "dark:bg-white/[0.03] dark:border-white/[0.08] dark:hover:bg-sky-500/[0.05] dark:hover:border-sky-500/30 " +
                "bg-white/60 border-slate-200 hover:border-sky-300 hover:shadow-lg hover:bg-white",
  FEATURE_ICON: "text-3xl mb-4 transform group-hover:scale-110 transition-transform duration-300 grayscale group-hover:grayscale-0",
  FEATURE_TITLE: "text-xl font-bold mb-2 transition-colors dark:text-white dark:group-hover:text-sky-300 text-slate-900 group-hover:text-sky-600",
  FEATURE_DESC: "text-sm transition-colors dark:text-slate-400 dark:group-hover:text-slate-200 text-slate-500 group-hover:text-slate-700",

  // --- BUTTONS ---
  BTN_GROUP: "flex flex-col sm:flex-row gap-5 justify-center items-center",
  BTN_PRIMARY: "w-full sm:w-auto px-8 py-4 rounded-xl text-white font-bold text-lg shadow-xl shadow-sky-500/20 hover:scale-[1.02] transition-all duration-300 " +
               "bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500",
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
  MISSION_GLOW: "absolute -top-20 -left-20 w-80 h-80 rounded-full blur-[100px] opacity-60 dark:bg-sky-600/30 bg-sky-200/50",
  MISSION_LABEL: "relative z-10 font-bold tracking-[0.2em] text-sm mb-6 uppercase flex items-center gap-2 dark:text-sky-400 text-sky-600",
  MISSION_TEXT: "relative z-10 text-3xl md:text-4xl font-light leading-tight dark:text-slate-100 text-slate-900",
  MISSION_HIGHLIGHT: "font-semibold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400",
  
  MISSION_RIGHT_STACK: "lg:col-span-5 flex flex-col gap-4 justify-center",
  MISSION_POINT_CARD: "p-6 rounded-2xl border transition-all duration-300 group flex items-center gap-5 cursor-default shadow-sm hover:shadow-md " +
                      "dark:border-white/[0.05] dark:bg-slate-900/60 dark:hover:bg-slate-800/80 dark:hover:border-sky-500/20 " +
                      "border-slate-200 bg-white hover:border-sky-300",
  CHECK_ICON_BOX: "w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 border transition-transform group-hover:scale-110 " +
                  "dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20 bg-emerald-50 text-emerald-600 border-emerald-100",
  MISSION_POINT_TEXT: "text-sm md:text-base font-medium leading-relaxed transition-colors dark:text-slate-400 dark:group-hover:text-slate-200 text-slate-600 group-hover:text-slate-900",

  // --- COMPARISON ---
  COMP_CONTAINER: "max-w-7xl w-full px-6",
  COMP_GRID: "grid md:grid-cols-2 gap-0 border rounded-[2.5rem] overflow-hidden shadow-2xl backdrop-blur-3xl relative " +
             "dark:border-white/[0.08] dark:bg-slate-950/90 border-slate-200 bg-white",
  COMP_VS_BADGE: "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-16 h-16 rounded-full border-4 flex items-center justify-center text-base font-black shadow-[0_0_30px_rgba(0,0,0,0.3)] hidden md:flex " +
                 "dark:bg-slate-950 dark:border-slate-800 dark:text-slate-400 bg-white border-slate-100 text-slate-400",
  
  COMP_SIDE_BAD: "p-10 md:p-16 relative overflow-hidden group border-b md:border-b-0 md:border-r transition-all duration-500 " +
                 "dark:border-white/[0.05] dark:bg-gradient-to-b dark:from-red-500/[0.08] dark:to-transparent dark:hover:from-red-500/[0.12] border-slate-100 bg-red-50/40 hover:bg-red-50/70",
  COMP_TITLE_BAD: "text-2xl md:text-3xl font-bold mb-10 flex items-center gap-4 tracking-tight dark:text-red-400 text-red-600",
  COMP_LIST_BAD: "space-y-8",
  COMP_ITEM_BAD: "flex items-start gap-5 text-base leading-relaxed transition-colors duration-300 dark:text-slate-300 dark:group-hover:text-white text-slate-600 group-hover:text-slate-900",
  ICON_BAD: "text-xl mt-0.5 flex-shrink-0 dark:text-red-400 text-red-500 drop-shadow-md",

  COMP_SIDE_GOOD: "p-10 md:p-16 relative overflow-hidden group transition-all duration-500 " +
                  "dark:bg-gradient-to-b dark:from-emerald-500/[0.08] dark:to-transparent dark:hover:from-emerald-500/[0.12] bg-emerald-50/40 hover:bg-emerald-50/70",
  COMP_TITLE_GOOD: "text-2xl md:text-3xl font-bold mb-10 flex items-center gap-4 tracking-tight dark:text-emerald-400 text-emerald-600",
  COMP_LIST_GOOD: "space-y-8",
  COMP_ITEM_GOOD: "flex items-start gap-5 text-base leading-relaxed transition-colors duration-300 dark:text-slate-200 dark:group-hover:text-white text-slate-700 group-hover:text-slate-900",
  ICON_GOOD: "text-xl mt-0.5 flex-shrink-0 dark:text-emerald-400 text-emerald-600 drop-shadow-md",

  // --- ARCHITECTURE & MODULES ---
  ARCH_GRID: "flex flex-wrap justify-center gap-8 max-w-6xl w-full px-4",
  ARCH_CARD: "w-44 p-6 rounded-2xl border transition-all flex flex-col items-center text-center shadow-sm hover:shadow-lg " +
             "dark:border-white/10 dark:bg-white/[0.02] dark:hover:border-sky-400/40 dark:hover:bg-sky-900/20 border-slate-200 bg-white hover:border-sky-300 hover:-translate-y-1",
  ARCH_NUM: "w-10 h-10 rounded-full font-bold flex items-center justify-center mb-4 text-xs border " +
            "dark:bg-sky-500/10 dark:text-sky-400 dark:border-sky-500/20 bg-sky-50 text-sky-600 border-sky-100",
  ARCH_TITLE: "font-bold text-sm mb-2 dark:text-white text-slate-900",
  ARCH_DESC: "text-xs dark:text-slate-400 text-slate-500 leading-relaxed",
  ARCH_ARROW: "hidden md:block text-2xl self-center dark:text-slate-600 text-slate-300",

  MOD_GRID: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full px-4",
  MOD_CARD: "p-8 rounded-2xl border transition-all group shadow-sm hover:shadow-xl " +
            "dark:border-white/10 dark:bg-white/[0.02] dark:hover:bg-sky-500/[0.05] dark:hover:border-sky-400/30 border-slate-200 bg-white hover:border-sky-300",
  MOD_TITLE: "text-lg font-bold mb-3 transition-colors dark:text-white dark:group-hover:text-sky-300 text-slate-900 group-hover:text-sky-600",
  MOD_DESC: "text-sm leading-relaxed dark:text-slate-400 text-slate-600",
};


// Teacher Management Modal Styles

export const TEACHER_CLASSROOM_STYLES = {
  // --- BASE WRAPPER (Exact Dashboard Match) ---
  WRAPPER: "relative min-h-screen w-full overflow-x-hidden " +
           "bg-[url('/smoke.jpg')] bg-cover bg-center bg-no-repeat bg-fixed " +
           "before:absolute before:inset-0 before:z-0 " +
           "before:bg-gradient-to-br dark:before:from-slate-950/95 dark:before:via-slate-900/90 dark:before:to-slate-950/95 " +
           "before:from-slate-50/95 before:via-white/90 before:to-slate-100/95",

  CONTAINER: "relative z-10 max-w-7xl px-8 py-20 mx-auto animate-fade-in-up",

  // --- HEADINGS & TEXT ---
  PAGE_TITLE: "text-5xl md:text-6xl font-extrabold mb-4 tracking-tight drop-shadow-2xl dark:text-white text-slate-900",
  PAGE_SUBTITLE: "text-lg md:text-xl text-gray-400 font-light leading-relaxed",

  // --- GRID & CARDS ---
  MAIN_GRID: "grid grid-cols-1 lg:grid-cols-12 gap-10 items-start",
  FORM_SECTION: "lg:col-span-5 p-10 rounded-[2.5rem] border backdrop-blur-2xl shadow-2xl transition-all duration-300 " +
                 "dark:bg-white/[0.03] dark:border-white/[0.1] border-slate-200 bg-white/60",
  LIST_SECTION: "lg:col-span-7 space-y-6",

  INPUT_FIELD: "w-full p-4 mb-4 rounded-2xl outline-none transition-all duration-300 font-medium " +
               "dark:bg-slate-950/50 dark:border-white/10 dark:text-white border border-slate-200 focus:ring-2 focus:ring-sky-500 placeholder:text-gray-600",
  
  SUBMIT_BTN: "w-full py-4 rounded-2xl text-white font-bold text-lg shadow-xl shadow-sky-500/20 hover:scale-[1.02] transition-all duration-300 " +
               "bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500",

  // --- CLASS LIST ITEMS ---
  LIST_HEADER: "text-2xl font-bold dark:text-white text-slate-900 mb-6 flex items-center gap-3 tracking-tight",
  CLASS_CARD: "p-8 rounded-[2.5rem] border backdrop-blur-lg transition-all duration-300 group " +
               "dark:bg-white/[0.03] dark:border-white/[0.08] dark:hover:bg-sky-500/[0.05] dark:hover:border-sky-500/30 " +
               "bg-white/60 border-slate-200 hover:border-sky-300 hover:shadow-lg",
  CARD_TAG: "text-[10px] font-bold uppercase text-sky-500 bg-sky-500/10 px-3 py-1 rounded-lg border border-sky-400/20",
  CARD_CODE: "font-mono text-xs text-gray-500 opacity-60 font-medium",
  CARD_TITLE: "text-2xl font-extrabold dark:text-white text-slate-900 mt-4 mb-6 tracking-tight",
  MANAGE_BTN: "w-full py-3.5 rounded-xl text-sm font-bold bg-sky-600 text-white hover:bg-sky-500 shadow-lg shadow-sky-500/20 transition-all",

  // --- POPUP / MODAL (Dashboard Themed) ---
  MODAL_OVERLAY: "fixed inset-0 z-[100] flex items-start justify-center p-6 bg-slate-950/80 backdrop-blur-xl animate-fade-in overflow-y-auto",
  
  MODAL_BODY: "relative w-full max-w-5xl my-24 rounded-[3rem] border shadow-[0_0_100px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden transition-colors duration-300 " +
               "dark:bg-slate-900 dark:border-white/10 bg-white border-slate-200",
  
  MODAL_HEADER: "p-10 border-b flex justify-between items-center transition-colors duration-300 " +
                 "dark:bg-white/[0.02] dark:border-white/5 bg-slate-50 border-slate-100",
  
  HEADER_TITLE: "text-3xl font-extrabold tracking-tight dark:text-white text-slate-900",
  HEADER_SUB: "text-sky-500 text-[11px] font-black uppercase tracking-[0.2em] mt-2",
  
  MODAL_CLOSE: "p-3 rounded-full transition-all dark:hover:bg-white/10 hover:bg-slate-200 text-gray-500",

  TAB_CONTAINER: "flex px-10 border-b gap-10 dark:bg-white/[0.01] dark:border-white/5 bg-slate-50 border-slate-100",
  TAB_LINK: "py-6 text-[11px] font-bold uppercase tracking-[0.2em] transition-all border-b-2",
  TAB_ACTIVE: "border-sky-500 text-sky-500 drop-shadow-[0_0_8px_rgba(14,165,233,0.3)]",
  TAB_INACTIVE: "border-transparent text-gray-500 hover:text-gray-300 dark:hover:text-white",

  CONTENT_SCROLL: "p-10 overflow-y-auto flex-grow transition-colors duration-300 dark:bg-slate-900/50 bg-white custom-scrollbar",

  // --- MATERIAL SHARING UI ---
  SHARE_BOX: "p-8 rounded-[2.5rem] border mb-10 shadow-inner dark:bg-white/[0.03] dark:border-white/10 bg-slate-50 border-slate-200",
  SHARE_INPUT: "w-full p-4 mb-4 rounded-xl border outline-none font-medium focus:ring-2 focus:ring-sky-500 transition-all dark:bg-slate-950 dark:border-white/5 dark:text-white bg-white border-slate-200",
  SHARE_AREA: "w-full p-4 mb-6 rounded-xl border outline-none font-medium focus:ring-2 focus:ring-sky-500 resize-none h-40 dark:bg-slate-950 dark:border-white/5 dark:text-white bg-white border-slate-200",
  
  POST_BTN: "px-10 py-3.5 rounded-xl bg-sky-600 text-white text-xs font-black uppercase tracking-widest hover:bg-sky-500 transition-all shadow-lg shadow-sky-600/20 active:scale-95 ml-auto",

  ITEM_CARD: "p-6 mb-4 rounded-[2rem] border transition-all duration-300 dark:bg-white/[0.02] dark:border-white/5 bg-white border-slate-100 hover:shadow-xl",
  ITEM_TOPIC: "text-sky-500 font-extrabold text-xl mb-1 tracking-tight",
  ITEM_CONTENT: "text-base dark:text-slate-300 text-slate-600 leading-relaxed font-light italic",
  ATTACHMENT: "mt-4 inline-flex items-center gap-2 text-[10px] font-black text-emerald-500 bg-emerald-500/5 px-4 py-1.5 rounded-full border border-emerald-500/20"
};


// export const MEANING_LOCK_STYLES = {
//   // Container & Wrapper logic
//   WRAPPER_BASE: "max-w-3xl mx-auto",
//   FORM_SPACING: "space-y-6",
  
//   // Text & Labels
//   LABEL_TEXT: "block text-xs font-black uppercase text-sky-500 mb-2 tracking-widest",
  
//   // Form Elements
//   INPUT_AREA: "h-40 resize-none",
  
//   // File Upload Zone
//   UPLOAD_ZONE: "p-8 border-2 border-dashed border-white/10 rounded-[2rem] bg-white/5 text-center transition-all hover:bg-white/[0.08] hover:border-sky-500/30",
//   FILE_INPUT_CLASS: "text-xs text-gray-400 file:mr-4 file:py-2.5 file:px-6 file:rounded-xl file:border-0 file:text-[10px] file:font-black file:uppercase file:tracking-widest file:bg-sky-500/10 file:text-sky-400 hover:file:bg-sky-500/20 cursor-pointer"
// };