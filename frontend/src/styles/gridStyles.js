export const GRID_STYLES = {
  // 1. BACKGROUND WRAPPER
  WRAPPER: "h-screen w-full flex items-center justify-center px-4 pt-16 pb-4 " +
           "bg-[url('/smoke.jpg')] bg-cover bg-center bg-no-repeat bg-fixed overflow-hidden",

  // 2. FORM CARD
  CARD_FORM: "relative w-[450px] p-8 rounded-3xl shadow-2xl " +
             "bg-white/10 backdrop-blur-xl border border-white/20 " +
             "flex flex-col justify-center z-20 transition-all duration-300",

  // 3. GRID CARD
  CARD_GRID_ABSOLUTE: "absolute top-0 left-[105%] w-[400px] h-full p-8 rounded-3xl shadow-2xl " +
                      "bg-black/60 backdrop-blur-xl border border-white/10 " + 
                      "flex flex-col items-center justify-center z-10 " +
                      "animate-fade-in-left origin-left",

  // Typography
  HEADING: "text-4xl font-extrabold mb-8 text-white tracking-tight drop-shadow-lg text-center font-sans",
  GRID_TITLE: "text-lg font-semibold mb-6 text-white tracking-wide drop-shadow-md",

  // Inputs
  INPUT: "w-full mb-4 p-4 rounded-xl outline-none transition-all duration-300 text-sm font-medium " +
         "bg-white/20 border border-white/40 text-gray-900 placeholder-gray-400 backdrop-blur-md " +
         "focus:bg-white/40 focus:border-white focus:ring-2 focus:ring-blue-400/30 " +
         "hover:bg-white/30 hover:border-white/60 shadow-sm",

  SELECT: "w-full mb-4 p-4 rounded-xl outline-none cursor-pointer appearance-none text-sm font-medium " +
          "bg-white/20 border border-white/40 text-gray-900 backdrop-blur-md " +
          "focus:bg-white/40 focus:border-white",

  // Trigger Button
  INPUT_TRIGGER: "w-full mb-4 p-4 rounded-xl cursor-pointer flex items-center justify-between transition-all font-medium text-sm " +
                 "bg-white/20 border border-white/40 text-gray-700 backdrop-blur-md " +
                 "hover:bg-white/40 hover:border-white hover:text-gray-900 hover:shadow-md",

  // Buttons
  BUTTON_PRIMARY: "w-full py-3.5 rounded-xl font-bold text-base text-white shadow-lg transition-all duration-300 transform active:scale-[0.98] " +
                  "bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 " +
                  "shadow-blue-500/30 border border-white/20",

  // Grid Cells
  GRID_CONTAINER: "flex flex-col gap-3 items-center justify-center p-1",
  GRID_ROW: "flex gap-3 justify-center",
  GRID_CONTAINER_SM: "flex flex-col gap-1.5 items-center justify-center p-1",
  GRID_ROW_SM: "flex gap-1.5 justify-center",

  GRID_CELL: "w-10 h-10 rounded-md cursor-pointer transition-all duration-300 border border-white/10 shadow-lg animate-pop-in " +
             "bg-white/10 hover:bg-sky-500/30 hover:border-sky-400 hover:scale-110",

  GRID_CELL_SM: "w-7 h-7 rounded-sm cursor-pointer transition-all duration-300 border border-white/10 shadow-md animate-pop-in " +
                "bg-white/10 hover:bg-sky-500/30 hover:border-sky-400 hover:scale-110",

  GRID_CELL_SELECTED: "scale-110 border-white bg-gradient-to-br from-sky-400 to-blue-600 shadow-[0_0_15px_rgba(56,189,248,0.6)]",

  // --- NEW: ROLE SELECTION STYLES ---
  ROLE_GRID: "grid grid-cols-2 gap-4 w-full mb-4",
  
  ROLE_CARD: "p-6 rounded-2xl cursor-pointer transition-all duration-300 border border-white/20 flex flex-col items-center justify-center gap-3 " +
             "bg-white/10 hover:bg-white/20 hover:scale-105 active:scale-95 hover:border-sky-400",
             
  ROLE_ICON: "text-4xl drop-shadow-md",
  ROLE_LABEL: "text-white font-bold text-lg tracking-wide",
};