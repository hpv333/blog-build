import React, { useState, useEffect } from "react";
import "./Profile_image.css"; // We'll update this CSS file

const Profile_image = () => {
  const [dimensions, setDimensions] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0
  });

  useEffect(() => {
    function handleResize() {
      setDimensions({
        width: window.innerWidth
      });
    }

    window.addEventListener('resize', handleResize);
    handleResize(); // Set initial dimensions
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Get container size based on screen width
  const getContainerSize = () => {
    if (dimensions.width < 480) { // Small mobile
      return {
        width: '280px',
        height: '280px'
      };
    } else if (dimensions.width < 768) { // Mobile
      return {
        width: '350px',
        height: '320px'
      };
    } else if (dimensions.width < 1024) { // Tablet
      return {
        width: '450px',
        height: '380px'
      };
    } else if (dimensions.width < 1280) { // Small desktop
      return {
        width: '600px',
        height: '450px'
      };
    } else { // Large desktop
      return {
        width: '800px',
        height: '550px'
      };
    }
  };

  const containerSize = getContainerSize();
  
  // Convert offset based on container size
  const getBorderOffset = () => {
    // Scale the offset proportionally based on container width
    const baseWidth = 800; // Original width
    const baseOffset = 18; // Original offset
    const scaleFactor = parseFloat(containerSize.width) / baseWidth;
    
    return `${Math.round(baseOffset * scaleFactor)}px`;
  };

  return (
    <div className="profile-container" style={containerSize}>
      <div className="gold-border" style={{ transform: `translateX(${getBorderOffset()})` }}></div>
      <div className="profile-frame">
        <img 
          src={require('../../images/IMG_2136.jpg')} 
          alt="Profile" 
          className="profile-image" 
        />
      </div>
    </div>
  );
};

export default Profile_image;