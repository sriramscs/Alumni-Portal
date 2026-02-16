import React from "react";
import styles from "./alsidebar.module.css";
import collegeLogo from "../../assets/ksrcollegelogo.svg";

export default function AlSidebar({ onLogout, onNavigate, currentView = 'dashboard' }) {
  const handleLogout = (e) => {
    e.preventDefault();
    if (onLogout) {
      onLogout();
    }
  };

  const handleNavClick = (e, view) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(view);
    }
  };

  return (
    <aside id="sidebar" className={styles.sidebar}>
      <div className={styles.sidebarHeader}>
        <img 
          src={collegeLogo} 
          alt="KSRCE Logo" 
          className={styles.sidebarLogo}
        />
        <span className={styles.sidebarTitle}>
          Alumni Portal
        </span>
      </div>

      <nav className={styles.sidebarNav}>
        <a 
          className={`${styles.navLink} ${currentView === 'dashboard' ? styles.navLinkActive : ''} ${styles.dashboardLink}`} 
          href="#"
          onClick={(e) => handleNavClick(e, 'dashboard')}
        >
          <span className="material-symbols-outlined">dashboard</span>
          <span className={styles.navLinkText}>
            Dashboard
          </span>
        </a>
        <a 
          className={`${styles.navLink} ${currentView === 'mail' ? styles.navLinkActive : ''}`} 
          href="#"
          onClick={(e) => handleNavClick(e, 'mail')}
        >
          <span className="material-symbols-outlined">mail</span>
          <span className={styles.navLinkText}>
            Mail
          </span>
        </a>
        <a className={styles.navLink} href="#">
          <span className="material-symbols-outlined">work</span>
          <span className={styles.navLinkText}>
            Job &amp; Reference
          </span>
        </a>
        <a className={styles.navLink} href="#">
          <span className="material-symbols-outlined">volunteer_activism</span>
          <span className={styles.navLinkText}>
            Donation
          </span>
        </a>
        <a className={styles.navLink} href="#">
          <span className="material-symbols-outlined">event</span>
          <span className={styles.navLinkText}>
            Events &amp; Reunion
          </span>
        </a>
        <a className={styles.navLink} href="#">
          <span className="material-symbols-outlined">feedback</span>
          <span className={styles.navLinkText}>
            Feedback
          </span>
        </a>
      </nav>

      <div className={styles.sidebarFooter}>
        <a className={styles.navLink} href="#">
          <span className="material-symbols-outlined">account_circle</span>
          <span className={styles.navLinkText}>
            Profile
          </span>
        </a>
        <a 
          className={`${styles.navLink} ${styles.logoutLink}`} 
          href="#" 
          onClick={handleLogout}
          style={{ marginTop: '0.5rem' }}
        >
          <span className="material-symbols-outlined">logout</span>
          <span className={styles.navLinkText}>
            Logout
          </span>
        </a>
      </div>
    </aside>
  );
}