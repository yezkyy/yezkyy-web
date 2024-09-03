import React from 'react';
import './About.css';

const AboutMe = () => {
    return (
        <section id="about" className="about-me">
            <div className="about-content" data-aos="fade-right">
                <h2 className="about-title" data-aos="fade-up">About Me</h2>
                <p className="about-description" data-aos="fade-up">
                    Hello! I'm a passionate Fullstack developer and Networking administration.
                    I have experience in various technologies and enjoy learning new things every day. My goal is to craft 
                    seamless digital experiences that make a difference.
                </p>
                <p className="about-description" data-aos="fade-up">
                    In my free time, I love exploring the latest web technologies, working on side projects, and contributing to open-source communities.
                    I believe in the power of collaboration and continuous improvement.
                </p>
            </div>
            <div className="about-image" data-aos="fade-left">
                <img src="/src/assets/me.jpg" alt="Profile" />
            </div>
        </section>
    );
};

export default AboutMe;
