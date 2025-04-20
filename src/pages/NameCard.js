import React from 'react';
import HariPriya_Profile_img from '../images/HariPriya_Profile_img.jpg';
import HP_profile_img from '../images/hp_img3_crop3.JPG';
import Avatar from '@mui/material/Avatar';
import Profile_image from '../components/Profile_imageHC/Profile_image';
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from "@mui/icons-material/Link";
import CloudIcon from "@mui/icons-material/Cloud";
import LinkedInIcon from  "@mui/icons-material/LinkedIn";
import CodeIcon from  "@mui/icons-material/Code";



const NameCard = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw', height: '100vh' , marginLeft:0}}>
        <div style={{ textAlign: 'center' }}>
        <div style={{display: 'flex' , flexDirection: 'column' , width:"100%", paddingX:"2rem", paddingY:"2rem", justifyContent: 'center', alignItems: 'center', color:'var(--base-theme-font-color-dark)'}}> 
        <div  style ={{ display: 'flex' , marginY: "2rem" , marginX:"2rem", paddingX:"2rem", paddingY:"2rem", gap:"2rem", justifyContent: 'center', alignItems: 'center'}}>   
        <div style={{display: 'flex' , flexDirection: 'column' , width:"100%", paddingX:"2rem", paddingY:"2rem", justifyContent: 'center', alignItems: 'center'}}> 
            <h3 style={{ display: 'flex' ,fontFamily: "Georgia, serif"  , fontSize: "2.4rem", fontWeight: "bold"}}>
              Hari Priya Vedala
            </h3>
            <p style={{ display: 'flex' , fontFamily: "Georgia, serif"  , fontSize: "1.4rem", fontWeight: "bold"}}>
            Graduate Assistant, UNT CVAD |<br/> MS CS @ UNT Denton TX US |
            <br/> Full Stack Web Developer
            </p>
            <p style={{ display: 'flex', gap:'4rem', color: 'var(--base-theme)'}}>
            <div className='footer-items'>
      <a href= "https://www.linkedin.com/in/haripriyav3/">
        <LinkedInIcon sx={{  color:"var(--base-theme-font-color-dark)", fontSize: 40}}/>

      </a>
      </div>
      <div className='footer-items'>

      <a href= "https://github.com/hpv333">
        <CodeIcon sx={{ color:"var(--base-theme-font-color-dark)",fontSize: 40}}/>
      </a>
      </div>

      <div className='footer-items'>

      <a href= "https://github.com/hpv333">
        <GitHubIcon sx={{ color:"var(--base-theme-font-color-dark)", fontSize: 40}}/>
      </a>
      </div>
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