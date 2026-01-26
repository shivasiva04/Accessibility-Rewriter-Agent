import { useNavigate } from 'react-router-dom'; // 1. Import Navigate
import { STUDENT_LANDING } from '../../constants/roles/student/landing';
import { STUDENT_STYLES } from '../../styles/dashboard/studentStyles';

export default function StudentDashboard() {
  const navigate = useNavigate(); // 2. Initialize
  
  const { 
    HERO, MISSION, COMPARISON, ICONS, FEATURES, BADGE, ARCHITECTURE, MODULES, TITLE_PREFIX, TITLE_SUFFIX 
  } = STUDENT_LANDING;

  return (
    <div className={STUDENT_STYLES.WRAPPER}>
      
      {/* --- 1. HERO SECTION --- */}
      <div className={STUDENT_STYLES.CONTAINER}>
        <div className={STUDENT_STYLES.BADGE}>{BADGE}</div>
        
        <h1 className={STUDENT_STYLES.TITLE_MAIN}>
          {TITLE_PREFIX}
          <span className={STUDENT_STYLES.TITLE_GRADIENT}>{TITLE_SUFFIX}</span>
        </h1>
        
        <p className={STUDENT_STYLES.SUBTITLE}>
          {HERO.SUBTITLE_PREFIX}{" "}
          <span className={STUDENT_STYLES.SUBTITLE_BOLD}>{HERO.SUBTITLE_HIGHLIGHT}</span>{" "}
          {HERO.SUBTITLE_SUFFIX}
        </p>
        
        <div className={STUDENT_STYLES.FEATURE_GRID}>
          {FEATURES.map((feature, i) => (
            <div 
              key={i} 
              className={STUDENT_STYLES.FEATURE_CARD + " cursor-pointer hover:scale-105 transition-transform"} // Added cursor and hover
              onClick={() => navigate(feature.path)} // 3. Handle Click
            >
              <div className={STUDENT_STYLES.FEATURE_ICON}>{feature.icon}</div>
              <h3 className={STUDENT_STYLES.FEATURE_TITLE}>{feature.title}</h3>
              <p className={STUDENT_STYLES.FEATURE_DESC}>{feature.desc}</p>
            </div>
          ))}
        </div>
        
        <div className={STUDENT_STYLES.BTN_GROUP}>
          <button 
            className={STUDENT_STYLES.BTN_PRIMARY}
            onClick={() => navigate('/student/explore')} // Redirect to Explore
          >
            {HERO.BTN_PRIMARY}
          </button>
          <button 
            className={STUDENT_STYLES.BTN_SECONDARY}
            onClick={() => navigate('/student/explore')}
          >
            {HERO.BTN_SECONDARY}
          </button>
        </div>
      </div>

      {/* --- 2. MISSION SECTION --- */}
      <div id="mission" className={STUDENT_STYLES.SECTION_WRAPPER}>
        <div className={STUDENT_STYLES.MISSION_CONTAINER}>
          <div className={STUDENT_STYLES.MISSION_MAIN_CARD}>
            <div className={STUDENT_STYLES.MISSION_GLOW}></div>
            <div className={STUDENT_STYLES.MISSION_LABEL}>
              <span className={ICONS.PULSE_DOT_CLASS}></span>
              {MISSION.TITLE}
            </div>
            <p className={STUDENT_STYLES.MISSION_TEXT}>
              {MISSION.TEXT.map((segment, i) => (
                <span key={i} className={segment.highlight ? STUDENT_STYLES.MISSION_HIGHLIGHT : ""}>
                  {segment.text}
                </span>
              ))}
            </p>
          </div>

          <div className={STUDENT_STYLES.MISSION_RIGHT_STACK}>
            {MISSION.POINTS.map((point, i) => (
              <div key={i} className={STUDENT_STYLES.MISSION_POINT_CARD}>
                <div className={STUDENT_STYLES.CHECK_ICON_BOX}>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={ICONS.CHECK_PATH} />
                  </svg>
                </div>
                <p className={STUDENT_STYLES.MISSION_POINT_TEXT}>{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- 3. SOLUTION SECTION --- */}
      <div id="solution" className={STUDENT_STYLES.SECTION_WRAPPER}>
        <h2 className={STUDENT_STYLES.SECTION_TITLE}>{COMPARISON.TITLE}</h2>
        <div className={STUDENT_STYLES.COMP_CONTAINER}>
          <div className={STUDENT_STYLES.COMP_GRID}>
            <div className={STUDENT_STYLES.COMP_VS_BADGE}>{ICONS.VS_TEXT}</div>
            <div className={STUDENT_STYLES.COMP_SIDE_BAD}>
              <h3 className={STUDENT_STYLES.COMP_TITLE_BAD}>
                <span>😕</span> {COMPARISON.PROBLEM.TITLE}
              </h3>
              <div className={STUDENT_STYLES.COMP_LIST_BAD}>
                {COMPARISON.PROBLEM.ITEMS.map((item, i) => (
                  <div key={i} className={STUDENT_STYLES.COMP_ITEM_BAD}>
                    <span className={STUDENT_STYLES.ICON_BAD}>✕</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className={STUDENT_STYLES.COMP_SIDE_GOOD}>
              <h3 className={STUDENT_STYLES.COMP_TITLE_GOOD}>
                <span>💡</span> {COMPARISON.SOLUTION.TITLE}
              </h3>
              <div className={STUDENT_STYLES.COMP_LIST_GOOD}>
                {COMPARISON.SOLUTION.ITEMS.map((item, i) => (
                  <div key={i} className={STUDENT_STYLES.COMP_ITEM_GOOD}>
                    <span className={STUDENT_STYLES.ICON_GOOD}>✓</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- 4. ARCHITECTURE SECTION --- */}
      <div id="architecture" className={STUDENT_STYLES.SECTION_WRAPPER}>
        <h2 className={STUDENT_STYLES.SECTION_TITLE}>{ARCHITECTURE.title}</h2>
        <div className={STUDENT_STYLES.ARCH_GRID}>
          {ARCHITECTURE.steps.map((step, i) => (
            <div key={step.id} className="flex items-center">
              <div className={STUDENT_STYLES.ARCH_CARD}>
                <div className={STUDENT_STYLES.ARCH_NUM}>{step.id}</div>
                <div className={STUDENT_STYLES.ARCH_TITLE}>{step.title}</div>
                <div className={STUDENT_STYLES.ARCH_DESC}>{step.desc}</div>
              </div>
              {i < ARCHITECTURE.steps.length - 1 && (
                <div className={STUDENT_STYLES.ARCH_ARROW}>{ICONS.ARROW_RIGHT}</div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* --- 5. MODULES SECTION --- */}
      <div id="modules" className={STUDENT_STYLES.SECTION_WRAPPER}>
        <h2 className={STUDENT_STYLES.SECTION_TITLE}>{MODULES.title}</h2>
        <div className={STUDENT_STYLES.MOD_GRID}>
          {MODULES.list.map((mod, i) => (
            <div key={i} className={STUDENT_STYLES.MOD_CARD}>
              <h3 className={STUDENT_STYLES.MOD_TITLE}>{mod.title}</h3>
              <p className={STUDENT_STYLES.MOD_DESC}>{mod.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="h-24 w-full bg-transparent relative z-10"></div>
    </div>
  );
}