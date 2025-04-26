import { useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CodeIcon from "@mui/icons-material/Code";
import GitHubIcon from "@mui/icons-material/GitHub";
import Profile_image from '../components/Profile_imageHC/Profile_image';

const NameCard = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  // Handle responsive behavior
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };
    
    // Set initial state
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="flex justify-center items-center w-full min-h-screen p-4">
      <div className="text-center max-w-6xl mx-auto">
        <div 
          className="flex flex-col items-center p-4 md:p-8" 
          style={{ color: 'var(--base-theme-font-color-dark)' }}
        >
          <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} items-center justify-center gap-4 md:gap-8 lg:gap-12 py-4 md:py-8`}>
            <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-1/2 p-4">
              <h3 
                className="font-['Georgia',_serif] text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
                style={{ lineHeight: 1.2 }}
              >
                Hari Priya Vedala
              </h3>
              
              <p className="font-['Georgia',_serif] text-lg md:text-xl lg:text-2xl font-bold mb-6 max-w-md">
                {isMobile ? (
                  // Mobile layout - stacked
                  <>
                    Graduate Assistant, UNT CVAD <br />
                    MS CS @ UNT Denton TX US <br />
                    Full Stack Web Developer
                  </>
                ) : (
                  // Desktop layout - with pipes
                  <>
                    Graduate Assistant, UNT CVAD |<br/> 
                    MS CS @ UNT Denton TX US |<br/> 
                    Full Stack Web Developer
                  </>
                )}
              </p>
              
              <div className="flex justify-center md:justify-start gap-6 md:gap-8">
                <a 
                  href="https://www.linkedin.com/in/haripriyav3/" 
                  className="transition-transform hover:scale-110"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedInIcon 
                    style={{ 
                      color: "var(--base-theme-font-color-dark)",
                      fontSize: isMobile ? 32 : 40 
                    }}
                  />
                </a>
                
                <a 
                  href="https://github.com/hpv333" 
                  className="transition-transform hover:scale-110"
                  aria-label="Code Portfolio"
                >
                  <CodeIcon 
                    style={{ 
                      color: "var(--base-theme-font-color-dark)",
                      fontSize: isMobile ? 32 : 40 
                    }}
                  />
                </a>
                
                <a 
                  href="https://github.com/hpv333" 
                  className="transition-transform hover:scale-110"
                  aria-label="GitHub Profile"
                >
                  <GitHubIcon 
                    style={{ 
                      color: "var(--base-theme-font-color-dark)",
                      fontSize: isMobile ? 32 : 40 
                    }}
                  />
                </a>
              </div>
            </div>
            
            {/* Profile Image - Resizes based on screen size */}
            <div className="relative flex justify-center items-center w-full md:w-auto">
              <div
                className={`${
                  isMobile ? 'w-104 h-104' : isTablet ? 'w-80 h-90' : 'w-96 h-96'
                } rounded-full overflow-hidden shadow-xl`}
               x
              >
                        <Profile_image className={`${isMobile ? 'object-cover':'object-contain'} 'w-full h-full`}/>
                {/* <img 
                  src="/api/placeholder/384/384" 
                  alt="Hari Priya Vedala" 
                  className="w-full h-full object-cover"
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NameCard;