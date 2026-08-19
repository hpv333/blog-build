import React, { useState, useEffect, useRef } from 'react';
import useScreenSize from '../hooks/useScreenSize';

const skillsData = [
  {
    title: 'Prototyping & Velocity',
    icon: '⚡',
    skills: ['Vibe Coding', 'Claude Code', 'Cursor', 'Lovable', '8-Hour MVP Builds', 'Loom Video Pitching'],
  },
  {
    title: 'Frontend Engineering',
    icon: '🌐',
    skills: ['React.js', 'JavaScript (ES6+)', 'HTML5 / CSS3', 'PWA', 'Chrome Extensions', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    title: 'AI Tools & APIs',
    icon: '🤖',
    skills: ['Claude API', 'Claude Code', 'Google Gemini API', 'Gemini Notebooks', 'Lovable', 'Emergent', 'Ollama (Local LLMs)', 'ChatGPT', 'REST APIs', 'Prompt Engineering'],
  },
  {
    title: 'Frameworks & Libraries',
    icon: '🧩',
    skills: ['React.js', 'Node.js', 'Django', 'Bootstrap', 'Tailwind CSS', 'REST APIs'],
  },
  {
    title: 'Databases & Cloud',
    icon: '🗄️',
    skills: ['MongoDB', 'PostgreSQL', 'Supabase', 'Vercel', 'Cloudflare'],
  },
  {
    title: 'Tools & Collaboration',
    icon: '🛠️',
    skills: ['Git / GitHub', 'Figma', 'Canva', 'OOP', 'Agile', 'Client Onboarding'],
  },
  {
    title: 'Languages',
    icon: '💻',
    skills: ['JavaScript', 'Python', 'SQL', 'NoSQL'],
  },
];

const CheckIcon = ({ size = 18 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
);

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { screenSize, isMobile } = useScreenSize();
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentRef = sectionRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.disconnect();
      }
    };
  }, []);

  const getHeadingSize = () => {
    if (screenSize === 'mobile') return '1.75rem';
    if (screenSize === 'small-tablet') return '2.25rem';
    if (screenSize === 'tablet') return '2.5rem';
    return '3rem';
  };

  // Card width basis per breakpoint — flexbox handles centering the last row
  const getCardStyle = () => {
    const gapPx = (() => {
      if (screenSize === 'mobile') return 16;
      if (screenSize === 'small-tablet') return 20;
      return 32;
    })();

    const cols = (() => {
      if (screenSize === 'mobile') return 1;
      if (screenSize === 'small-tablet') return 1;
      if (screenSize === 'tablet') return 2;
      if (screenSize === 'desktop') return 2;
      return 3; // large-desktop, ultrawide
    })();

    // calc width accounting for gaps: (100% - (cols-1)*gap) / cols
    const width = cols === 1
      ? '100%'
      : `calc((100% - ${(cols - 1) * gapPx}px) / ${cols})`;

    return { width, maxWidth: cols === 1 ? '100%' : undefined };
  };

  const getGapClass = () => {
    if (screenSize === 'mobile') return 'gap-4';
    if (screenSize === 'small-tablet') return 'gap-5';
    return 'gap-8';
  };

  return (
    <section
      ref={sectionRef}
      className="w-full py-4 sm:py-6 md:py-8 lg:py-10 text-left bg-gradient-to-br from-section-gradient-from to-section-gradient-to"
    >
      <div className="max-w-full sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10">
        {/* Section Heading */}
        <div className={`transform transition-all duration-700 mb-4 sm:mb-6 md:mb-8 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h2
            className="font-bold text-font-color-dark font-['Georgia',_serif] relative inline-block"
            style={{ fontSize: getHeadingSize(), transition: 'font-size 0.3s ease' }}
          >
            Technical Skills
            <span
              className={`block h-1 bg-base-theme mt-3 transition-all duration-1000 ease-out ${isVisible ? 'w-16 sm:w-20 md:w-24' : 'w-0'}`}
            ></span>
          </h2>

          <p
            className="text-accent-color max-w-lg md:max-w-xl lg:max-w-2xl mt-3 sm:mt-4 italic"
            style={{
              fontSize: screenSize === 'mobile' ? '1rem' : '1.125rem',
              transition: 'font-size 0.3s ease'
            }}
          >
            Frontend-first. AI-powered. Built to ship fast.
          </p>
        </div>

        {/* Skills — flexbox so last row centers naturally */}
        <div
          className={`flex flex-wrap justify-center ${getGapClass()}`}
          style={{ transition: 'gap 0.3s ease' }}
        >
          {skillsData.map((category, index) => (
            <div
              key={index}
              className={`bg-bg-surface rounded-xl shadow-lg overflow-hidden border-l-4 border-base-theme transform transition-all duration-700 ease-out hover:shadow-xl hover:-translate-y-1 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
              style={{ ...getCardStyle(), transitionDelay: `${index * 150}ms` }}
            >
              <div className="p-3 sm:p-5 md:p-6 lg:p-7 bg-card-header-bg border-b border-card-header-border">
                <div className="flex items-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl mr-2 sm:mr-3 flex-shrink-0">{category.icon}</div>
                  <h3 className="text-base sm:text-xl md:text-2xl font-bold text-primary-color font-['Georgia',_serif]">
                    {category.title}
                  </h3>
                </div>
              </div>

              <ul className="p-3 sm:p-5 md:p-6 lg:p-7 space-y-1.5 sm:space-y-3">
                {category.skills.map((skill, idx) => (
                  <li
                    key={idx}
                    className="flex items-center"
                  >
                    <span className="text-success-color mr-2.5 flex-shrink-0">
                      <CheckIcon size={isMobile ? 16 : 18} />
                    </span>
                    <span className="text-text-secondary text-sm sm:text-base">{skill}</span>
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

export default Skills;
