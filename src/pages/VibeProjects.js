import React from 'react';
import { useState, useEffect, useRef } from 'react';
import useScreenSize from '../hooks/useScreenSize';

const vibeProjects = [
  {
    title: 'AI Security Auditor',
    date: '2024 — Present',
    image: null,
    chips: [
      { label: 'React.js', icon: 'code' },
      { label: 'Gemini API', icon: 'brain' },
      { label: 'Supabase', icon: 'database' },
      { label: 'Vercel', icon: 'globe' },
    ],
    points: [
      {
        title: 'AI-Powered Security Analysis',
        description:
          'A web app that leverages Google Gemini\'s API to perform intelligent security audits and vulnerability assessments.'
      },
      {
        title: 'Zero-Cost Architecture',
        description:
          'Built entirely on free-tier tools — Gemini API, Supabase, GitHub, and Vercel — with quota guardrails and UI warnings built in.'
      },
      {
        title: 'Vibe Coded & Deployed',
        description:
          'Scaffolded in Lovable and refined with Cursor. GitHub org: github.com/codeflux-ai'
      }
    ],
    links: {
      website: 'https://ai-security-auditor.lovable.app/'
    }
  },
  {
    title: 'AquaRemind',
    date: '2024 — Present',
    image: null,
    chips: [
      { label: 'React.js', icon: 'code' },
      { label: 'PWA', icon: 'globe' },
      { label: 'Wellness', icon: 'globe' },
      { label: 'Vercel', icon: 'globe' },
    ],
    points: [
      {
        title: 'Hydration & Supplement Reminders',
        description:
          'A wellness app that sends smart reminders to help users stay on top of hydration and supplement schedules.'
      },
      {
        title: 'Live & Deployed',
        description:
          'Fully deployed and actively maintained at aqua-hydrate.vercel.app'
      },
      {
        title: 'Vibe Coded',
        description:
          'Built and shipped rapidly using AI-assisted vibe coding tools including Lovable, Cursor, and Claude.'
      }
    ],
    links: {
      website: 'https://aqua-hydrate.vercel.app/'
    }
  },
  {
    title: 'Learning with Mulan',
    date: '2024 — Ongoing',
    image: null,
    chips: [
      { label: 'JavaScript (ES6+)', icon: 'code' },
      { label: 'Chrome Extension', icon: 'globe' },
      { label: 'Ollama', icon: 'brain' },
      { label: 'Claude API', icon: 'brain' },
      { label: 'Ongoing', icon: 'check' },
    ],
    points: [
      {
        title: 'Draggable AI Companion',
        description:
          'A lightweight single-file web app and Chrome extension (~640 lines of HTML/JS) featuring an interactive, draggable character that simplifies complex text into plain English.'
      },
      {
        title: 'Dual AI Architecture',
        description:
          'Engineered seamless switching between a zero-cost local LLM via Ollama and cloud-based AI processing via the Claude API.'
      },
      {
        title: 'Cross-Device Interactions',
        description:
          'Native drag-and-drop mechanics supporting both desktop mouse events and mobile touch interactions with zero external dependencies.'
      }
    ],
    links: {}
  }
];

const Icons = {
  globe: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="2" y1="12" x2="22" y2="12"></line>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
    </svg>
  ),
  database: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
    </svg>
  ),
  code: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6"></polyline>
      <polyline points="8 6 2 12 8 18"></polyline>
    </svg>
  ),
  github: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </svg>
  ),
  link: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
    </svg>
  ),
  check: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
  ),
  brain: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44A2.5 2.5 0 0 1 2 17.5v-11a2.5 2.5 0 0 1 2.5-2.5h1.44a2.5 2.5 0 0 0 2.15-1.23L8.9 1.4a2.5 2.5 0 0 1 .6-.4z"></path>
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44A2.5 2.5 0 0 0 22 17.5v-11a2.5 2.5 0 0 0-2.5-2.5h-1.44a2.5 2.5 0 0 1-2.15-1.23L15.1 1.4a2.5 2.5 0 0 0-.6-.4z"></path>
    </svg>
  ),
};

const VibeProjects = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const { screenSize, isMobile } = useScreenSize();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const getGridColumns = () => {
    if (screenSize === 'mobile' || screenSize === 'small-tablet') return 1;
    if (screenSize === 'tablet' || screenSize === 'desktop') return 2;
    return 3;
  };

  const renderCardHeader = (proj) => {
    return (
      <div className="p-3 sm:p-5 lg:p-6 bg-base-theme-light">
        <h3 className="text-base sm:text-2xl md:text-2xl font-bold text-primary-color mb-1 sm:mb-2 text-left">
          {proj.title}
        </h3>

        <div className="flex flex-wrap gap-1 sm:gap-2 md:gap-2.5 mb-2 justify-start">
          {proj.chips.map((chip, i) => (
            <span
              key={i}
              className="inline-flex items-center px-1.5 sm:px-2 py-0.5 rounded-full text-xs font-medium text-chip-text bg-chip-bg"
            >
              {!isMobile && (
                <span className="mr-1">
                  {Icons[chip.icon]()}
                </span>
              )}
              {chip.label}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <div className="bg-base-theme text-font-color-light px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-medium shadow-md inline-block">
            {proj.date}
          </div>

          <div className="flex items-center gap-2">
            {proj.links && proj.links.website && (
              <a
                href={proj.links.website}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-base-theme text-font-color-light rounded-full hover:bg-base-theme-dark transition-colors inline-flex"
                aria-label="Live Website"
              >
                {Icons.link()}
              </a>
            )}
            {proj.links && proj.links.github ? (
              <a
                href={proj.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-base-theme text-font-color-light rounded-full hover:bg-base-theme-dark transition-colors inline-flex"
                aria-label="GitHub Repository"
              >
                {Icons.github()}
              </a>
            ) : (
              <div className="opacity-50 flex items-center gap-1.5">
                <span className="p-2 bg-base-theme-light text-primary-color rounded-full cursor-not-allowed">
                  {Icons.github()}
                </span>
                <span className="text-xs text-text-muted italic font-medium">Private</span>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section
      ref={sectionRef}
      className="py-4 sm:py-6 md:py-8 lg:py-10 text-left"
    >
      <div className="max-w-full sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10">
        <div className={`transform transition-all duration-700 mb-4 sm:mb-6 md:mb-8 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h2
            className="font-bold text-font-color-dark font-['Georgia',_serif] relative inline-block"
            style={{
              fontSize: screenSize === 'mobile' ? '1.75rem' : screenSize === 'small-tablet' ? '2.25rem' : '3rem',
              transition: 'font-size 0.3s ease'
            }}
          >
            Vibe Coded Projects
            <span className={`block h-1 bg-base-theme mt-3 transition-all duration-1000 ease-out ${isVisible ? 'w-16 sm:w-20 md:w-24' : 'w-0'}`}></span>
          </h2>
          <p
            className="text-accent-color max-w-lg md:max-w-xl lg:max-w-2xl mt-2 sm:mt-3 mb-0 italic"
            style={{
              fontSize: screenSize === 'mobile' ? '1rem' : '1.125rem',
              transition: 'font-size 0.3s ease'
            }}
          >
            "Shipped fast. Deployed live. Built with AI."
          </p>
        </div>

        <div
          className="grid gap-6 sm:gap-8 md:gap-10"
          style={{
            gridTemplateColumns: `repeat(${getGridColumns()}, minmax(0, 1fr))`,
            transition: 'all 0.3s ease-in-out'
          }}
        >
          {vibeProjects.map((proj, idx) => (
            <div
              key={idx}
              className={`transform transition-all duration-700 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
              style={{ transitionDelay: `${idx * 150}ms` }}
              onMouseEnter={() => setHoveredCard(idx)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div
                className="rounded-xl shadow-lg overflow-hidden bg-bg-surface transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                {renderCardHeader(proj)}

                <div className="p-3 sm:p-5 md:p-6">
                  <ul className="space-y-1.5 sm:space-y-4">
                    {proj.points.map((pt, i) => (
                      <li key={i} className="flex group text-left">
                        <span className={`mt-1 mr-2 sm:mr-3 text-success-color flex-shrink-0 ${hoveredCard === idx ? 'scale-110' : ''} transition-transform duration-300`}>
                          {Icons.check()}
                        </span>
                        <div>
                          <h4 className="font-bold text-primary-color group-hover:text-base-theme-dark transition-colors text-sm sm:text-lg">
                            {pt.title}
                          </h4>
                          {!isMobile && (
                            <p className="text-text-secondary text-xs sm:text-sm">
                              {pt.description}
                            </p>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VibeProjects;
