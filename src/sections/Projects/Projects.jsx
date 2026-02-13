import { Button } from '../../components/ui';
import { useScrollAnimation } from '../../hooks';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'Project One',
    description:
      'A web application built with React and Node.js. Features include user authentication, real-time updates, and responsive design.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    id: 2,
    title: 'Project Two',
    description:
      'An e-commerce platform with modern UI/UX. Includes shopping cart, payment integration, and admin dashboard.',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    id: 3,
    title: 'Project Three',
    description:
      'A mobile-first application for task management. Features drag-and-drop, notifications, and team collaboration.',
    technologies: ['React Native', 'Firebase', 'Redux'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
];

function Projects() {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <section id="projects" className="projects" ref={ref}>
      <div className={`projects-container ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <article 
              key={project.id} 
              className={`project-card ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
              style={{ animationDelay: `${0.2 + index * 0.15}s` }}
            >
              <div className="project-image">
                <div className="project-image-placeholder">Preview</div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <ul className="project-tech">
                  {project.technologies.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
                <div className="project-links">
                  <Button variant="secondary" href={project.github}>
                    GitHub
                  </Button>
                  <Button href={project.live}>Live Demo</Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
