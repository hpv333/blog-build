import React from "react";
import "./Profile_image.css"; // Create a separate CSS file for styles
import HP_profile_img from '../../images/hp_img3_crop3.JPG';
import HP_profile2_img from '../../images/IMG_2136.jpg';
const Profile_image = () => {
  return (
    <div className="profile-container">
      <div className="background-shape"></div>
      <div className="gold-border"></div>
      <div className="profile-frame">
        {/* Replace with your image URL */}
        <img src={HP_profile2_img} alt="Profile" className="profile-image" />
      </div>
    </div>
  );
};

export default Profile_image;