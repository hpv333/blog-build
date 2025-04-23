import React from 'react';

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
  const certifications = [
    {
      title: 'Front-End Development',
      issuer: 'Meta',
      date: 'February 2024',
      icon: <WebIcon />
    },
    {
      title: 'AZ-900',
      issuer: 'Microsoft',
      date: 'April 2024',
      icon: <CloudIcon />
    },
    {
      title: 'MySQL Essential Training',
      issuer: 'LinkedIn',
      date: 'October 2024',
      icon: <StorageIcon />
    }
  ];

  return (
    <section id="education" className="py-16 bg-gradient-to-b from-[#fff4eb] to-white scroll-section font-['Merriweather',_serif]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 relative">
          <h2 className="text-4xl font-bold text-[#c26a23] font-['Georgia',_serif] mb-6">
            Education & Certifications
          </h2>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#c26a23] rounded-full"></div>
        </div>

        {/* University Card */}
        <div className="bg-white rounded-xl shadow-lg mb-12 transform transition-transform duration-300 hover:-translate-y-2 overflow-hidden">
          <div className="p-6">
            <div className="flex flex-col md:flex-row items-center gap-6">
              {/* Logo */}
              <div className="md:w-1/6 flex justify-center mb-4 md:mb-0">
                <img 
                  src="/unt-logo.png" 
                  alt="UNT Logo" 
                  className="w-24 h-24 rounded-full object-contain"
                />
              </div>
              
              {/* Details */}
              <div className="md:w-1/2 text-center md:text-left">
                <h3 className="text-2xl font-bold text-[#c26a23] font-['Georgia',_serif] mb-1">
                  University of North Texas
                </h3>
                <h4 className="text-xl mb-1">
                  Master of Science, Computer Science
                </h4>
                <p className="text-gray-600">
                  Denton, TX
                </p>
              </div>
              
              {/* Timeline & GPA */}
              <div className="md:w-1/3 flex flex-col items-center md:items-end">
                <p className="text-lg text-gray-600 mb-2">
                  2023 — Present
                </p>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-white bg-green-600 font-bold text-sm">
                  CGPA: 4.00
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications Section */}
        <div className="mb-10">
          <h3 className="text-2xl font-bold text-[#c26a23] font-['Georgia',_serif] mb-6">
            Professional Certifications
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg p-5 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex items-start">
                  <div className="p-3 bg-[#fff4eb] text-[#c26a23] rounded-full mr-4">
                    {cert.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold font-['Georgia',_serif] mb-1">
                      {cert.title}
                    </h4>
                    <p className="text-sm text-gray-600">
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