import { Button } from '../../components/ui';
import './Projects.css';

import project1Img from '../../assets/WhatsApp Image 2026-02-14 at 7.08.28 PM.jpeg';
import project2Img from '../../assets/WhatsApp Image 2026-02-14 at 7.08.39 PM.jpeg';
import project3Img from '../../assets/WhatsApp Image 2026-02-14 at 7.09.45 PM.jpeg';
import project4Img from '../../assets/WhatsApp Image 2026-02-14 at 7.10.00 PM.jpeg';

const projects = [
  {
    id: 1,
    title: 'HR Dashboard',
    description:
      'An interactive HR analytics dashboard providing insights into employee demographics, headcount trends, department distribution, and workforce metrics to support strategic HR decisions.',
    technologies: ['Power BI', 'Excel', 'Data Analysis', 'DAX'],
    image: project1Img,
  },
  {
    id: 2,
    title: 'Sales Dashboard',
    description:
      'A comprehensive sales performance dashboard tracking revenue trends, regional sales distribution, product performance, and key KPIs to drive data-informed business strategies.',
    technologies: ['Power BI', 'SQL', 'Data Visualization', 'Excel'],
    image: project2Img,
  },
  {
    id: 3,
    title: 'Business Analytics Dashboard',
    description:
      'A dynamic business intelligence dashboard consolidating key metrics, trend analysis, and performance indicators to enable quick decision-making and operational insights.',
    technologies: ['Power BI', 'Data Modeling', 'ETL', 'DAX'],
    image: project3Img,
  },
  {
    id: 4,
    title: 'Employee Workforce Dashboard',
    description:
      'An employee workforce analytics dashboard visualizing staffing levels, performance metrics, attendance patterns, and workforce planning data for HR optimization.',
    technologies: ['Power BI', 'Excel', 'HR Analytics', 'Data Cleaning'],
    image: project4Img,
  },
];

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} className="project-img" />
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <ul className="project-tech">
                  {project.technologies.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
