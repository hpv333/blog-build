import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <div className="skills-section">
      <h2 className="skills-heading">
        Technical Skills
        <span className="heading-underline"></span>
      </h2>
      <div className="skills-grid">
        {skillsData.map((category, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-header">
              <div className="skill-icon">{category.icon}</div>
              <h3 className="skill-title">{category.title}</h3>
            </div>
            <ul className="skill-list">
              {category.skills.map((skill, idx) => (
                <li className="skill-chip" key={idx}>
                  ✅ {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

const skillsData = [
  {
    title: 'Languages',
    icon: '💻',
    skills: ['JavaScript', 'SQL', 'NoSQL', 'Python', 'Java'],
  },
  {
    title: 'Technologies',
    icon: '🌐',
    skills: ['React.js', 'Django', 'Node.js', 'MongoDB', 'REST APIs', 'Bootstrap', 'Azure'],
  },
  {
    title: 'Tools & Strengths',
    icon: '🛠️',
    skills: ['Git', 'VS Code', 'Docker', 'Kafka', 'OOP', 'Agile', 'Documentation'],
  }
];

export default Skills;
