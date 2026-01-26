import { Link, useLocation } from 'react-router-dom';
import { APP_STYLES } from '../styles/appStyles';
import { NAV_CONTENT } from '../constants/appContent';

export default function Navbar({ isDarkMode, toggleTheme, user, onLogout }) {
  const displayName = user?.username || "User";
  const userRole = user?.role || ""; 
  const initial = displayName.charAt(0).toUpperCase();
  const location = useLocation();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={APP_STYLES.NAVBAR.CONTAINER}>
      {/* LOGO SECTION */}
      <Link to="/" className={APP_STYLES.NAVBAR.LOGO_LINK}>
        <span className={APP_STYLES.NAVBAR.LOGO_BAR}></span>
        {NAV_CONTENT.LOGO_TEXT}
      </Link>

      {/* RIGHT SECTION */}
      <div className={APP_STYLES.NAVBAR.RIGHT_SECTION}>
        
        {/* ROLE-BASED DASHBOARD LINKS (Visible when logged in) */}
        {user && (
          <div className="flex items-center gap-6 mr-2">
            {user.role === 'TEACHER' ? (
              <Link 
                to="/teacher/classroom" 
                className="text-sm font-bold text-sky-500 hover:text-sky-400 transition-all flex items-center gap-2"
              >
                <span className="text-lg">🏫</span>
                {NAV_CONTENT.TEACHER_CLASSROOM}
              </Link>
            ) : (
              <Link 
                to="/student/explore" 
                className="text-sm font-bold text-emerald-500 hover:text-emerald-400 transition-all flex items-center gap-2"
              >
                <span className="text-lg">🔍</span>
                {NAV_CONTENT.STUDENT_JOIN}
              </Link>
            )}
          </div>
        )}

        {/* SCROLL LINKS (Visible only on Landing/Dashboard if on Root) */}
        {location.pathname === '/' && !user && (
          <div className="hidden md:flex gap-6 mr-2">
            {NAV_CONTENT.NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-sky-500 dark:hover:text-sky-400 transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>
        )}

        {/* THEME TOGGLE */}
        <button onClick={toggleTheme} className={APP_STYLES.NAVBAR.THEME_BTN}>
          {isDarkMode ? NAV_CONTENT.THEME_DARK : NAV_CONTENT.THEME_LIGHT}
        </button>

        {/* AUTHENTICATION AREA */}
        {user ? (
          <div className="flex items-center gap-4 border-l dark:border-white/10 border-gray-200 pl-4">
            {/* USER PROFILE PILL */}
            <div className={APP_STYLES.NAVBAR.USER_PILL}>
              <div className={APP_STYLES.NAVBAR.AVATAR}>
                {initial}
              </div>
              <div className="flex flex-col justify-center -space-y-0.5 ml-1">
                <span className="text-sm font-bold dark:text-white text-gray-800 leading-tight">
                  {displayName}
                </span>
                <span className="text-[9px] uppercase tracking-[0.1em] font-black text-sky-500 dark:text-sky-400 opacity-90">
                  {userRole}
                </span>
              </div>
            </div>

            {/* LOGOUT */}
            <button 
              onClick={onLogout} 
              className="px-3 py-1.5 text-xs font-bold text-gray-500 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400 transition-all"
            >
              {NAV_CONTENT.BTN_LOGOUT}
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-6">
            <Link to="/signup" className={APP_STYLES.NAVBAR.LINK_REGISTER}>
              {NAV_CONTENT.LINK_REGISTER}
              <span className={APP_STYLES.NAVBAR.LINK_REGISTER_UNDERLINE}></span>
            </Link>
            <Link to="/signin" className={APP_STYLES.NAVBAR.LINK_LOGIN}>
              {NAV_CONTENT.LINK_LOGIN}
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}