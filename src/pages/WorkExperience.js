import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    setIsVisible(true);
    
    // Staggered animation effect for timeline items
    timelineData.forEach((_, index) => {
      setTimeout(() => {
        setVisibleItems(prev => [...prev, index]);
      }, 300 + index * 300);
    });
  }, []);

  return (
    <section className="w-full py-16 px-4 md:px-12 lg:px-16">
      {/* Section Heading with animated underline */}
      <div className={`transform transition-all duration-700 text-center mb-16 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
        <h2 className="text-4xl font-bold text-[var(--base-theme-font-color-dark)] font-['Georgia',_serif] relative inline-block">
          Work Experience
          <span className={`block h-1 bg-[var(--base-theme)] mt-2 transition-all duration-1000 ease-out mx-auto ${isVisible ? 'w-24' : 'w-0'}`}></span>
        </h2>
      </div>

      {/* Timeline */}
      <div className="relative max-w-3xl mx-auto">
        {/* Center vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200"></div>
        
        {timelineData.map((item, idx) => {
          const isEven = idx % 2 === 0;
          
          return (
            <div 
              key={idx}
              className={`relative z-10 mb-16 ${visibleItems.includes(idx) ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700`}
              style={{ transitionDelay: `${idx * 200}ms` }}
            >
              {/* Connector dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1">
                <div className="h-4 w-4 rounded-full bg-white border-4 border-[var(--base-theme)]"></div>
              </div>
              
              {/* Purple accent line */}
              {/* <div className={`absolute left-1/2 transform -translate-x-1/2 h-12 w-1 bg-purple-500 ${idx < timelineData.length - 1 ? 'block' : 'hidden'}`} style={{ top: '1.5rem' }}></div> */}
              
              {/* Content grid */}
              <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4">
                {/* Date */}
                <div className={`text-right ${isEven ? 'order-1' : 'order-1'}`}>
                  <div className="text-gray-600 font-medium">
                    {item.date}
                  </div>
                </div>
                
                {/* Icon */}
                <div className="flex items-center justify-center w-14 h-14 bg-[var(--base-theme)] rounded-full shadow-lg order-2">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                
                {/* Job details */}
                <div className={`${isEven ? 'order-3 text-left' : 'order-3 text-left'}`}>
                  <h3 className="text-xl font-bold text-[var(--base-theme-font-color-dark)]">
                    {item.title}
                  </h3>
                  <p className="text-gray-700">
                    {item.company}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Projects Section */}
      <div className="mt-24">
        <h3 className="text-2xl font-bold text-[var(--base-theme-font-color-dark)] mb-8 text-center">
          Featured Projects
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
                    className="w-full h-64 object-cover object-center transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-bold text-lg text-[var(--base-theme-font-color-dark)]">{item.author}</h4>
                  <p className="text-gray-700 font-medium">{item.title}</p>
                  
                  {/* Animated view project link */}
                  <div className="mt-3 flex items-center text-[var(--base-theme)] font-medium">
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
    </section>
  );
};

export default WorkExperience;