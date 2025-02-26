// src/components/MyCareer.jsx
import React from 'react';
import './MyCareer.css';

const MyCareer = () => {
  const careerData = [
    {
      company: 'Diskominfo Kukar',
      role: 'Information and Communication Technology (ICT)',
      period: 'Jan 2022 - Mar 2022',
      description: 'Apprenticeship Developed administrative networking in DISKOMINFO Kutai Kartanegara.',
    },
    {
      company: 'Information System',
      role: 'Mulawarman University ',
      period: 'Aug 2023 - Now',
      description: 'Student at Mulawarman University Information Systems.',
    },
    {
      company: 'INFORSA',
      role: 'Organization',
      period: 'Feb 2023 - Now',
      description: 'Participated in organization Information Systems (INFORSA).',
    },
    {
      company: 'BEM KM Unmul',
      role: 'Organization',
      period: 'Nov 2024 - Now',
      description: 'Participated in organization University of Mulawarman (BEM KM Unmul).',
    },
  ];

  return (
    <section className="my-career-section" id="career">
      <h2>My Career</h2>
      <div className="timeline">
        {careerData.map((job, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-icon">
              <span className="dot"></span>
            </div>
            <div className="timeline-content" data-aos="fade-up">
              <h3>{job.role}</h3>
              <h4>{job.company}</h4>
              <span className="timeline-period">{job.period}</span>
              <p>{job.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyCareer;