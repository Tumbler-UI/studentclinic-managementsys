// TechnologyShowcase.js
import React from 'react';
import './TechnologyShowcase.css';

const TechnologyShowcase = () => {
  const technologies = [
    {
      name: 'Battery System',
      description: 'Proprietary 800V architecture with liquid cooling enables ultra-fast charging (10-80% in 15 minutes) and extended cycle life.',
      icon: 'battery-icon.png'
    },
    {
      name: 'Electric Drivetrain',
      description: 'Dual permanent magnet synchronous motors delivering combined 450kW with torque vectoring for exceptional handling.',
      icon: 'motor-icon.png'
    },
    {
      name: 'Vehicle Architecture',
      description: 'Modular skateboard platform with integrated crash structures and battery protection system.',
      icon: 'chassis-icon.png'
    },
    {
      name: 'Thermal Management',
      description: 'Unified thermal system manages battery, motor, and cabin temperatures for optimal performance in all conditions.',
      icon: 'thermal-icon.png'
    }
  ];

  return (
    <section id="technology" className="tech-section">
      <h2>Core Technologies</h2>
      <div className="tech-grid">
        {technologies.map((tech, index) => (
          <div key={index} className="tech-card">
            <div className="tech-icon">
              <img src={`/images/${tech.icon}`} alt={tech.name} />
            </div>
            <h3>{tech.name}</h3>
            <p>{tech.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologyShowcase;