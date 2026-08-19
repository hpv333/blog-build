import React from 'react';
import { useState, useEffect } from 'react';
import { useRef } from 'react';
import useScreenSize from '../hooks/useScreenSize';

const projects = [
  {
    title: 'Unified Scheduler System',
    date: 'December 2024 — Present',
    image: null,
    chips: [
      { label: 'React.js', icon: 'code' },
      { label: 'Full Stack', icon: 'globe' },
      { label: 'RBAC', icon: 'user' },
    ],
    points: [
      {
        title: 'Centralized Frontend Platform',
        description:
          'Designed and built a React.js asset reservation UI for equipment checkouts, targeting 40% reduction in booking time'
      },
      {
        title: 'Role-Based Access Control',
        description:
          'Multi-role permission UI for staff, managers, and admins to handle high-volume equipment bookings seamlessly'
      },
      {
        title: 'Stakeholder Integration',
        description:
          'Collaborated with stakeholders to ensure scalability and seamless user experience across roles'
      }
    ]
  },
  {
    title: 'Digital Signage',
    date: 'September 2023 — November 2024',
    image: null,
    chips: [
      { label: 'React.js', icon: 'code' },
      { label: 'JavaScript', icon: 'code' },
      { label: 'Raspberry Pi', icon: 'globe' },
    ],
    points: [
      {
        title: '70% Time Savings',
        description:
          'Reduced manual playlist management time by 70% through an efficient React.js dashboard at UNT Art Building'
      },
      {
        title: 'Content Management UI',
        description:
          'Built intuitive scheduling interface for digital displays across CVAD facilities with live content updates'
      },
      {
        title: 'Hardware Integration',
        description:
          'Deployed Raspberry Pi hardware for screen management across UNT Art Building'
      }
    ]
  },
  {
    title: 'Statuscheck - Device Monitoring Dashboard',
    date: 'May 2025 — Present',
    image: null,
    chips: [
      { label: 'JavaScript', icon: 'code' },
      { label: 'Docker', icon: 'globe' },
      { label: 'IoT Monitoring', icon: 'search' },
    ],
    points: [
      {
        title: 'Universal Monitoring App',
        description:
          'Developed a web-based dashboard for monitoring and managing IoT and network-connected devices using ping, SSH, and HTTP checks.'
      },
      {
        title: 'User-Friendly Admin Features',
        description:
          'Implemented device filtering, email alerts, and real-time status updates; supports frontend-backend separation and Docker deployment.'
      },
      {
        title: 'Configurable and Scalable',
        description:
          'Utilized JSON-based configuration for flexible deployment across varied networks and enabled role-based admin access via hashed credentials.'
      }
    ],
    links: {
      github: 'https://github.com/divisionbyinfinity/statuscheck'
    }
  },
  {
    title: 'Walmart Time Series Sales Prediction',
    date: 'October 2024 — Present',
    image: null,
    chips: [
      { label: 'PySpark', icon: 'code' },
      { label: 'Machine Learning', icon: 'brain' },
      { label: 'Big Data', icon: 'database' },
    ],
    points: [
      {
        title: 'Predictive Analytics Implementation',
        description:
          'Developing a time series forecasting model using PySpark and RandomForestRegressor to predict weekly sales across 45 Walmart stores'
      },
      {
        title: 'Big Data Processing',
        description:
          'Processing and analyzing large-scale retail datasets with features including store information, date, weekly sales, holiday flags, temperature, fuel prices, CPI, and unemployment'
      },
      {
        title: 'Data Quality Management',
        description:
          'Implemented comprehensive data quality checks to ensure integrity of the analysis, including null value detection and statistical validation'
      }
    ],
    links: {
      github:'https://github.com/hpv333/WalmartTimeSeries_Sales_Prediction'
    }

  },
  {
    title: 'Business Analytics Hackathon — 3rd Prize',
    date: 'March 2024',
    image: null,
    chips: [
      { label: 'Data Analytics', icon: 'brain' },
      { label: 'Python', icon: 'code' },
      { label: 'Machine Learning', icon: 'brain' },
    ],
    points: [
      {
        title: '3rd Place — Top 6 Finalist',
        description:
          'Competed against 20+ teams and advanced to the top 6 finalist round. Analyzed complex enterprise datasets provided by Peterbilt Motors Company and presented insights to industry executives.'
      },
      {
        title: 'Predictive Analytics',
        description:
          'Implemented Kruskal-Wallis H-Test for attribute significance analysis and Random Forest Regression for warranty cost prediction'
      },
      {
        title: 'Executive Presentation',
        description:
          'Presented data analytics findings to Peterbilt industry executives in the final round as part of a four-person team'
      }
    ],
    links: {
      github:'https://github.com/hpv333/ITDS_Hackthon_Data_Analysis'
    }
  },
  {
    title: 'VibeCon Bangalore — Solo Qualifier',
    date: 'June 2025',
    image: null,
    chips: [
      { label: 'AI Prototyping', icon: 'brain' },
      { label: 'Solo Build', icon: 'user' },
      { label: 'Vibe Coding', icon: 'code' },
    ],
    points: [
      {
        title: 'Round 2 Selection',
        description:
          'Selected to advance to Round 2 of VibeCon Bangalore as a solo participant, demonstrating advanced AI-assisted prototyping abilities.'
      },
      {
        title: 'Speed & Creativity',
        description:
          'Demonstrated rapid UI prototyping, creative problem-solving, and production-ready shipping under competition constraints.'
      },
      {
        title: 'Solo Vibe Coder',
        description:
          'Competed independently using AI-powered development tools to build and ship a functional MVP faster than teams.'
      }
    ]
  },
  {
    title: 'IBM BOB Hackathon',
    date: '2024',
    image: null,
    chips: [
      { label: 'Team Hackathon', icon: 'users' },
      { label: 'Product Demo', icon: 'code' },
      { label: 'Loom Video', icon: 'globe' },
    ],
    points: [
      {
        title: 'Full Product Pitch',
        description:
          'Competed in a high-intensity team hackathon; scripted, recorded, and produced comprehensive video feature walkthroughs and Loom demos to pitch the working software product.'
      },
      {
        title: 'Video Production Lead',
        description:
          'Led the product demo workflow — from writing feature scripts to recording polished Loom walkthroughs for judge presentation.'
      },
      {
        title: 'Cross-Team Collaboration',
        description:
          'Coordinated with team members to align on product narrative, feature showcase, and pitch delivery.'
      }
    ]
  },
  {
    title: 'Online Food Delivery Management System',
    date: 'June 2023 — September 2023',
    image: null,
    chips: [
      { label: 'JavaScript', icon: 'code' },
      { label: 'REST APIs', icon: 'globe' },
      { label: 'HTML/CSS', icon: 'globe' },
    ],
    points: [
      {
        title: 'Frontend Development',
        description:
          'Built a responsive web storefront for restaurant browsing, menu display, and order placement with intuitive UI flows'
      },
      {
        title: 'User Interface Design',
        description:
          'Designed user-friendly order tracking, cart management, and payment screens optimized for cross-device performance'
      },
      {
        title: 'API Integration',
        description:
          'Connected frontend to RESTful backend APIs for seamless order management and payment processing'
      }
    ],
    links: {
      github: 'https://github.com/hpv333/Online_food_delivery_management-system'
    }
  },
  {
    title: 'VoyageVibe Travel Recommendation',
    date: 'August 2023 — December 2023',
    image: null,
    chips: [
      { label: 'AI', icon: 'brain' },
      { label: 'Information Retrieval', icon: 'search' },
      { label: 'Group Project', icon: 'users' },
    ],
    points: [
      {
        title: 'AI-Assisted Travel System',
        description:
          'Developed an AI-powered travel recommendation system for CSCE 5200 Information Retrieval course with a team of four members'
      },
      {
        title: 'Data Collection & System Development',
        description:
          'Implemented a complete project lifecycle including data collection, system development, testing, and deployment'
      },
      {
        title: 'Collaborative Development',
        description:
          'Maintained active communication with weekly meetings to review progress and address challenges throughout the development process'
      }
    ]
  },
  {
    title: 'Attendance Tracker',
    date: 'January 2024 — April 2024',
    image: null,
    chips: [
      { label: 'Figma UI', icon: 'design' },
      { label: 'Prototype', icon: 'code' },
      { label: 'UX Design', icon: 'user' },
    ],
    points: [
      {
        title: 'UI/UX Design',
        description:
          'Developed comprehensive UI mockups and interactive prototypes in Figma for an attendance tracking system'
      },
      {
        title: 'Team Collaboration',
        description:
          'Worked collaboratively to define user flows, wireframes, and visual elements for improved user experience'
      },
      {
        title: 'Feature Implementation',
        description:
          'Designed responsive interfaces with intuitive navigation and visualization of attendance data'
      }
    ],

  },
  {
    title: 'Acerz E-commerce Platform',
    date: 'October 2023 — February 2024',
    image: null,
    chips: [
      { label: 'React.js', icon: 'code' },
      { label: 'REST APIs', icon: 'globe' },
      { label: 'E-commerce', icon: 'shop' },
    ],
    points: [
      {
        title: 'ReactJS Frontend Development',
        description:
          'Built a complete React.js e-commerce platform for land property listings with intuitive property browsing UX'
      },
      {
        title: 'Responsive UI Components',
        description:
          'Developed responsive UI components including user authentication, property listings, and dynamic search filters'
      },
      {
        title: 'API Integration',
        description:
          'Integrated RESTful APIs for property data management and payment processing functionalities'
      }
    ],

  },
  {
    title: 'Exercise Recommendation System',
    date: 'January 2023 — May 2023',
    image: null,
    chips: [
      { label: 'Machine Learning', icon: 'brain' },
      { label: 'Python', icon: 'code' },
      { label: 'Web App', icon: 'globe' },
    ],
    points: [
      {
        title: 'ML Algorithm Implementation',
        description:
          'Leveraged machine learning algorithms (KMeans, KNN, Random Forest) to predict user preferences with 85% accuracy'
      },
      {
        title: 'Recommendation Engine',
        description:
          'Designed a personalized exercise recommendation system based on user profiles and fitness goals'
      },
      {
        title: 'User Engagement',
        description:
          'Improved user experience with interactive dashboards and progress tracking visualizations'
      }
    ]
  }
];

// Extended Icons components
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
  design: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
      <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
      <path d="M2 2l7.586 7.586"></path>
      <circle cx="11" cy="11" r="2"></circle>
    </svg>
  ),
  user: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
      <circle cx="12" cy="7" r="4"></circle>
    </svg>
  ),
  users: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
      <circle cx="9" cy="7" r="4"></circle>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
  ),
  search: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
  ),
  shop: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
      <polyline points="9 22 9 12 15 12 15 22"></polyline>
    </svg>
  ),
  brain: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44A2.5 2.5 0 0 1 2 17.5v-11a2.5 2.5 0 0 1 2.5-2.5h1.44a2.5 2.5 0 0 0 2.15-1.23L8.9 1.4a2.5 2.5 0 0 1 .6-.4z"></path>
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44A2.5 2.5 0 0 0 22 17.5v-11a2.5 2.5 0 0 0-2.5-2.5h-1.44a2.5 2.5 0 0 1-2.15-1.23L15.1 1.4a2.5 2.5 0 0 0-.6-.4z"></path>
    </svg>
  ),
  figma: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path>
      <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path>
      <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path>
      <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path>
      <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path>
    </svg>
  )
};

const Projects = () => {
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

  // Get number of columns based on screen size
  const getGridColumns = () => {
    if (screenSize === 'mobile' || screenSize === 'small-tablet') return 1;
    if (screenSize === 'tablet' || screenSize === 'desktop') return 2;
    return 3; // large-desktop and ultrawide
  };

  // Function to render card header
  const renderCardHeader = (proj, idx) => {
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
    );
  };


  return (
    <section
      ref={sectionRef}
      className="py-4 sm:py-6 md:py-8 lg:py-10 text-left bg-gradient-to-br from-section-gradient-from to-section-gradient-to"
    >
      <div className="max-w-full sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10">
        {/* Section Header with animated transition */}
        <div className={`transform transition-all duration-700 mb-4 sm:mb-6 md:mb-8 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h2
            className="font-bold text-font-color-dark font-['Georgia',_serif] relative inline-block"
            style={{
              fontSize: screenSize === 'mobile' ? '1.75rem' : screenSize === 'small-tablet' ? '2.25rem' : '3rem',
              transition: 'font-size 0.3s ease'
            }}
          >
            Featured Projects
            <span className={`block h-1 bg-base-theme mt-3 transition-all duration-1000 ease-out ${isVisible ? 'w-16 sm:w-20 md:w-24' : 'w-0'}`}></span>
          </h2>

          <p
            className="text-accent-color max-w-lg md:max-w-xl lg:max-w-2xl mt-2 sm:mt-3 mb-0 italic"
            style={{
              fontSize: screenSize === 'mobile' ? '1rem' : '1.125rem',
              transition: 'font-size 0.3s ease'
            }}
          >
            Innovative solutions designed with passion and precision
          </p>
        </div>

        {/* Projects Grid */}
        <div
          className="grid gap-6 sm:gap-8 md:gap-10"
          style={{
            gridTemplateColumns: `repeat(${getGridColumns()}, minmax(0, 1fr))`,
            transition: 'all 0.3s ease-in-out'
          }}
        >
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className={`transform transition-all duration-700 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
              style={{ transitionDelay: `${idx * 150}ms` }}
              onMouseEnter={() => setHoveredCard(idx)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div
                className="bg-bg-surface rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                {/* Render header based on whether image is available */}
                {renderCardHeader(proj, idx)}

                {/* Content Section */}
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

export default Projects;
