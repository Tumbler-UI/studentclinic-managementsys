// DevelopmentTimeline.js
import React from 'react';
import './DevelopmentTimeline.css';

const DevelopmentTimeline = () => {
  const milestones = [
    {
      date: 'Q1 2023',
      title: 'Concept Finalization',
      description: 'Initial sketches and concept designs completed. Core team assembled.',
      image: 'concept.jpg'
    },
    {
      date: 'Q2 2023',
      title: 'Prototype Chassis',
      description: 'First physical prototype chassis constructed. Structural testing initiated.',
      image: 'chassis.jpg'
    },
    {
      date: 'Q3 2023',
      title: 'Battery Integration',
      description: 'Custom battery pack designed and integrated with cooling system.',
      image: 'battery.jpg'
    },
    {
      date: 'Q4 2023',
      title: 'Drive System Testing',
      description: 'Electric motors and transmission successfully tested at 80% of target power.',
      image: 'drivetrain.jpg'
    },
    {
      date: 'Q1 2024',
      title: 'Body Design',
      description: 'Aerodynamic body design finalized using CFD analysis. First full-scale mockup.',
      image: 'body.jpg'
    }
  ];

  return (
    <section id="development" className="timeline-section">
      <h2>Development Journey</h2>
      <div className="timeline">
        {milestones.map((milestone, index) => (
          <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
            <div className="timeline-content">
              <h3>{milestone.title}</h3>
              <p className="timeline-date">{milestone.date}</p>
              <p>{milestone.description}</p>
              <div className="timeline-image">
                <img src={`/images/${milestone.image}`} alt={milestone.title} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DevelopmentTimeline;