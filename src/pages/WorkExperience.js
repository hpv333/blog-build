import React, { useState, useEffect, useRef } from "react";
import useScreenSize from '../hooks/useScreenSize';

const timelineData = [
  {
    date: "Dec 2025 — Present",
    title: "Freelance Full Stack Developer",
    company: "Independent · India",
    description: "Building web applications and portfolio sites for clients using AI-assisted vibe coding methodology.",
    type: "current",
    chips: [
      { label: "React.js", icon: "code" },
      { label: "AI Tools", icon: "brain" },
      { label: "Vercel", icon: "globe" },
    ],
    points: [
      { title: "Client Projects", description: "Delivering responsive web apps and portfolio sites for freelance clients across industries" },
      { title: "Vibe Coding Methodology", description: "Leveraging AI-assisted development workflows for rapid prototyping and production-ready builds" },
    ],
  },
  {
    date: "Aug 2025 — Nov 2025",
    title: "Career Break · Upskilling & Design",
    company: "Self-directed Learning",
    description: "Intensive skill refresh — AI tools, Docker, Spring Boot, Cybersecurity, modern dev workflows, and freelance logo design.",
    type: "break",
    chips: [
      { label: "Docker", icon: "globe" },
      { label: "Spring Boot", icon: "code" },
      { label: "Cybersecurity", icon: "brain" },
      { label: "Logo Design", icon: "brain" },
    ],
    points: [
      { title: "Professional Certifications", description: "Earned Docker Foundations, Cybersecurity, Goldman Sachs Forage, and Meta Front-End certificates" },
      { title: "Modern Workflows", description: "Deep-dived into containerization, CI/CD pipelines, and AI-powered development tools" },
      { title: "Logo Design Portfolio", description: "Created brand identities and logo concepts for clients across logistics, construction, and education sectors using Canva" },
    ],
  },
  {
    date: "Sep 2023 — May 2025",
    title: "Graduate Assistant IT (Web Developer)",
    company: "CVAD, University of North Texas",
    description: "Designed and deployed scalable web platforms across CVAD facilities, boosting classroom and facility technology efficiency by 80%.",
    chips: [
      { label: "React.js", icon: "code" },
      { label: "Client Relations", icon: "globe" },
      { label: "Raspberry Pi", icon: "code" },
    ],
    points: [
      { title: "80% Efficiency Boost", description: "Designed and deployed a scalable digital signage management application across CVAD facilities, boosting classroom and facility technology efficiency by 80%." },
      { title: "Unified Scheduler UI", description: "Built a centralized React.js asset reservation UI featuring Role-Based Access Control (RBAC) to handle high-volume equipment bookings seamlessly." },
      { title: "Stakeholder Leadership", description: "Partnered with department leads and professors to manage feedback loops, document troubleshooting protocols, and deliver user-centered software solutions." },
    ],
  },
  {
    date: "Feb 2023 — Jun 2023",
    title: "Software Development & Design Intern",
    company: "StylePro Private Limited · Telangana, India",
    description: "Integrated YouTube and Google APIs into the e-commerce platform, boosting user engagement by 15% through interactive visual content.",
    chips: [
      { label: "React.js", icon: "code" },
      { label: "YouTube API", icon: "globe" },
      { label: "UI Design", icon: "code" },
    ],
    points: [
      { title: "15% Engagement Lift", description: "Integrated YouTube and Google APIs into the core e-commerce platform, boosting user engagement by 15% through interactive visual content." },
      { title: "Dual Role: Dev & Design", description: "Authored clean React.js UI components while designing digital marketing assets directly integrated into the store frontend." },
      { title: "User-Centric Design", description: "Collaborated with cross-functional teams to refine content strategy and responsive UI components for cross-device performance." },
    ],
  },
  {
    date: "Jan 2022 — Sep 2022",
    title: "Full Stack Development Intern",
    company: "Sindala Trading & Consulting Pvt. Ltd. · India",
    description: "Built responsive React.js frontends delivering 40% latency reduction; engineered reusable component libraries cutting future dev time by 30%.",
    chips: [
      { label: "React.js", icon: "code" },
      { label: "JavaScript", icon: "code" },
    ],
    points: [
      { title: "40% Latency Reduction", description: "Developed responsive React.js web interfaces, reducing latency by 40% for seamless cross-device rendering." },
      { title: "Modular Component Library", description: "Engineered reusable frontend component libraries that reduced future feature development time by 30%." },
    ],
  },
];

// Icons
const Icons = {
  globe: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="2" y1="12" x2="22" y2="12"></line>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
    </svg>
  ),
  code: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6"></polyline>
      <polyline points="8 6 2 12 8 18"></polyline>
    </svg>
  ),
  brain: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44A2.5 2.5 0 0 1 2 17.5v-11a2.5 2.5 0 0 1 2.5-2.5h1.44a2.5 2.5 0 0 0 2.15-1.23L8.9 1.4a2.5 2.5 0 0 1 .6-.4z"></path>
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44A2.5 2.5 0 0 0 22 17.5v-11a2.5 2.5 0 0 0-2.5-2.5h-1.44a2.5 2.5 0 0 1-2.15-1.23L15.1 1.4a2.5 2.5 0 0 0-.6-.4z"></path>
    </svg>
  ),
  check: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
  ),
};

// Icons for different role types
const RoleIcon = ({ type, size }) => {
  if (type === 'current') {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    );
  }
  if (type === 'break') {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    );
  }
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
};

const getBorderClass = (type) => {
  if (type === 'current') return 'border-border-current';
  if (type === 'break') return 'border-border-break';
  return 'border-base-theme';
};

const getDotBg = (type) => {
  if (type === 'current') return 'bg-success-bg';
  if (type === 'break') return 'bg-border-break';
  return 'bg-base-theme';
};

const getBadgeClasses = (type) => {
  if (type === 'current') return 'bg-badge-current-bg text-badge-current-text';
  if (type === 'break') return 'bg-badge-break-bg text-badge-break-text';
  return 'bg-badge-bg text-badge-text';
};

const WorkExperience = () => {
  const [visibleItems, setVisibleItems] = useState([]);
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
          timelineData.forEach((_, index) => {
            setTimeout(() => {
              setVisibleItems((prev) => [...prev, index]);
            }, 300 + index * 250);
          });
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
            Professional Experience
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
            From intern to independent — building with purpose at every step.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line — hidden on mobile */}
          {!isMobile && (
            <div
              className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5"
              style={{
                background: 'linear-gradient(to bottom, transparent, var(--base-theme, #c26a23) 10%, var(--base-theme, #c26a23) 90%, transparent)',
                opacity: 0.4
              }}
            ></div>
          )}

          {timelineData.map((item, idx) => (
            <div
              key={idx}
              className={`relative ${isMobile ? 'pl-0' : 'pl-16 sm:pl-20'} pb-4 sm:pb-10 md:pb-12 last:pb-0 ${visibleItems.includes(idx) ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'} transition-all duration-700`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              {/* Timeline dot + icon — hidden on mobile */}
              {!isMobile && (
                <div
                  className={`absolute left-0 flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full shadow-md text-white ring-4 ring-white ${getDotBg(item.type)}`}
                >
                  <RoleIcon type={item.type} size={item.type === 'break' ? 20 : 22} />
                </div>
              )}

              {/* Content card */}
              <div className={`bg-bg-surface rounded-xl shadow-md p-3 sm:p-5 md:p-6 lg:p-7 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-left border-l-4 ${getBorderClass(item.type)}`}>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4 mb-3">
                  <div>
                    <h3
                      className="text-base sm:text-xl font-bold font-['Georgia',_serif] text-font-color-dark"
                    >
                      {item.title}
                    </h3>
                    <p className="text-text-secondary text-sm sm:text-base">{item.company}</p>
                  </div>
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap self-start ${getBadgeClasses(item.type)}`}
                  >
                    {item.type === 'current' && (
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-badge-current-text opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-badge-current-text"></span>
                      </span>
                    )}
                    {item.date}
                  </span>
                </div>

                {/* Tech Chips */}
                {item.chips && (
                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-3">
                    {item.chips.map((chip, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center px-1.5 sm:px-2 py-0.5 rounded-full text-xs font-medium text-chip-text bg-chip-bg-light"
                      >
                        {!isMobile && (
                          <span className="mr-1">{Icons[chip.icon]()}</span>
                        )}
                        {chip.label}
                      </span>
                    ))}
                  </div>
                )}

                {/* Bullet Points */}
                {item.points && item.points.length > 0 ? (
                  <ul className="space-y-1 sm:space-y-2 mt-2">
                    {item.points.map((pt, i) => (
                      <li key={i} className="flex text-left">
                        <span className="mt-0.5 mr-2 sm:mr-2.5 text-success-color flex-shrink-0">
                          {Icons.check()}
                        </span>
                        <div>
                          <h4 className="font-bold text-primary-color text-xs sm:text-base">
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
                ) : (
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
