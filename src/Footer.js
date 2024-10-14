import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <FaGithub />
        <FaLinkedin />
      </div>
      <p>© 2024 Your Name. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
