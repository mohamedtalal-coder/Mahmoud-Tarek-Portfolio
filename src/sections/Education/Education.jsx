import './Education.css';

function Education() {
  return (
    <section id="education" className="education">
      <div className="education-container">
        <h2 className="section-title">Education</h2>
        <div className="education-content">
          <div className="education-item">
            <div className="education-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
              </svg>
            </div>
            <div className="education-details">
              <h3 className="education-title">Data Analytics Trainee</h3>
              <p className="education-institution">R4</p>
            </div>
          </div>
          
          <div className="education-item">
            <div className="education-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
              </svg>
            </div>
            <div className="education-details">
              <h3 className="education-title">Bachelor's Degree in Computer and Systems Engineering</h3>
              <p className="education-institution">Zagazig University</p>
              <p className="education-date">Sep 2023 – 2028</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
