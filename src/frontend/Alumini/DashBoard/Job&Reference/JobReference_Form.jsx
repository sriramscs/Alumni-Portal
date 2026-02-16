import Sidebar from '../../Components/Sidebar/Sidebar';
import styles from './JobReference_Form.module.css';

const JobReference_Form = ({ onLogout }) => {

  return (
    <div className={styles.pageContainer}>

      {/* Sidebar Navigation (Collapsed State) */}
      <Sidebar onLogout={onLogout} currentView="job_reference_form" />

      {/* Main Content Area */}
      <main className={styles.mainContent}>
            {/* Navigation Back */}
            <div className={styles.backButton} onClick={() => window.history.back()}>
              <span className="material-symbols-outlined">arrow_back</span>
              <span>Back</span>
            </div>
        {/* Page Header Area */}
        <header className={styles.header}>
          <h1 className={styles.pageTitle}>Job & Reference</h1>
        </header>


        {/* Centered Form Wrapper */}
        <div className={styles.formWrapper}>
          <div className={styles.formCard}>
            
            {/* Card Header */}
            <div className={styles.cardHeader}>
              <div>
                <h2 className={styles.formTitle}>Submit Job Reference</h2>
                <p className={styles.formSubtitle}>
                  Provide details about the career opportunity you'd like to share with the alumni community.
                </p>
              </div>
              <button className={styles.refreshBtn} aria-label="Reset Form">
                <span className="material-symbols-outlined">refresh</span>
              </button>
            </div>

            {/* Form Fields Container */}
            <form className={styles.formContent}>
              <div className={styles.inputGrid}>
                
                {/* Field: Company Name */}
                <div className={styles.inputGroup}>
                  <label className={styles.inputLabel}>Company Name</label>
                  <input 
                    type="text" 
                    className={styles.inputField} 
                    placeholder="e.g. Microsoft" 
                  />
                </div>

                {/* Field: Role / Position */}
                <div className={styles.inputGroup}>
                  <label className={styles.inputLabel}>Role / Position</label>
                  <input 
                    type="text" 
                    className={styles.inputField} 
                    placeholder="e.g. Senior Software Engineer" 
                  />
                </div>

                {/* Field: Target Branch */}
                <div className={styles.inputGroup}>
                  <label className={styles.inputLabel}>Target Branch / Department</label>
                  <input 
                    type="text" 
                    className={styles.inputField} 
                    placeholder="e.g. IT / CSE / EEE" 
                  />
                </div>

                {/* Field: Number of Vacancies */}
                <div className={styles.inputGroup}>
                  <label className={styles.inputLabel}>Number of Vacancies</label>
                  <input 
                    type="text" 
                    className={styles.inputField} 
                    placeholder="e.g. 5" 
                  />
                </div>

              </div>

              {/* Submit Button */}
              <button type="button" className={styles.submitBtn}>
                <span className="material-symbols-outlined">send</span>
                Submit Job Reference
              </button>
            </form>

          </div>
        </div>
      </main>
    </div>
  );
};

export default JobReference_Form;