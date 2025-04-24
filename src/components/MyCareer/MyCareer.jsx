// src/components/MyCareer.jsx
import React from 'react';
import './MyCareer.css';

const MyCareer = () => {
  const careerData = [
    {
      company: 'Diskominfo Kukar',
      role: 'Information and Communication Technology (ICT)',
      period: 'Jan 2022 - Mar 2022',
      description: 'Apprenticeship - Developed administrative networking and technical support in DISKOMINFO Kutai Kartanegara.',
    },
    {
      company: 'Mulawarman University',
      role: 'Information System Student',
      period: 'Aug 2023 - Now',
      description: 'Pursuing a Bachelor\'s degree in Information Systems at Mulawarman University.',
    },
    {
      company: 'BEM KM Unmul',
      role: 'Communication, Publication, and Documentation Division',
      period: 'Nov 2024 - Now',
      description: 'Handled publicity, content creation, and documentation for university-wide student government activities.',
    },
    {
      company: 'Gentlemen88 Company',
      role: 'Full-Stack Developer',
      period: 'Jan 2025 - Present',
      description: 'Developing scalable Laravel-based e-commerce platform with full admin dashboard and real-time analytics.',
    },
    {
      company: 'Kecamatan Muara Jawa',
      role: 'WordPress Developer',
      period: 'Oct 2024 - Feb 2025',
      description: 'Built an informative and responsive WordPress site with custom themes and services integration.',
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