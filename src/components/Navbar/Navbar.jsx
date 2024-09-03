import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleSmoothScroll = (e) => {
        e.preventDefault();
        const targetHref = e.currentTarget.getAttribute('href');
        let targetElement;

        if (targetHref === '#hero') {
            targetElement = document.getElementsByClassName('hero')[0];
        } else {
            const targetId = targetHref.substring(1);
            targetElement = document.getElementById(targetId);
        }

        if (targetElement) {
            const offsetTop = targetElement.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth',
            });
            setIsMobileMenuOpen(false); 
        }
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <a href="/">YEZKYY</a>
            </div>
            <button className="navbar-toggle" onClick={toggleMobileMenu}>
                <span className="navbar-toggle-icon"></span>
            </button>
            <ul className={`navbar-links ${isMobileMenuOpen ? 'open' : ''}`}>
                <li><a href="#hero" onClick={handleSmoothScroll}>Home</a></li>
                <li><a href="#about" onClick={handleSmoothScroll}>About</a></li>
                <li><a href="#projects" onClick={handleSmoothScroll}>Projects</a></li>
                <li><a href="#contact" onClick={handleSmoothScroll}>Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;