// src/components/MySkills.jsx
import React, { useEffect } from 'react';
import { Parallax } from 'react-parallax';
import {
  FaDatabase, FaAws, FaReact, FaNodeJs, FaHtml5, FaCss3Alt,
  FaPython, FaJsSquare, FaDocker, FaMicrosoft, FaGoogle,
  FaCuttlefish
} from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './MySkills.css';

const MySkills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Parallax strength={500}>
      <div className="my-skills-section" id="skills">
        <div className="skills-content">
          <h2>My Skills</h2>

          <div className="skills-category">
            <h3>Frontend</h3>
            <div className="skills-icons">
              <div className="skill" data-aos="fade-up">
                <FaJsSquare size={60} color="#F0DB4F" />
                <p>JavaScript</p>
              </div>
              <div className="skill" data-aos="fade-up" data-aos-delay="100">
                <FaReact size={60} color="#61DBFB" />
                <p>React</p>
              </div>
              <div className="skill" data-aos="fade-up" data-aos-delay="200">
                <FaHtml5 size={60} color="#E34C26" />
                <p>HTML5</p>
              </div>
              <div className="skill" data-aos="fade-up" data-aos-delay="300">
                <FaCss3Alt size={60} color="#264de4" />
                <p>CSS3</p>
              </div>
            </div>
          </div>

          <div className="skills-category">
            <h3>Backend</h3>
            <div className="skills-icons">
              <div className="skill" data-aos="fade-up">
                <FaNodeJs size={60} color="#68A063" />
                <p>Node.js</p>
              </div>
              <div className="skill" data-aos="fade-up" data-aos-delay="100">
                <FaPython size={60} color="#306998" />
                <p>Python</p>
              </div>
              <div className="skill" data-aos="fade-up" data-aos-delay="200">
                <FaCuttlefish size={60} color="#00599C" />
                <p>C++</p>
              </div>
            </div>
          </div>

          <div className="skills-category">
            <h3>Database</h3>
            <div className="skills-icons">
              <div className="skill" data-aos="fade-up">
                <FaDatabase size={60} color="#F29111" />
                <p>SQL</p>
              </div>
              <div className="skill" data-aos="fade-up" data-aos-delay="100">
                <FaDatabase size={60} color="#4DB33D" />
                <p>MongoDB</p>
              </div>
            </div>
          </div>

          <div className="skills-category">
            <h3>Cloud Computing</h3>
            <div className="skills-icons">
              <div className="skill" data-aos="fade-up">
                <FaAws size={60} color="#FF9900" />
                <p>AWS</p>
              </div>
              <div className="skill" data-aos="fade-up" data-aos-delay="100">
                <FaMicrosoft size={60} color="#0078D4" />
                <p>Azure</p>
              </div>
              <div className="skill" data-aos="fade-up" data-aos-delay="200">
                <FaGoogle size={60} color="#4285F4" />
                <p>Google Cloud</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default MySkills;