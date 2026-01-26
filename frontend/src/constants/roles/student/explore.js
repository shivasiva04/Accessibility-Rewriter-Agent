export const STUDENT_EXPLORE_CONTENT = {
  TITLE: "Academic Explorer",
  SUBTITLE: "Search for new subjects or manage your active classrooms.",
  SEARCH_PLACEHOLDER: "Enter Class Name, Subject, or 6-digit Class Code...",
  
  TABS: {
    EXPLORE: "Find New Classes",
    JOINED: "My Classrooms"
  },

  CARDS: {
    JOIN_BTN: "Join Classroom",
    MANAGE_BTN: "View Materials",
    ALREADY_JOINED: "Already Enrolled",
    CODE_LABEL: "CODE:"
  },

  MODAL: {
    MATERIALS_TITLE: "Classroom Materials",
    STUDENTS_TITLE: "Batch Mates",
    CLOSE: "✕",
    EMPTY_MATERIALS: "Your teacher hasn't shared any materials yet.",
    ATTACHMENT_LABEL: "Download Attachment"
  },

  MESSAGES: {
    SUCCESS_JOIN: "Welcome to the class! You are now enrolled.",
    ERR_LOAD: "Unable to sync with the academic server.",
    ERR_JOIN: "Enrollment failed. Please check the code.",
    EMPTY_MSG: "No matching classrooms found. Try searching for a specific code!",
    JOINING: "Securing your seat..."
  },

  API: {
    BASE: "http://localhost:8080/api/classrooms",
    MATERIALS: "http://localhost:8080/api/materials/class" 
  }
};