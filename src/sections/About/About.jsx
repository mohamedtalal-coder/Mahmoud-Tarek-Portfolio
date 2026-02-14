import './About.css';
import profileImage from '../../assets/WhatsApp Image 2026-02-14 at 1.34.21 AM.jpeg';

function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I've always enjoyed solving problems and understanding how small details 
              connect to a bigger picture. Over time, that curiosity turned into a 
              strong interest in working with data.
            </p>
            <p>
              I enjoy transforming complex or messy data into clear insights that are 
              easy to understand and act on. Whether I'm cleaning raw data, analyzing 
              trends, or building dashboards, my goal is always the same: make data 
              useful, accurate, and meaningful.
            </p>
            <p>
              For me, data analysis isn't just about numbers—it's about telling a clear 
              story that helps people make better decisions. My expertise spans data 
              cleaning, analysis, visualization, and storytelling, helping bridge the 
              gap between raw data and strategic business objectives.
            </p>
            <p>Here are a few areas I specialize in:</p>
            <ul className="about-skills">
              <li>Data Cleaning</li>
              <li>Data Analysis</li>
              <li>Data Visualization</li>
              <li>Dashboard Building</li>
              <li>Data Storytelling</li>
              <li>Business Insights</li>
            </ul>
          </div>
          <div className="about-image">
            <div className="about-image-wrapper">
              <img src={profileImage} alt="Mahmoud Tarek" className="about-photo" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
