import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container bg-base-theme">
      <div className="footer-inner">
        <div className="footer-section">
          <span className="footer-label">Connect</span>
          <a
            href="https://www.linkedin.com/in/haripriyav3/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            <LinkedInIcon sx={{ fontSize: 24 }} />
            <span>LinkedIn</span>
          </a>
        </div>

        <div className="footer-divider" />

        <div className="footer-section">
          <span className="footer-label">Enterprise Projects</span>
          <a
            href="https://github.com/hpv333"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            <GitHubIcon sx={{ fontSize: 24 }} />
            <span>github.com/hpv333</span>
          </a>
        </div>

        <div className="footer-divider" />

        <div className="footer-section">
          <span className="footer-label">Vibe Coded Projects</span>
          <a
            href="https://github.com/codeflux-ai"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            <GitHubIcon sx={{ fontSize: 24 }} />
            <span>github.com/codeflux-ai</span>
          </a>
        </div>
      </div>

      <div className="footer-copyright">
        &copy; {new Date().getFullYear()} Hari Priya Vedala
      </div>
    </footer>
  );
};

export default Footer;
