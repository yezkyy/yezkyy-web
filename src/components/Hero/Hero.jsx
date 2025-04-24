import React, { useEffect, useState } from 'react';
import './Hero.css';
import { FaArrowDown } from 'react-icons/fa';

const Hero = () => {
    const [bgLoaded, setBgLoaded] = useState(false);

    useEffect(() => {
        const img = new Image();
        img.src = process.env.PUBLIC_URL + '/assets/bg.png';
        img.onload = () => setBgLoaded(true);
    }, []);    

    return (
        <section className="hero">
            <div className="hero-background"></div>
            <div className="hero-overlay"></div>
            <div className="hero-content">
                <h1 className="hero-title">Welcome to My Portfolio</h1>
                <p className="hero-subtitle">I am Rizky, an Information Systems student and Fullstack Developer, Contact me with any questions.</p>
                <div className="hero-buttons">
                    <a href="#about" className="hero-button primary">
                        More About Me
                    </a>
                    <a href="#contact" className="hero-button secondary">
                        Contact Me
                    </a>
                </div>
                <div className="scroll-down">
                    <span>Scroll Down</span>
                    <FaArrowDown className="scroll-down-icon" />
                </div>
            </div>
        </section>
    );
};

export default Hero;