import { Button } from '../../components/ui';
import './Hero.css';

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <p className="hero-greeting">Hello, I'm</p>
          <h1 className="hero-name">Mahmoud Tarek</h1>
          <h2 className="hero-title">Data Analyst</h2>
          <p className="hero-description">
            I transform complex data into clear, actionable insights.
            Passionate about storytelling through data visualization and analytics.
          </p>
          <div className="hero-cta">
            <Button href="#projects">View My Work</Button>
            <Button variant="secondary" href="#contact">
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
