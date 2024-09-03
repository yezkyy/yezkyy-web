import React, { useEffect } from 'react';
import './MoreCertifications.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const MoreCertifications = ({ group, data, onBack }) => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <section id="more-certifications">
            <h2 className="section-title">{group} Certifications</h2>
            <button className="back-button" onClick={onBack}>
                Back
            </button>
            <div className="more-certification-items">
                {data.map((cert, index) => (
                    <div key={index} className="more-certification-item" data-aos="fade-up">
                        <img src={cert.image} alt={cert.name} className="more-certification-image" />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default MoreCertifications;