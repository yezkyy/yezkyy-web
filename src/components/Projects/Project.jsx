import React from 'react';
import './Project.css';

const Projects = () => {
    const projectsData = [
        {
            name: 'Let`s Ask (AI Web)',
            link: 'https://lets-ask.vercel.app/',
            image: '/assets/Projects/1.png'
        },
        {
            name: 'SMA Wahidiyah Samarinda',
            link: 'https://smawahidiyahsmr.com/',
            image: '/assets/Projects/2.png'
        },
    ];

    return (
        <section id="projects">
            <h2 className="section-title">Projects</h2>
            <div className="project-items">
                {projectsData.map((project, index) => (
                    <div key={index} className="project-item" data-aos="fade-up">
                        <img src={project.image} alt={project.name} className="project-image" />
                        <h3 className="project-name">{project.name}</h3>
                        <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">{project.link}</a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
