import React, { useState, useEffect, useRef } from "react";
import './Skills.css';

// Import your images directly
import abc from "../images/abc.png";
import Donna_3_cut from "../images/Donna_3_cut.jpeg";

const timelineData = [
  {
    date: "Jan 2022 - June 2022",
    title: "Full Stack Intern",
    company: "Sindala Trading and Pvt Ltd",
  },
  {
    date: "Mar 2023 — May 2023",
    title: "Software Development Intern",
    company: "Style Pro Pvt Ltd",
  },
  {
    date: "Sep 2023 — Present",
    title: "Graduate Assistant IT (Web developer)",
    company: "CVAD University Of North Texas",
  },
];

const itemData = [
  {
    img: abc,
    title: "text-behind-image",
    author: "Rexon Wong's",
    link: "https://textbehindimage.rexanwong.xyz/",
  },
  {
    img: Donna_3_cut,
    title: "Donna AI",
    author: "Mobiversite",
    link: "https://www.musicdonna.com/",
  },
];

const WorkExperience = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [screenSize, setScreenSize] = useState('desktop');
  const sectionRef = useRef(null);

  useEffect(() => {
    // Function to detect element visibility
    const observeVisibility = () => {
      const observer = new IntersectionObserver(
        (entries) => {
          const [entry] = entries;
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Staggered animation effect for timeline items
            timelineData.forEach((_, index) => {
              setTimeout(() => {
                setVisibleItems((prev) => [...prev, index]);
              }, 300 + index * 300);
            });
            observer.unobserve(entry.target);
          }
        },
        { threshold: 0.1 }
      );

      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }

      return observer;
    };

    // Function to handle screen size detection
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setScreenSize('mobile');
      } else if (width < 1024) {
        setScreenSize('tablet');
      } else if (width < 1536) {
        setScreenSize('desktop');
      } else {
        setScreenSize('large');
      }
    };

    const observer = observeVisibility();
    handleResize(); // Set initial size

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
      if (observer && sectionRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  // Helper for dynamic spacing
  const getSpacing = (size) => {
    switch (screenSize) {
      case 'mobile': return size.sm;
      case 'tablet': return size.md;
      case 'desktop': return size.lg;
      case 'large': return size.xl;
      default: return size.md;
    }
  };

  // Dynamic styles based on screen size
  const dynamicStyles = {
    padding: getSpacing({ sm: 16, md: 24, lg: 32, xl: 40 }),
    fontSize: {
      heading: getSpacing({ sm: 32, md: 36, lg: 40, xl: 48 }),
      subheading: getSpacing({ sm: 20, md: 22, lg: 24, xl: 28 }),
    },
    imageHeight: getSpacing({ sm: 160, md: 200, lg: 180, xl: 220 }),
  };

  return (
    <section 
      ref={sectionRef}
      className="w-full py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-10 lg:px-16 overflow-hidden"
      style={{ 
        background: 'var(--base-theme-light, #fff4eb)',
        transition: 'all 0.3s ease-in-out'
      }}
    >
      {/* Section Heading with animated underline */}
      <div className={`transform transition-all duration-700 text-center mb-10 sm:mb-12 md:mb-16 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
        <h2 
          className="font-['Georgia',_serif] font-bold relative inline-block"
          style={{ 
            fontSize: `${dynamicStyles.fontSize.heading / 16}rem`,
            color: 'var(--base-theme-font-color-dark, #6a2c1a)',
            transition: 'font-size 0.3s ease-in-out'
          }}
        >
          Professional Experience
          <span 
            className={`block h-1 bg-[var(--base-theme)] mt-2 transition-all duration-1000 ease-out mx-auto`}
            style={{ width: isVisible ? `${dynamicStyles.fontSize.heading / 1.5}px` : '0px' }}
          ></span>
        </h2>
      </div>

      {/* Flex container for side-by-side layout on larger screens */}
      <div className="flex flex-col lg:flex-row lg:gap-8 xl:gap-12 lg:items-start container mx-auto">
        {/* Work Experience Timeline - 50% width on larger screens */}
        <div className="w-full lg:w-1/2 mb-12 lg:mb-0 transition-all duration-300">
          <h3 
            className="font-bold mb-6 sm:mb-8 text-center lg:text-left transition-all duration-300"
            style={{ 
              fontSize: `${dynamicStyles.fontSize.subheading / 16}rem`,
              color: 'var(--base-theme-font-color-dark, #6a2c1a)'
            }}
          >
            Work Experience
          </h3>
          
          {/* Timeline */}
          <div className="relative max-w-lg mx-auto lg:mx-0 px-2 sm:px-4">
            {/* Center vertical line */}
            <div 
              className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gray-200"
              style={{ 
                height: `${timelineData.length * 180 - 80}px`,
                top: '20px',
                transition: 'height 0.3s ease-in-out'
              }}
            ></div>
            
            {timelineData.map((item, idx) => {
              return (
                <div 
                  key={idx}
                  className={`relative z-10 mb-12 sm:mb-16 ${visibleItems.includes(idx) ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700`}
                  style={{ transitionDelay: `${idx * 200}ms` }}
                >
                  {/* Connector dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1">
                    <div className="h-4 w-4 rounded-full bg-white border-4 border-[var(--base-theme)]"></div>
                  </div>
                  
                  {/* Content grid */}
                  <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 sm:gap-4">
                    {/* Date */}
                    <div className="text-right">
                      <div 
                        className="text-gray-600 font-medium"
                        style={{ fontSize: screenSize === 'mobile' ? '0.875rem' : '1rem' }}
                      >
                        {item.date}
                      </div>
                    </div>
                    
                    {/* Icon */}
                    <div 
                      className="flex items-center justify-center rounded-full shadow-lg bg-[var(--base-theme)] transition-all duration-300"
                      style={{ 
                        width: screenSize === 'mobile' ? '3rem' : '3.5rem',
                        height: screenSize === 'mobile' ? '3rem' : '3.5rem' 
                      }}
                    >
                      <svg 
                        className="text-white transition-all duration-300" 
                        style={{ 
                          width: screenSize === 'mobile' ? '1.25rem' : '1.5rem',
                          height: screenSize === 'mobile' ? '1.25rem' : '1.5rem' 
                        }}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                    
                    {/* Job details */}
                    <div className="text-left">
                      <h3 
                        className="font-bold text-[var(--base-theme-font-color-dark)] transition-all duration-300"
                        style={{ fontSize: screenSize === 'mobile' ? '1.125rem' : '1.25rem' }}
                      >
                        {item.title}
                      </h3>
                      <p 
                        className="text-gray-700 transition-all duration-300"
                        style={{ fontSize: screenSize === 'mobile' ? '0.875rem' : '1rem' }}
                      >
                        {item.company}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Projects Section - 50% width on larger screens */}
        <div className="w-full lg:w-1/2 transition-all duration-300">
          <h3 
            className="font-bold mb-6 sm:mb-8 text-center lg:text-left transition-all duration-300"
            style={{ 
              fontSize: `${dynamicStyles.fontSize.subheading / 16}rem`,
              color: 'var(--base-theme-font-color-dark, #6a2c1a)'
            }}
          >
            Gallery of AI Projects Tested
          </h3>
          
          <div 
            className="grid gap-4 sm:gap-6 md:gap-8 transition-all duration-300"
            style={{ 
              gridTemplateColumns: screenSize === 'mobile' ? '1fr' : 'repeat(auto-fit, minmax(250px, 1fr))'
            }}
          >
            {itemData.map((item, index) => (
              <div 
                key={item.img}
                className={`transform transition-all duration-700 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
                style={{ transitionDelay: `${800 + index * 200}ms` }}
                onClick={() => window.open(item.link, "_blank", "noopener,noreferrer")}
              >
                <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] cursor-pointer group">
                  <div className="overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                      style={{ height: `${dynamicStyles.imageHeight}px` }}
                    />
                  </div>
                  <div className="p-4 sm:p-5 transition-all duration-300">
                    <h4 
                      className="font-bold text-[var(--base-theme-font-color-dark)] transition-all duration-300"
                      style={{ fontSize: screenSize === 'mobile' ? '1.125rem' : '1.25rem' }}
                    >
                      {item.author}
                    </h4>
                    <p 
                      className="text-gray-700 font-medium transition-all duration-300"
                      style={{ fontSize: screenSize === 'mobile' ? '0.875rem' : '1rem' }}
                    >
                      {item.title}
                    </p>
                    
                    {/* Animated view project link */}
                    <div className="mt-2 sm:mt-3 flex items-center text-[var(--base-theme)] font-medium">
                      <span>View Project</span>
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-4 w-4 ml-1 transform transition-transform duration-300 group-hover:translate-x-1" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
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

export default WorkExperience;