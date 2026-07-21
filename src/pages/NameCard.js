import { motion } from 'framer-motion';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Profile_image from '../components/Profile_imageHC/Profile_image';
import useScreenSize from '../hooks/useScreenSize';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.15, duration: 0.5, ease: 'easeOut' },
  }),
};

const NameCard = () => {
  const { screenSize, isMobile } = useScreenSize();

  const getIconSize = () => {
    switch (screenSize) {
      case 'mobile': return 32;
      case 'small-tablet': return 34;
      case 'tablet': return 36;
      case 'desktop': return 40;
      case 'large-desktop': return 42;
      case 'ultrawide': return 44;
      default: return 40;
    }
  };

  const getTextWidth = () => {
    if (isMobile) return 'w-full';
    return 'w-2/3';
  };

  const getImageWidth = () => {
    if (isMobile) return 'w-full';
    return 'w-1/3';
  };

  const getHeadingSize = () => {
    switch (screenSize) {
      case 'mobile': return '1.875rem';
      case 'small-tablet': return '2.5rem';
      case 'tablet': return '3.25rem';
      case 'desktop': return '3.75rem';
      case 'large-desktop': return '4rem';
      case 'ultrawide': return '4.5rem';
      default: return '3.75rem';
    }
  };

  const getSubheadingSize = () => {
    switch (screenSize) {
      case 'mobile': return '1.125rem';
      case 'small-tablet': return '1.25rem';
      case 'tablet': return '1.5rem';
      case 'desktop': return '1.75rem';
      case 'large-desktop': return '1.875rem';
      case 'ultrawide': return '2rem';
      default: return '1.75rem';
    }
  };

  return (
    <div className="flex justify-center items-center w-full py-4 sm:py-6 md:py-8 lg:py-10 px-3 sm:px-4 md:px-6 lg:px-8">
      <div className="w-full max-w-full sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl mx-auto">
        <div
          className="flex flex-col items-center p-3 sm:p-4 md:p-6 lg:p-8"
          style={{ color: 'var(--base-theme-font-color-dark)' }}
        >
          <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} items-center ${isMobile ? 'justify-center' : 'justify-between'} gap-4 sm:gap-6 md:gap-8 lg:gap-10 w-full`}>
            {/* Text content */}
            <div className={`flex flex-col ${isMobile ? 'items-center text-center' : 'items-start text-left'} ${getTextWidth()} p-2 sm:p-3 md:p-4`}>
              <motion.h1
                className="font-['Georgia',_serif] font-bold mb-2 sm:mb-3 md:mb-4 lg:mb-5"
                style={{ lineHeight: 1.1, fontSize: getHeadingSize(), transition: 'font-size 0.3s ease' }}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={0}
              >
                Hari Priya Vedala
              </motion.h1>

              {/* Animated underline */}
              <motion.div
                className="h-1 rounded-full mb-4"
                style={{ backgroundColor: 'var(--base-theme)' }}
                initial={{ width: 0 }}
                animate={{ width: 80 }}
                transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
              />

              {/* Tagline */}
              <motion.p
                className="font-mono text-sm sm:text-base md:text-lg tracking-wider mb-4 sm:mb-5 opacity-80"
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={1}
              >
                Code. Ship. Repeat.
              </motion.p>

              <motion.p
                className="font-['Georgia',_serif] font-bold mb-4 sm:mb-5 md:mb-6 lg:mb-8 max-w-3xl"
                style={{ fontSize: getSubheadingSize(), transition: 'font-size 0.3s ease' }}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={2}
              >
                {isMobile ? (
                  <>
                    UX Frontend Engineer & Rapid Prototyper <br />
                    Vibe Coder · India <br />
                    MS CS — UNT (4.0 GPA)
                  </>
                ) : (
                  <>
                    UX Frontend Engineer & Rapid Prototyper |<br />
                    Vibe Coder · India |<br />
                    MS CS — UNT (4.0 GPA)
                  </>
                )}
              </motion.p>

              {/* Social Icons */}
              <motion.div
                className={`flex ${isMobile ? 'justify-center' : 'justify-start'} gap-5 sm:gap-6 md:gap-8 lg:gap-10 mb-5`}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={3}
              >
                <a
                  href="https://www.linkedin.com/in/haripriyav3/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform hover:scale-110"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedInIcon style={{ color: "var(--base-theme-font-color-dark)", fontSize: getIconSize() }} />
                </a>

                <a
                  href="https://github.com/hpv333"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform hover:scale-110"
                  aria-label="GitHub Profile"
                >
                  <GitHubIcon style={{ color: "var(--base-theme-font-color-dark)", fontSize: getIconSize() }} />
                </a>
              </motion.div>

              {/* Resume Download Button */}
              <motion.a
                href={`${process.env.PUBLIC_URL}/HariPriya_Resume.pdf`}
                download="HariPriya_Vedala_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold text-white text-sm sm:text-base transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{ backgroundColor: 'var(--base-theme)' }}
                variants={scaleIn}
                initial="hidden"
                animate="visible"
                custom={4}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download Resume
              </motion.a>
            </div>

            {/* Profile Image */}
            <motion.div
              className={`flex justify-center items-center ${getImageWidth()}`}
              variants={scaleIn}
              initial="hidden"
              animate="visible"
              custom={2}
            >
              <div className={`w-full ${!isMobile && "transform scale-90"} ${screenSize === 'ultrawide' && "scale-95"}`}>
                <Profile_image />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NameCard;
