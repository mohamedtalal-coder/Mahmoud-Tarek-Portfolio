import { Button } from '../../components/ui';
import './Hero.css';

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <p className="hero-greeting animate-fade-in">Hello, I'm</p>
          <h1 className="hero-name animate-fade-in animate-delay-100">Mahmoud Tarek</h1>
          <h2 className="hero-title animate-fade-in animate-delay-200">Full Stack Developer</h2>
          <p className="hero-description animate-fade-in animate-delay-300">
            I build exceptional digital experiences that make an impact.
            Passionate about creating elegant solutions to complex problems.
          </p>
          <div className="hero-cta animate-fade-in animate-delay-400">
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
