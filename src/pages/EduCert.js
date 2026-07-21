import { useState, useEffect, useRef } from 'react';
import { ReactComponent as GoldmanSachsIcon } from '../images/goldman-sachs.svg';
import { ReactComponent as MetaIcon } from '../images/meta-logo.svg';
import { ReactComponent as MicrosoftIcon } from  '../images/microsoft-logo.svg';
import useScreenSize from '../hooks/useScreenSize';


// Icons for certifications
const WebIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
    <polyline points="9 22 9 12 15 12 15 22"></polyline>
  </svg>
);

const CloudIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
  </svg>
);

const StorageIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="12" x2="2" y2="12"></line>
    <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
    <line x1="6" y1="16" x2="6.01" y2="16"></line>
    <line x1="10" y1="16" x2="10.01" y2="16"></line>
  </svg>
);

const EduCert = () => {
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

  const isSmallScreen = isMobile; // mobile or small-tablet

  // Responsive icon size based on screen size
  const getIconSize = () => {
    switch (screenSize) {
      case 'mobile': return '20px';
      case 'small-tablet': return '22px';
      case 'tablet': return '24px';
      case 'desktop': 
      case 'large-desktop':
      case 'ultrawide': return '34px';
      default: return '34px';
    }
  };

  // Dynamic font size and spacing based on screen size
  const getStyles = () => {
    const baseScale = {
      mobile: 0.85,
      'small-tablet': 0.9,
      tablet: 1,
      desktop: 1.05,
      'large-desktop': 1.1,
      ultrawide: 1.15
    };
    
    const scale = baseScale[screenSize] || 1;
    
    return {
      heading: {
        fontSize: `${2.25 * scale}rem`,
        marginBottom: `${1.5 * scale}rem`
      },
      subheading: {
        fontSize: `${1.75 * scale}rem`,
        marginBottom: `${1 * scale}rem`
      },
      uniTitle: {
        fontSize: `${1.5 * scale}rem`
      },
      uniSubtitle: {
        fontSize: `${1.25 * scale}rem`
      },
      certTitle: {
        fontSize: `${1.1 * scale}rem`
      },
      padding: `${1 * scale}rem ${1.25 * scale}rem`,
      gap: `${0.75 * scale}rem`,
      iconSize: getIconSize()
    };
  };

  const styles = getStyles();

 const certifications = [
  {
    title: 'Cybersecurity Terminology',
    issuer: 'LinkedIn',
    date: 'May 2025',
   
    image: require('../images/certificates/cybersecurity_hp.jpg'),
    icon: 'https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg'
  },
  {
    title: 'Docker Foundations Professional Certificate',
    issuer: 'Docker, Inc',
    date: 'May 2025',
    image: require('../images/certificates/docker_hp.jpg'),
    icon: 'https://cdn.worldvectorlogo.com/logos/docker.svg'
  },
  {
    title: 'Goldman Sachs - Operations Job Simulation',
    issuer: 'Forage',
    date: 'May 2025',
    image: require('../images/certificates/Forage_HP_Job_Stimulation.jpg'),
    icon: (
      <div style={{ width: '100%', height: '100%' }}>
        <GoldmanSachsIcon style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      </div>
    )

  },
  {
    title: 'Introduction to Front-End Development',
    issuer: 'Meta',
    date: 'April 2025',
    image: require('../images/certificates/introtofrontendev_hp.jpg'),
    icon: (
      <div style={{ width: '100%', height: '100%' }}>
        <MetaIcon style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      </div>
    )
  },
  {
    title: 'Learning Docker',
    issuer: 'LinkedIn Learning',
    date: 'April 2025',
    image: require('../images/certificates/LearningDocker_hp.jpg'),
    icon: 'https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg'
  },
  {
    title: 'Demystifying AI',
    issuer: 'University of North Texas',
    date: 'March 2025',
    image: require('../images/certificates/DemystifyingAI_hp.jpg'),
    icon: require('../images/unt-logo.png')
  },
  {
    title: 'MySQL Essential Training',
    issuer: 'LinkedIn',
    date: 'October 2024',
    image: require('../images/certificates/MySQL-hp.jpg'),
    icon: 'https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg'
  },
  {
    title: 'GitHub Essential Training: 1 The Basics',
    issuer: 'LinkedIn',
    date: 'September 2024',
    image: require('../images/certificates/GithubEssentials_hp.jpg'),
    icon: 'https://cdn.worldvectorlogo.com/logos/github-icon-1.svg'
  },
  // {
  //   title: 'EF SET English Certificate (C2 Proficient)',
  //   issuer: 'EF SET',
  //   date: 'October 2021',
  //   image: <WebIcon />,
  //   icon: 'https://www.efset.org/images/efset-english-certification-badge.png'
  // },
  // {
  //   title: 'Python Data Structures',
  //   issuer: 'University of Michigan',
  //   date: 'June 2021',
  //   image: <StorageIcon />,
  //   icon: 'https://upload.wikimedia.org/wikipedia/commons/e/e3/University_of_Michigan_logo.svg'
  // },
  // {
  //   title: 'Python Data Structures',
  //   issuer: 'Coursera',
  //   date: 'June 2021',
  //   image: <StorageIcon />,
  //   icon: 'https://cdn.worldvectorlogo.com/logos/coursera-3.svg'
  // },
  // {
  //   title: 'Programming for Everybody (Getting Started with Python)',
  //   issuer: 'Coursera',
  //   date: 'August 2020',
  //   image: <WebIcon />,
  //   icon: 'https://cdn.worldvectorlogo.com/logos/coursera-3.svg'
  // },
  // {
  //   title: 'Programming for Everybody',
  //   issuer: 'University of Michigan',
  //   date: 'August 2020',
  //   image: <WebIcon />,
  //   icon: 'https://upload.wikimedia.org/wikipedia/commons/e/e3/University_of_Michigan_logo.svg'
  // },
  // {
  //   title: 'Introduction to Software Product Management',
  //   issuer: 'Coursera',
  //   date: 'June 2020',
  //   image: <WebIcon />,
  //   icon: 'https://cdn.worldvectorlogo.com/logos/coursera-3.svg'
  // },
  // {
  //   title: 'Data Science Math Skills',
  //   issuer: 'Coursera',
  //   date: 'June 2020',
  //   image: <StorageIcon />,
  //   icon: 'https://cdn.worldvectorlogo.com/logos/coursera-3.svg'
  // }
];

  

  // Determine grid columns based on screen width and content
  const getCertColumns = () => {
    if (screenSize === 'mobile') return 1;
    if (screenSize === 'small-tablet' || screenSize === 'tablet') return 2;
    return 3;
  };

  return (
    <section 
      ref={sectionRef}
      id="education" 
      className="py-12 sm:py-14 md:py-16 lg:py-20 text-left bg-gradient-to-br from-section-gradient-from to-section-gradient-to font-['Merriweather',_serif]"
      style={{ transition: 'padding 0.3s ease' }}
    >
      <div className="max-w-full sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10">
        {/* Section Header with animated underline */}
        <div
          className={`mb-8 sm:mb-10 md:mb-12 lg:mb-16 relative transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
        >
          <h2
            className="font-bold text-font-color-dark font-['Georgia',_serif] relative inline-block"
            style={{
              fontSize: styles.heading.fontSize,
              transition: 'font-size 0.3s ease'
            }}
          >
            Education & Certifications
            <span
              className={`block h-1 bg-base-theme mt-3 rounded-full transition-all duration-1000 ease-out ${isVisible ? 'w-16 sm:w-20 md:w-24 lg:w-28' : 'w-0'}`}
            ></span>
          </h2>
        </div>

        {/* Education Cards */}
        <div className="space-y-4 sm:space-y-5 md:space-y-6 mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          {/* University of North Texas */}
          <div
            className={`bg-white rounded-xl shadow-lg transform transition-all duration-500 hover:-translate-y-1 hover:shadow-xl overflow-hidden ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="p-2.5 sm:p-5 md:p-6 lg:p-8">
              <div className="flex flex-row items-start gap-2.5 sm:gap-4 md:gap-6">
                <div className="flex-shrink-0 w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg overflow-hidden">
                  <img src={require('../images/unt-logo.png')} alt="UNT" className="w-full h-full object-contain" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-bold text-primary-color font-['Georgia',_serif] text-sm sm:text-base md:text-lg truncate" style={{ fontSize: isMobile ? undefined : styles.uniTitle.fontSize }}>
                      University of North Texas
                    </h3>
                    <span className="inline-flex items-center px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-white bg-success-bg font-bold text-xs sm:text-sm flex-shrink-0">
                      GPA: 4.0
                    </span>
                  </div>
                  <h4 className="text-xs sm:text-sm md:text-base mb-0.5" style={{ fontSize: isMobile ? undefined : styles.uniSubtitle.fontSize }}>
                    Master of Science — Computer Science
                  </h4>
                  <p className="text-text-secondary text-xs sm:text-sm">Denton, TX · Aug 2023 — May 2025</p>
                </div>
              </div>
            </div>
          </div>

          {/* St. Martin's Engineering College */}
          <div
            className={`bg-white rounded-xl shadow-lg transform transition-all duration-500 hover:-translate-y-1 hover:shadow-xl overflow-hidden ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: '300ms' }}
          >
            <div className="p-2.5 sm:p-5 md:p-6 lg:p-8">
              <div className="flex flex-row items-start gap-2.5 sm:gap-4 md:gap-6">
                <div className="flex-shrink-0 w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg bg-card-header-bg flex items-center justify-center text-lg sm:text-2xl">
                  🎓
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-bold text-primary-color font-['Georgia',_serif] text-sm sm:text-base md:text-lg truncate" style={{ fontSize: isMobile ? undefined : styles.uniTitle.fontSize }}>
                      St. Martin's Engineering College
                    </h3>
                    <span className="inline-flex items-center px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-white bg-success-bg font-bold text-xs sm:text-sm flex-shrink-0">
                      87.8%
                    </span>
                  </div>
                  <h4 className="text-xs sm:text-sm md:text-base mb-0.5" style={{ fontSize: isMobile ? undefined : styles.uniSubtitle.fontSize }}>
                    Bachelor of Technology — Information Technology
                  </h4>
                  <p className="text-text-secondary text-xs sm:text-sm">Aug 2019 — Jul 2023</p>
                </div>
              </div>
            </div>
          </div>

          {/* Army Public School */}
          <div
            className={`bg-white rounded-xl shadow-lg transform transition-all duration-500 hover:-translate-y-1 hover:shadow-xl overflow-hidden ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: '400ms' }}
          >
            <div className="p-2.5 sm:p-5 md:p-6 lg:p-8">
              <div className="flex flex-row items-start gap-2.5 sm:gap-4 md:gap-6">
                <div className="flex-shrink-0 w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg bg-card-header-bg flex items-center justify-center text-lg sm:text-2xl">
                  🪖
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-bold text-primary-color font-['Georgia',_serif] text-sm sm:text-base md:text-lg truncate" style={{ fontSize: isMobile ? undefined : styles.uniTitle.fontSize }}>
                      Army Public School (APS)
                    </h3>
                    <span className="inline-flex items-center px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-white bg-success-bg font-bold text-xs sm:text-sm flex-shrink-0">
                      88.4%
                    </span>
                  </div>
                  <h4 className="text-xs sm:text-sm md:text-base mb-0.5" style={{ fontSize: isMobile ? undefined : styles.uniSubtitle.fontSize }}>
                    Intermediate — MPC & CS
                  </h4>
                  <p className="text-text-secondary text-xs sm:text-sm">Apr 2017 — Mar 2019</p>
                </div>
              </div>
            </div>
          </div>

          {/* Delhi Public School */}
          <div
            className={`bg-white rounded-xl shadow-lg transform transition-all duration-500 hover:-translate-y-1 hover:shadow-xl overflow-hidden ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: '500ms' }}
          >
            <div className="p-2.5 sm:p-5 md:p-6 lg:p-8">
              <div className="flex flex-row items-start gap-2.5 sm:gap-4 md:gap-6">
                <div className="flex-shrink-0 w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg bg-card-header-bg flex items-center justify-center text-lg sm:text-2xl">
                  📚
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-bold text-primary-color font-['Georgia',_serif] text-sm sm:text-base md:text-lg truncate" style={{ fontSize: isMobile ? undefined : styles.uniTitle.fontSize }}>
                      Delhi Public School
                    </h3>
                    <span className="inline-flex items-center px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-white bg-success-bg font-bold text-xs sm:text-sm flex-shrink-0">
                      10 CGPA
                    </span>
                  </div>
                  <h4 className="text-xs sm:text-sm md:text-base mb-0.5" style={{ fontSize: isMobile ? undefined : styles.uniSubtitle.fontSize }}>
                    Class 1 — 10
                  </h4>
                  <p className="text-text-secondary text-xs sm:text-sm">2007 — 2017</p>
                  {!isMobile && (
                    <p className="text-text-muted text-xs sm:text-sm mt-1">
                      Solo Singing · Group Singing · Dance · Spelling Bee · Model UN · Sanskrit Poetry · Table Tennis
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications Section */}
        <div 
          className={`mb-6 sm:mb-8 md:mb-10 transform transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          style={{ transitionDelay: '400ms' }}
        >
          <h3 
            className="font-bold text-primary-color font-['Georgia',_serif] mb-4 sm:mb-5 md:mb-6 lg:mb-8"
            style={{
              fontSize: styles.subheading.fontSize,
              transition: 'font-size 0.3s ease, margin 0.3s ease'
            }}
          >
            Professional Certifications
          </h3>
          
          <div
            className="grid gap-2.5 sm:gap-5 md:gap-6 lg:gap-8"
            style={{
              gridTemplateColumns: `repeat(${getCertColumns()}, minmax(0, 1fr))`,
              transition: 'grid-template-columns 0.3s ease, gap 0.3s ease'
            }}
          >
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
                style={{
                  padding: isMobile ? '0.625rem' : styles.padding,
                  transitionDelay: `${500 + index * 100}ms`,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
                }}
              >
                {cert.image && !isSmallScreen ? (
                  <img
                src={cert.image}
                alt={cert.title}
                className="w-full object-cover"
                style={{ height: styles.imageSize }}
              />
                ): null}
                <div className="flex items-start mt-4" style={{ gap: styles.gap }}>
                  <div 
                    className="p-2 sm:p-2.5 md:p-3 bg-base-theme-light text-base-theme rounded-full flex-shrink-0"
                    style={{ transition: 'padding 0.3s ease' }}
                  >
                    <div style={{ width: styles.iconSize, height: styles.iconSize }}>
                      {typeof cert.icon === 'string' ? (
                          <img 
                            src={cert.icon} 
                            alt="cert icon" 
                            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                          />
                        ) : (
                          <div style={{ width: '100%', height: '100%' }}>
                            {cert.icon}
                          </div>
                        )}
      
                    </div>
                  </div>
                  <div>
                    <h4 
                      className="font-bold font-['Georgia',_serif] mb-1"
                      style={{
                        fontSize: styles.certTitle.fontSize,
                        transition: 'font-size 0.3s ease'
                      }}
                    >
                      {cert.title}
                    </h4>
                    <p 
                      className="text-text-secondary"
                      style={{ 
                        fontSize: screenSize === 'mobile' ? '0.75rem' : '0.875rem',
                        transition: 'font-size 0.3s ease'
                      }}
                    >
                      {cert.issuer} • {cert.date}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EduCert;