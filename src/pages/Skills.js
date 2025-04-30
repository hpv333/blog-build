import React, { useState, useEffect } from 'react';
import './Skills.css';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    setIsVisible(true);

    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Calculate grid columns based on screen size
  const getGridColumns = () => {
    if (screenWidth < 640) return 1; // Mobile: 1 column
    if (screenWidth < 1024) return 2; // Tablet: 2 columns
    if (screenWidth < 1536) return 3; // Desktop: 3 columns
    return 3; // Large desktop: 3 columns
  };

  return (
    <section className="w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Animated heading */}
        <div className={`transform transition-all duration-700 text-center mb-10 sm:mb-12 md:mb-16 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--base-theme-font-color-dark)] font-['Georgia',_serif] relative inline-block">
            Technical Skills
            <span className={`block h-1 bg-[var(--base-theme)] mt-2 transition-all duration-1000 ease-out mx-auto ${isVisible ? 'w-16 sm:w-20 md:w-24' : 'w-0'}`}></span>
          </h2>
        </div>

        {/* Skills Grid */}
        <div 
          className="grid gap-4 sm:gap-6 md:gap-8"
          style={{ 
            gridTemplateColumns: `repeat(${getGridColumns()}, minmax(0, 1fr))`,
            transition: 'all 0.3s ease-in-out' 
          }}
        >
          {skillsData.map((category, index) => (
            <div 
              key={index}
              className={`bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-700 ease-out hover:shadow-xl hover:-translate-y-1 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="p-5 sm:p-6 md:p-7 border-b border-gray-100">
                <div className="flex items-center">
                  <div className="text-3xl sm:text-4xl mr-3">{category.icon}</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[var(--base-theme-font-color-dark)]">
                    {category.title}
                  </h3>
                </div>
              </div>

              <ul className="p-5 sm:p-6 md:p-7 space-y-3">
                {category.skills.map((skill, idx) => (
                  <li 
                    key={idx}
                    className="flex items-start"
                  >
                    <span className="text-green-500 mr-2 flex-shrink-0 mt-0.5">✅</span>
                    <span className="text-gray-700">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
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