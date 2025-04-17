import React from 'react';
import HariPriya_Profile_img from '../images/HariPriya_Profile_img.jpg';
import HP_profile_img from '../images/hp_img3_crop3.JPG';
import Avatar from '@mui/material/Avatar';
import Profile_image from '../components/Profile_imageHC/Profile_image';

const NameCard = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw', height: '50vh', backgroundColor:"var(--base-theme-light)" }}>
        <div style={{ textAlign: 'center' }}>
        <div style={{display: 'flex' , flexDirection: 'column' , width:"100%", paddingX:"2rem", paddingY:"2rem", justifyContent: 'center', alignItems: 'center', color:'var(--base-theme-font-color-dark)'}}> 
        <div  style ={{ display: 'flex' , marginY: "2rem" , marginX:"2rem", paddingX:"2rem", paddingY:"2rem", gap:"2rem", justifyContent: 'center', alignItems: 'center', backgroundColor:"var(--base-theme-light)"}}>   
        <div style={{display: 'flex' , flexDirection: 'column' , width:"100%", paddingX:"2rem", paddingY:"2rem", justifyContent: 'center', alignItems: 'center'}}> 
            <h3 style={{ display: 'flex' ,fontFamily: "Georgia, serif"  , fontSize: "2.4rem", fontWeight: "bold"}}>
              Hari Priya Vedala
            </h3>
            <p style={{ display: 'flex' , fontFamily: "Georgia, serif"  , fontSize: "1.4rem", fontWeight: "bold"}}>
            Graduate Assistant, UNT CVAD |<br/> MS CS @ UNT Denton TX US |
            <br/> Full Stack Web Developer
            </p>
        </div>
        <Profile_image/>
        {/* <Avatar alt="HP Sharp" src={HP_profile_img} sx={{display: 'flex' ,height:"30rem", width:"30rem"}}/> */}
        </div>
        </div>
        </div>
        </div>
    );
    }
export default NameCard;