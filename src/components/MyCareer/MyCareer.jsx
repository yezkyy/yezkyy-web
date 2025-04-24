// src/components/MyCareer.jsx
import React from 'react';
import './MyCareer.css';

const MyCareer = () => {
  const careerData = [
    {
      company: 'Gentlemen88 Company',
      role: 'Full-Stack Developer',
      period: 'Jan 2025 - Present',
      description: 'Developing scalable Laravel-based e-commerce platform with full admin dashboard and real-time analytics.'
    },
    {
      company: 'Kecamatan Muara Jawa',
      role: 'WordPress Developer',
      period: 'Oct 2024 - Feb 2025',
      description: 'Built an informative and responsive WordPress site with custom themes and services integration.'
    },
    {
      company: 'Diskominfo Kukar',
      role: 'ICT Intern',
      period: 'Jan 2022 - Mar 2022',
      description: 'Assisted in app development, hardware troubleshooting, and ICT documentation for local government.'
    },
    {
      company: 'Information System Association',
      role: 'Media & Communication',
      period: 'Feb 2023 - Dec 2024',
      description: 'Handled organizational publications, created digital designs, and managed social media engagement.'
    },
    {
      company: 'BEM KM Universitas Mulawarman',
      role: 'Media & Information',
      period: 'Dec 2024 - Present',
      description: 'Managed media strategies and digital campaigns to promote student initiatives campus-wide.'
    },
    {
      company: 'INSEVENT 2024',
      role: 'Visual & Decoration Team',
      period: 'Jul 2024 - Nov 2024',
      description: 'Designed event visuals and decor, captured event documentation, and ensured thematic coherence.'
    }
  ];

  return (
    <section className="my-career-section" id="career">
      <h2>Career Journey</h2>
      <div className="timeline-grid">
        {careerData.map((job, index) => (
          <div className="timeline-card" key={index} data-aos="fade-up">
            <h3>{job.role}</h3>
            <h4>{job.company}</h4>
            <span className="timeline-period">{job.period}</span>
            <p>{job.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyCareer;