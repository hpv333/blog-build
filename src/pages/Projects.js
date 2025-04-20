import React from 'react';
import { useState } from 'react';

// Custom styling to match the orange theme
const styles = {
  gradientBg: "bg-gradient-to-br from-amber-50 to-orange-200",
  primaryColor: "text-orange-700", // --base-theme: #c26a23
  primaryBg: "bg-orange-600", // --base-theme-dark: #e76f51
  primaryLight: "bg-orange-50", // --base-theme-light: #fff4eb
  primaryText: "text-orange-900", // --base-theme-font-color-dark: #6a2c1a
  lightText: "text-amber-50", // --base-theme-font-color-light: #ffe8d6
  accent: "text-orange-500",
  hoverTransition: "transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
};

const projects = [
  {
    title: 'Unified Scheduler System',
    date: 'December 2024 — Present',
    image: '/api/placeholder/400/240',
    chips: [
      { label: 'MERN Stack', icon: 'globe' },
      { label: 'MongoDB Atlas', icon: 'database' },
      { label: 'React.js', icon: 'code' },
    ],
    points: [
      {
        title: 'Centralized Platform Development',
        description:
          'Designing and developing a MERN stack platform for equipment reservations and device checkouts, hoping to achieve 40% reduction in usage time'
      },
      {
        title: 'Advanced Access Control',
        description:
          'Implementing RBAC with MongoDB Atlas for roles like staff, manager, and various admins'
      },
      {
        title: 'System Integration',
        description:
          'Collaborated with stakeholders to ensure scalability, integrating API testing with Postman'
      }
    ]
  },
  {
    title: 'Digital Signage',
    date: 'September 2023 — November 2024',
    image: '/api/placeholder/400/240',
    chips: [
      { label: 'React.js', icon: 'globe' },
      { label: 'Node.js', icon: 'database' },
      { label: 'Raspberry Pi', icon: 'code' },
    ],
    points: [
      {
        title: 'Frontend Optimization',
        description:
          'Reduced manual playlist management time by 70% through an efficient MERN dashboard at UNT Art Building'
      },
      {
        title: 'Backend Development',
        description:
          'Implemented Node.js backend with robust API and file system support'
      },
      {
        title: 'Hardware Integration',
        description:
          'Deployed Raspberry Pi hardware for screen management across UNT Art Building'
      }
    ]
  }
];

// Icons components
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
  )
};

const Projects = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  
  return (
    <section className={`py-16 ${styles.gradientBg} scroll-section`}>
      <div className="max-w-6xl mx-auto px-4">
        <h2 className={`text-4xl font-bold mb-3 text-center ${styles.primaryText}`}>
          Featured Projects
        </h2>
        <p className={`text-center ${styles.accent} mb-12 max-w-2xl mx-auto`}>
          Innovative solutions designed with passion and precision
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((proj, idx) => (
            <div 
              key={idx} 
              className="relative"
              onMouseEnter={() => setHoveredCard(idx)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div 
                className={`bg-white rounded-xl shadow-lg overflow-hidden ${styles.hoverTransition}`}
              >
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden">
                  <div className={`absolute inset-0 ${hoveredCard === idx ? 'opacity-60' : 'opacity-80'} transition-opacity duration-300`}>
                    <img 
                      src={proj.image} 
                      alt={proj.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                  
                  <div className="absolute bottom-0 left-0 p-4">
                    <h3 className={`text-2xl font-bold text-white mb-1`}>
                      {proj.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {proj.chips.map((chip, i) => (
                        <span 
                          key={i}
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${styles.lightText} bg-orange-600/70 backdrop-blur-sm`}
                        >
                          <span className="mr-1">
                            {Icons[chip.icon]()}
                          </span>
                          {chip.label}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className={`absolute top-3 right-3 ${styles.primaryBg} ${styles.lightText} px-3 py-1 rounded-full text-xs font-medium shadow-md`}>
                    {proj.date}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <div className="flex justify-end mb-4">
                    <div className="flex space-x-2">
                      <button className={`p-2 ${styles.primaryLight} ${styles.primaryColor} rounded-full hover:bg-orange-100 transition-colors`}>
                        {Icons.github()}
                      </button>
                      <button className={`p-2 ${styles.primaryLight} ${styles.primaryColor} rounded-full hover:bg-orange-100 transition-colors`}>
                        {Icons.link()}
                      </button>
                    </div>
                  </div>

                  <ul className="space-y-4">
                    {proj.points.map((pt, i) => (
                      <li key={i} className="flex group">
                        <span className={`mt-1 mr-3 text-green-500 flex-shrink-0 ${hoveredCard === idx ? 'scale-110' : ''} transition-transform duration-300`}>
                          {Icons.check()}
                        </span>
                        <div>
                          <h4 className={`font-bold ${styles.primaryColor} group-hover:text-orange-800 transition-colors`}>
                            {pt.title}
                          </h4>
                          <p className="text-gray-700 text-sm">
                            {pt.description}
                          </p>
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

export default Projects;