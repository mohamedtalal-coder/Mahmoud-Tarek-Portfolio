import { useScrollAnimation } from '../../hooks';
import './About.css';

function About() {
  const [ref, isVisible] = useScrollAnimation(0.2);

  return (
    <section id="about" className="about" ref={ref}>
      <div className={`about-container ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className={`about-text ${isVisible ? 'animate-fade-in-left animate-delay-200' : 'opacity-0'}`}>
            <p>
              Hello! I'm Mahmoud Tarek, a passionate developer who loves building
              things for the web. My interest in web development started back in
              2015 when I decided to try editing custom themes — turns out that 
              taught me a lot about HTML & CSS!
            </p>
            <p>
              Fast-forward to today, I've had the privilege of working on various
              projects that have helped me grow as a developer. My main focus these
              days is building accessible, inclusive products and digital experiences.
            </p>
            <p>Here are a few technologies I've been working with recently:</p>
            <ul className="about-skills">
              <li>JavaScript (ES6+)</li>
              <li>React</li>
              <li>Node.js</li>
              <li>TypeScript</li>
              <li>Python</li>
              <li>SQL</li>
            </ul>
          </div>
          <div className={`about-image ${isVisible ? 'animate-fade-in-right animate-delay-300' : 'opacity-0'}`}>
            <div className="about-image-wrapper">
              {/* Add your photo here */}
              <div className="about-image-placeholder">Photo</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
