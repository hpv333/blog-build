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
            {/* AdbIcon equivalent */}
            <svg className="hidden md:block h-8 w-8 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M5 16l-3-3 3-3v6zM17.59 5H22V3h-6v6h2V5.41l6 6V18h-2v1a3 3 0 01-3 3H5a3 3 0 01-3-3v-3h2v3a1 1 0 001 1h14a1 1 0 001-1v-7.41l-6-6z"/>
            </svg>
            
            {/* Typography for Desktop */}
            <h1 className="hidden md:block font-mono font-bold tracking-widest text-white text-xl">
              Hari Priya Vedala
            </h1>
            
            {/* Mobile Logo */}
            <svg className="block md:hidden h-8 w-8 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M5 16l-3-3 3-3v6zM17.59 5H22V3h-6v6h2V5.41l6 6V18h-2v1a3 3 0 01-3 3H5a3 3 0 01-3-3v-3h2v3a1 1 0 001 1h14a1 1 0 001-1v-7.41l-6-6z"/>
            </svg>
            
            {/* Mobile Title */}
            <h1 className="block md:hidden font-mono font-bold tracking-wider text-white text-lg truncate max-w-xs">
              LOGO
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
          
          {/* Avatar - Always visible */}
          <div className="flex items-center">
            <button
              onClick={handleOpenUserMenu}
              className="p-0 rounded-full"
            >
              <img 
                className="h-10 w-10 rounded-full"
                src="/api/placeholder/40/40" 
                alt="User avatar" 
              />
            </button>
          </div>
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
        
        {/* User Menu Dropdown */}
        {Boolean(anchorElUser) && (
          <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 z-50" style={{ top: '100%' }}>
            {settings.map((setting) => (
              <a
                key={setting}
                href="https://flowcv.com/resume/lqghji3921"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={handleCloseUserMenu}
              >
                {setting}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Header2;