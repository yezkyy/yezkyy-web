import React from 'react';
import './Contact.css';
import { FaTiktok, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
    const socialLinks = [
        { href: 'https://www.tiktok.com/@yezkyy', icon: <FaTiktok />, name: 'Tiktok' },
        { href: 'https://www.instagram.com/yezkyy', icon: <FaInstagram />, name: 'Instagram' },
        { href: 'https://www.github.com/yezkyy', icon: <FaGithub />, name: 'Github' },
        { href: 'https://www.linkedin.com/in/muhammad-rizky-setiawan-2819ba28a', icon: <FaLinkedin />, name: 'LinkedIn' }
    ];

    return (
        <section id="contact" className="contact">
            <h2 className="section-title">Contact Me</h2>
            <div className="contact-content">
                {socialLinks.map((link, index) => (
                    <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" className="contact-link" data-aos="fade-up">
                        {link.icon}
                        <span>{link.name}</span>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default Contact;
