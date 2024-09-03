import React, { useState } from 'react';
import './Certifications.css';
import MoreCertifications from './MoreCertifications';
import AOS from 'aos';
import 'aos/dist/aos.css';

const certificationsData = {
    Web: [
        { name: 'My Certifications Web', image: '/assets/web/1.png' },
        { name: 'Belajar Dasar Pemograman Javascript', image: '/assets/web/2.png' },
    ],
    Cloud: [
        { name: 'My Certifications Cloud Computing', image: '/assets/cloud/1.png' },
    ],
    Networking: [
        { name: 'My Certifications Networking', image: '/assets/networking/1.jpg' },
        { name: 'HCIA-Datacom', image: '/assets/networking/2.png' },
        { name: 'HCIA-Security', image: '/assets/networking/3.png' },
        { name: 'HCIA-WLAN', image: '/assets/networking/4.png' },
    ],
    'Machine Learning': [
        { name: 'My Certifications Machine Learning', image: '/assets/ml/1.png' },
        { name: 'Coursera Google Python', image: '/assets/ml/2.JPG' },
        { name: 'Memulai Pemograman dengan Python', image: '/assets/ml/3.png' },
    ],
};

const Certifications = () => {
    const [showMore, setShowMore] = useState(false);
    const [selectedGroup, setSelectedGroup] = useState('');

    const handleMoreClick = (group) => {
        setSelectedGroup(group);
        setShowMore(true);
    };

    const handleBackClick = () => {
        setShowMore(false);
        setSelectedGroup('');
    };

    if (showMore) {
        return <MoreCertifications group={selectedGroup} data={certificationsData[selectedGroup]} onBack={handleBackClick} />;
    }

    return (
        <section id="certifications">
            <h2 className="section-title">Certifications</h2>
            <div className="certification-groups">
                {Object.keys(certificationsData).map((group) => (
                    <div key={group} className="certification-group" data-aos="fade-up">
                        <div className="certification-item-blur" onClick={() => handleMoreClick(group)}>
                            <img src={certificationsData[group][0].image} alt={certificationsData[group][0].name} />
                            <div className="certification-info">
                                <h3 className="certification-group-title">{group}</h3>
                                <p>{certificationsData[group][0].name}</p>
                                <button>
                                    More
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Certifications;