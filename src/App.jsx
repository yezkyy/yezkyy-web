import React, { useEffect } from 'react';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Cursor from './components/Cursor/Cursor';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import MySkills from './components/MySkills/MySkills';
import MyCareer from './components/MyCareer/MyCareer';
import Certifications from './components/Certifications/Certifications';
import Achievements from './components/Achievements/Achievements'
import Projects from './components/Projects/Project'
import Contact from './components/Contact/Contact'

const App = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div>
            <Cursor />
            <Navbar />
            <Hero />
            <About />
            <MySkills />
            <MyCareer />
            <Certifications />
            <Achievements />
            <Projects />
            <Contact />
        </div>
    );
};

export default App;