import { useState } from 'react';

const Header2 = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const pages = ['Blog', 'Projects', 'Work Experience', 'Skills', 'Education'];
  const settings = ['Profile'];

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (section) => {
    setAnchorElNav(null);
    if (typeof section === 'string') {
      const sectionId = section.toLowerCase().replace(' ', '-');
      const target = document.getElementById(sectionId);
      const scrollContainer = document.querySelector('.horizontal-scroll-container');
  
      if (target && scrollContainer) {
        scrollContainer.scrollTo({
          left: target.offsetLeft,
          behavior: 'smooth'
        });
      } else if (target) {
        window.scrollTo({
          top: target.offsetTop - 70,
          behavior: 'smooth'
        });
      }
    }
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex bg-transparent">
      {/* AppBar with original color scheme (using var(--base-theme)) */}
      <div className="w-full flex flex-col" style={{ backgroundColor: 'var(--base-theme)' }}>
        <div className="flex items-center justify-between px-4 md:px-8 py-2">
          {/* Logo and Title - Always visible */}
          <div className="flex items-center">
            {/* New Logo SVG - Desktop */}
            <svg 
              className="hidden md:block h-8 w-8 mr-2 text-white" 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M13 4H17.8C18.9201 4 19.4802 4 19.908 4.21799C20.2843 4.40973 20.5903 4.71569 20.782 5.09202C21 5.51984 21 6.0799 21 7.2V16M3 16V14M8.87263 4.20378C8.80442 4.20789 8.73575 4.20997 8.66667 4.20997C7.64218 4.20997 6.70766 3.75244 5.99998 3C5.2923 3.75241 4.3578 4.20993 3.33333 4.20993C3.26426 4.20993 3.19559 4.20785 3.12738 4.20373C3.04423 4.58531 3 4.98548 3 5.39793C3 7.61207 4.27477 9.4725 6 10C7.72523 9.4725 9 7.61207 9 5.39793C9 4.9855 8.95577 4.58534 8.87263 4.20378ZM2 16H22V16.8C22 17.9201 22 18.4802 21.782 18.908C21.5903 19.2843 21.2843 19.5903 20.908 19.782C20.4802 20 19.9201 20 18.8 20H5.2C4.0799 20 3.51984 20 3.09202 19.782C2.71569 19.5903 2.40973 19.2843 2.21799 18.908C2 18.4802 2 17.9201 2 16.8V16Z" />
            </svg>
            
            {/* Typography for Desktop */}
            <h1 className="hidden md:block font-mono font-bold tracking-widest text-white text-xl">
              Hari Priya Vedala
            </h1>
            
            {/* New Logo SVG - Mobile */}
            <svg 
              className="block md:hidden h-8 w-8 mr-2 text-white" 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M13 4H17.8C18.9201 4 19.4802 4 19.908 4.21799C20.2843 4.40973 20.5903 4.71569 20.782 5.09202C21 5.51984 21 6.0799 21 7.2V16M3 16V14M8.87263 4.20378C8.80442 4.20789 8.73575 4.20997 8.66667 4.20997C7.64218 4.20997 6.70766 3.75244 5.99998 3C5.2923 3.75241 4.3578 4.20993 3.33333 4.20993C3.26426 4.20993 3.19559 4.20785 3.12738 4.20373C3.04423 4.58531 3 4.98548 3 5.39793C3 7.61207 4.27477 9.4725 6 10C7.72523 9.4725 9 7.61207 9 5.39793C9 4.9855 8.95577 4.58534 8.87263 4.20378ZM2 16H22V16.8C22 17.9201 22 18.4802 21.782 18.908C21.5903 19.2843 21.2843 19.5903 20.908 19.782C20.4802 20 19.9201 20 18.8 20H5.2C4.0799 20 3.51984 20 3.09202 19.782C2.71569 19.5903 2.40973 19.2843 2.21799 18.908C2 18.4802 2 17.9201 2 16.8V16Z" />
            </svg>
            
            {/* Mobile Title */}
            <h1 className="block md:hidden font-mono font-bold tracking-wider text-white text-lg truncate max-w-xs">
              Hari Priya Vedala
            </h1>
          </div>
          
          {/* Mobile Menu Icon */}
          <div className="flex md:hidden">
            <button 
              className="text-white p-2"
              onClick={handleOpenNavMenu}
            >
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center flex-1 mx-10">
            <div className="flex justify-around space-x-4 w-full max-w-2xl">
              {pages.map((page) => (
                <button
                  key={page}
                  onClick={() => handleCloseNavMenu(page)}
                  className="my-2 text-white px-4 py-2 hover:bg-white hover:bg-opacity-10 rounded transition"
                >
                  {page}
                </button>
              ))}
            </div>
          </div>
          
          {/* User Icon */}
          {/* <div className="flex items-center">
            <button
              onClick={handleOpenUserMenu}
              className="p-0 rounded-full"
            >
              <div className="flex items-center justify-center h-10 w-10 rounded-full bg-amber-100 text-amber-800">
                <span className="text-sm font-semibold">User</span>
              </div>
            </button>
          </div> */}
        </div>
        
        {/* Mobile Menu Dropdown */}
        {Boolean(anchorElNav) && (
          <div className="md:hidden bg-black bg-opacity-90 shadow-lg py-2">
            {pages.map((page) => (
              <button
                key={page}
                onClick={() => handleCloseNavMenu(page)}
                className="block w-full text-left px-4 py-2 text-white hover:bg-white hover:bg-opacity-10"
              >
                {page}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Header2;