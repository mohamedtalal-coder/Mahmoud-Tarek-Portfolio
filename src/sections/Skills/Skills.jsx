import { useScrollAnimation } from '../../hooks';
import './Skills.css';

const skillCategories = [
  {
    title: 'Data Visualization',
    skills: ['Power BI', 'DAX', 'Data Modeling', 'Dashboard Design', 'Report Building'],
  },
  {
    title: 'Data Analysis',
    skills: ['Excel', 'Data Cleaning', 'ETL', 'Statistical Analysis', 'Trend Analysis'],
  },
  {
    title: 'Database & Query',
    skills: ['SQL', 'Data Extraction', 'Data Transformation', 'Database Management'],
  },
  {
    title: 'Soft Skills',
    skills: ['Data Storytelling', 'Problem Solving', 'Business Insights', 'Critical Thinking'],
  },
];

function Skills() {
  const [ref, isVisible] = useScrollAnimation(0.2);

  return (
    <section id="skills" className="skills" ref={ref}>
      <div className={`skills-container ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title} 
              className={`skill-category ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <h3 className="skill-category-title">{category.title}</h3>
              <ul className="skill-list">
                {category.skills.map((skill) => (
                  <li key={skill} className="skill-item">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
