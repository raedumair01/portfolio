import React from 'react';
import './Skills.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGit } from 'react-icons/fa';

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>
      <div className="skills-grid">
        <div className="skill-item">
          <FaHtml5 className="icon" />
          <p>HTML5</p>
        </div>
        <div className="skill-item">
          <FaCss3Alt className="icon" />
          <p>CSS3</p>
        </div>
        <div className="skill-item">
          <FaJs className="icon" />
          <p>JavaScript</p>
        </div>
        <div className="skill-item">
          <FaReact className="icon" />
          <p>React</p>
        </div>
        <div className="skill-item">
          <FaNodeJs className="icon" />
          <p>Node.js</p>
        </div>
        <div className="skill-item">
          <FaGit className="icon" />
          <p>Git</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
