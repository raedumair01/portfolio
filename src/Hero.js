import React, { useState } from 'react';
import './Hero.css';
import osmanImage from './osman.jpg'; // Adjust the path as needed
import { FaLaptopCode, FaPaintBrush, FaMobileAlt, FaBrain, FaLaptop, FaGithub, FaLinkedin, FaInstagram, FaBars } from 'react-icons/fa';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="home">
      <nav className="navbar">
        <div className="nav-left">
          <h1 className="nav-title">Raed bin Umair</h1>
        </div>
        <div className={`nav-right ${menuOpen ? 'open' : ''}`}>
          <a href="/" className="nav-link">Home</a>
          <a href="/portfolio" className="nav-link">Portfolio</a>
          <a href="#" className="nav-link">About</a>
          <a href="#" className="nav-link contact-link">Contact</a>
        </div>
        <FaBars className="hamburger-menu" onClick={toggleMenu} />
      </nav>

      <header className="header-section">
        <h1 className="main-title">Raed bin Umair</h1>
        <h2 className="main-subtitle">Mobile Application Developer</h2>
        <p className="sub-title">
          I am a dedicated Mobile Application Developer with a Bachelor's degree from Riphah International University, specializing in mobile app
          development, the MERN stack, AI, and machine learning.
          <br /><br />
          I commit code to <a href="https://github.com/raedumair01" target="_blank" rel="noopener noreferrer">Github</a>,
          and connect professionally on <a href="https://www.linkedin.com/in/raed-bin-umair-b0bb22183" target="_blank" rel="noopener noreferrer">LinkedIn</a>.
        </p>
      </header>

      <div className="creative-skills">
        <h2>Creative Skills</h2>
        <p>As a web designer, I possess a diverse set of skills and expertise to bring your web design visions to life.</p>
        <div className="skills-cards">
          <div className="skill-card">
            <FaLaptopCode className="skill-icon" />
            <h3>Backend Development</h3>
            <p>I have done backend development in MongoDB and Node.js.</p>
          </div>
          <div className="skill-card">
            <FaPaintBrush className="skill-icon" />
            <h3>User Interface - UI Design</h3>
            <p>Creating visually appealing and intuitive user interfaces.</p>
          </div>
          <div className="skill-card">
            <FaMobileAlt className="skill-icon" />
            <h3>Mobile App Development</h3>
            <p>Creating apps using Flutter and React Native.</p>
          </div>
          <div className="skill-card">
            <FaBrain className="skill-icon" />
            <h3>AI Development</h3>
            <p>Developing AI models for detection and classification of images.</p>
          </div>
          <div className="skill-card">
            <FaLaptop className="skill-icon" />
            <h3>Frontend Development</h3>
            <p>Working on React.js, HTML, CSS, and JavaScript.</p>
          </div>
        </div>
      </div>

      <div className="image-frame">
        <img src={osmanImage} alt="Osman" className="framed-image" />
      </div>

     

      <div className="chat-section">
        <h2>What are you working on?</h2>
        <p>Let's have a conversation! I'd love to hear about what you're working on.</p>
        <button className="chat-button">Chat</button>
      </div>
      <footer class="footer">
  <div class="footer-container">
    
    <div class="footer-buttons">
      <button class="footer-button">
       <a href='https://www.linkedin.com/in/raed-bin-umair-b0bb22183'> <i class="fab fa-linkedin footer-button-icon" aria-hidden="true" ></i></a>
      </button>
      <button class="footer-button">
    <a href='https://github.com/raedumair01'> <i class="fab fa-github footer-button-icon" aria-hidden="true"></i></a>   
      </button>
    </div>
    
    <div class="footer-text">© 2024 Raed bin Umair Portfolio. All rights reserved.</div>
    
    <div class="footer-contact">
      <div class="footer-item">
        <i class="fas fa-phone footer-button-icon1" aria-hidden="true"></i>
        <span class="footer-contact-text1">+92302438927</span>
      </div>
      <div class="footer-item1">
        <i class="fas fa-envelope footer-button-icon2" aria-hidden="true"></i>
        <span class="footer-contact-text">
  <a href="mailto:raedumair01@gmail.com">raedumair01@gmail.com</a>
</span>

      </div>
    </div>
   
  </div>
</footer>


      
    </div>
  );
}

export default App;
