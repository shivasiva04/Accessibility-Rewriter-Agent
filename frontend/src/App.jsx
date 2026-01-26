import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

// --- SHARED COMPONENTS ---
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// --- FEATURE PAGES ---
import Signup from './features/auth/Signup';
import Signin from './features/auth/Signin';
import TeacherDashboard from './features/teacher/TeacherDashboard';
import StudentDashboard from './features/student/StudentDashboard';

// --- CLASSROOM & CONTENT COMPONENTS ---
import ClassroomManager from './features/teacher/ClassroomManager';
import ExploreClasses from './features/student/ExploreClasses';
import StudentContentFeed from './features/student/StudentContentFeed';
import AICourtroom from './features/student/AICourtroom'; // ADDED: New AI Courtroom Component

import { APP_STYLES } from './styles/appStyles';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('user');
    return saved ? JSON.parse(saved) : null;
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const handleLogin = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <div className={APP_STYLES.MAIN_WRAPPER}>
      <Router>
        <Toaster position="top-center" />
        
        <Navbar 
          isDarkMode={isDarkMode} 
          toggleTheme={toggleTheme} 
          user={user} 
          onLogout={handleLogout} 
        />

        <div className="flex-grow">
          <Routes>
            
            {/* --- 1. ROOT PATH REDIRECTOR --- */}
            <Route 
              path="/" 
              element={
                user 
                  ? (user.role === 'TEACHER' 
                      ? <Navigate to="/teacher-dashboard" replace /> 
                      : <Navigate to="/student-dashboard" replace />)
                  : <Navigate to="/signin" replace />
              } 
            />
            
            {/* --- 2. AUTH ROUTES --- */}
            <Route 
              path="/signup" 
              element={user ? <Navigate to="/" /> : <Signup onLogin={handleLogin} />} 
            />
            <Route 
              path="/signin" 
              element={user ? <Navigate to="/" /> : <Signin onLogin={handleLogin} />} 
            />

            {/* --- 3. TEACHER ROUTES --- */}
            <Route 
              path="/teacher-dashboard" 
              element={user?.role === 'TEACHER' ? <TeacherDashboard /> : <Navigate to="/signin" />} 
            />
            <Route 
              path="/teacher/classroom" 
              element={user?.role === 'TEACHER' ? <ClassroomManager user={user} /> : <Navigate to="/signin" />} 
            />

            {/* --- 4. STUDENT ROUTES --- */}
            <Route 
              path="/student-dashboard" 
              element={user?.role === 'STUDENT' ? <StudentDashboard /> : <Navigate to="/signin" />} 
            />
            <Route 
              path="/student/explore" 
              element={user?.role === 'STUDENT' ? <ExploreClasses user={user} /> : <Navigate to="/signin" />} 
            />
            <Route 
              path="/student/content-feed/:classroomId" 
              element={user?.role === 'STUDENT' ? <StudentContentFeed /> : <Navigate to="/signin" />} 
            />
            
            {/* ADDED: AI Courtroom Gamified Page */}
            <Route 
              path="/student/ai-courtroom" 
              element={user?.role === 'STUDENT' ? <AICourtroom user={user} /> : <Navigate to="/signin" />} 
            />

            {/* Catch-all */}
            <Route path="*" element={<Navigate to="/" replace />} />

          </Routes>
        </div>
        
        <Footer />
      </Router>
    </div>
  );
}

export default App;