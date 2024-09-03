import React from 'react';
import './Achievements.css';

const Achievements = () => {
    const achievementsData = [
        {
            image: '/assets/achievements/1.png',
            name: '2nd Winner LKS Cloud Computing'
        },
        // Tambahkan prestasi lainnya di sini
    ];

    return (
        <section id="achievements">
            <h2 className="section-title">Achievements</h2>
            <div className="achievement-items">
                {achievementsData.map((achievement, index) => (
                    <div key={index} className="achievement-item" data-aos="fade-up">
                        <img src={achievement.image} alt={achievement.name} className="achievement-image" />
                        <p className="achievement-name">{achievement.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Achievements;