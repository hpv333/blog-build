import { useState, useEffect } from 'react';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CodeIcon from "@mui/icons-material/Code";
import GitHubIcon from "@mui/icons-material/GitHub";
import Profile_image from '../components/Profile_imageHC/Profile_image';

const NameCard = () => {
  const [screenSize, setScreenSize] = useState('desktop');

  // Enhanced responsive behavior with more breakpoints
  useEffect(() => {
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
    
    // Set initial state
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Determine layout based on screen size
  const isMobile = screenSize === 'mobile';
  const isTablet = screenSize === 'tablet';
  const isLarge = screenSize === 'large';

  // Dynamic icon size based on screen size
  const getIconSize = () => {
    switch (screenSize) {
      case 'mobile': return 32;
      case 'tablet': return 36;
      case 'desktop': return 40;
      case 'large': return 44;
      default: return 40;
    }
  };

  // Dynamic component size and spacing
  const getTextWidth = () => {
    if (isMobile) return 'w-full';
    if (isTablet) return 'w-3/5';
    return 'w-2/3';
  };

  const getImageWidth = () => {
    if (isMobile) return 'w-full';
    if (isTablet) return 'w-2/5';
    return 'w-1/3';
  };

  return (
    <div className="flex justify-center items-center w-full py-4 sm:py-6 md:py-8 lg:py-10 px-3 sm:px-4 md:px-6 lg:px-8">
      <div className="w-full max-w-7xl mx-auto">
        <div 
          className={`flex flex-col items-center p-3 sm:p-4 md:p-6 lg:p-8`} 
          style={{ color: 'var(--base-theme-font-color-dark)' }}
        >
          <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} items-center ${isMobile ? 'justify-center' : 'justify-between'} gap-4 sm:gap-6 md:gap-8 lg:gap-10 w-full`}>
            {/* Text content - expanded width */}
            <div className={`flex flex-col ${isMobile ? 'items-center text-center' : 'items-start text-left'} ${getTextWidth()} p-2 sm:p-3 md:p-4`}>
              <h1 
                className="font-['Georgia',_serif] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-2 sm:mb-3 md:mb-4 lg:mb-5"
                style={{ lineHeight: 1.1 }}
              >
                Hari Priya Vedala
              </h1>
              
              <p className="font-['Georgia',_serif] text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 sm:mb-5 md:mb-6 lg:mb-8 max-w-3xl">
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
              
              <div className={`flex ${isMobile ? 'justify-center' : 'justify-start'} gap-5 sm:gap-6 md:gap-8 lg:gap-10`}>
                <a 
                  href="https://www.linkedin.com/in/haripriyav3/" 
                  className="transition-transform hover:scale-110"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedInIcon 
                    style={{ 
                      color: "var(--base-theme-font-color-dark)",
                      fontSize: getIconSize() 
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
                      fontSize: getIconSize() 
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
                      fontSize: getIconSize() 
                    }}
                  />
                </a>
              </div>
            </div>
            
            {/* Profile Image with responsive sizing */}
            <div className={`flex justify-center items-center ${getImageWidth()}`}>
              <div className={`w-full ${!isMobile && "transform scale-90"} ${isLarge && "scale-95"}`}>
                <Profile_image />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NameCard;