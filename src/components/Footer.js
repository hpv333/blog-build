import React from 'react'
import '../App.scss';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import CodeIcon from '@mui/icons-material/Code';
import './Footer.css';
const Footer = () => {
  return (
    <div className="footer" style={{ backgroundColor: 'var(--base-theme)',}}>
      <div className="footer_social">

    
       <div className='footer-items' style={{paddingBottom:"0.3rem"}}> 
        Social Media Links

       </div>
      <div className='footer-items'>
      <a href= "https://www.linkedin.com/in/haripriyav3/">
        <LinkedInIcon sx={{color:"white",  fontSize: 40}}/>

      </a>
      </div>
      <div className='footer-items'>

      <a href= "https://github.com/hpv333">
        <CodeIcon sx={{color:"white",  fontSize: 40}}/>
      </a>
      </div>

      <div className='footer-items'>

      <a href= "https://github.com/hpv333">
        <GitHubIcon sx={{color:"white",  fontSize: 40}}/>
      </a>
      </div>
      </div>
    </div>
  )
}

export default Footer