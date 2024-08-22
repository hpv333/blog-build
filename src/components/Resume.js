import React, { useState, useEffect } from 'react';
import './Resumestyle.css';

const Resume = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  useEffect(()=>{
    const timer = setTimeout(() => {
      setIsFlipped(true);
    }, 5000);
  })

  return (
    <div className="resume">
      <div className={`box ${isFlipped ? 'flip' : ''}`} onClick={handleFlip}>
        <div className='sub_box'>
          <div className='profile_box'>
            <img className="profile_img" src="HariPriya_Profile_img.jpg" alt="Profile" />
          </div>
          <div className="profile_content">
            <h1>Hari Priya Vedala</h1>
            <p>Full Stack Developer</p>
          </div>
        </div>
        <div className='sub_box2'>
          Add the content you want to reveal here 
        </div>
      </div>
    </div>
  );
};

export default Resume;