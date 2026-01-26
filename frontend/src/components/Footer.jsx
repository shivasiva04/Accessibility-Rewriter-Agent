import { Link, useLocation } from 'react-router-dom';
import { FOOTER_CONTENT } from '../constants/appContent';
import { APP_STYLES } from '../styles/appStyles';

export default function Footer() {
  const location = useLocation();

  // Define which paths should show the footer
  const dashboardPaths = ['/', '/teacher-dashboard', '/student-dashboard'];
  
  // Only show footer if current path is in the allowed list
  const shouldShowFooter = dashboardPaths.includes(location.pathname);

  if (!shouldShowFooter) return null;

  return (
    <footer className={APP_STYLES.FOOTER.CONTAINER}>
      {/* Main Grid */}
      <div className={APP_STYLES.FOOTER.INNER_GRID}>
        
        {/* 1. Brand Column */}
        <div className={APP_STYLES.FOOTER.BRAND_COL}>
          <h2 className={APP_STYLES.FOOTER.BRAND_TITLE}>{FOOTER_CONTENT.BRAND}</h2>
          <p className={APP_STYLES.FOOTER.TAGLINE}>{FOOTER_CONTENT.TAGLINE}</p>
        </div>

        {/* 2, 3, 4. Data Columns */}
        {FOOTER_CONTENT.COLUMNS.map((col, index) => (
          <div key={index} className="flex flex-col">
            <h3 className={APP_STYLES.FOOTER.COL_TITLE}>{col.title}</h3>
            
            <div className={APP_STYLES.FOOTER.LINK_LIST}>
              {col.isContact ? (
                col.info.map((info, i) => (
                  <div key={i} className={APP_STYLES.FOOTER.CONTACT_ITEM}>
                    <span className={APP_STYLES.FOOTER.CONTACT_ICON}>{info.icon}</span>
                    <span>{info.label}</span>
                  </div>
                ))
              ) : (
                col.links.map((link, i) => (
                  <Link 
                    key={i} 
                    to={link.path} 
                    className={APP_STYLES.FOOTER.LINK_ITEM}
                  >
                    {link.label}
                  </Link>
                ))
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Copyright Bar */}
      <div className={APP_STYLES.FOOTER.BOTTOM_BAR}>
        <p className={APP_STYLES.FOOTER.COPYRIGHT}>{FOOTER_CONTENT.COPYRIGHT}</p>
      </div>
    </footer>
  );
}