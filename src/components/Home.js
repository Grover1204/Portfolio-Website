// src/components/Home.js
import React from 'react';
import './Home.css';  // Import CSS file for styling
import Bio from './Bio';
import Skill from './Skill';
import Project from './Project';

function Home() {

    const handleLogoClick = () => {
        const bioSection = document.querySelector('#bio'); // Target the "bio" section
        if (bioSection) {
            bioSection.scrollIntoView({ behavior: 'smooth' });  // Scroll smoothly to Bio section
        }
    };

    // New function to scroll to the Skills section:
    const handleWorkClick = () => {
        const skillSection = document.querySelector('#skills');
        if (skillSection) {
            skillSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="home-container">
            {/* Header */}
            <header className="header">
                <div className="left-section">
                    <a href="#bio">Bio</a>
                    <a href="#skills" onClick={handleWorkClick}>Work</a>
                </div>
                <div className="right-section">
                    <a href="#contact">Contact</a>
                </div>
            </header>

            <div className="background">
                <div className="text-section">
                    <div className="vertical-text">
                        <img src="/quote.png" alt="Transforming Ideas into Reality" className="quote-image" />
                        <h2>- Rahul Modugu</h2>
                    </div>
                </div>
                <img src="/home.png" alt="Home" className="home-image" />
            </div>
            <img
                src="/logo.png"  // Replace with your image path
                alt="Bottom Logo"
                className="bottom-logo"
                onClick={handleLogoClick}  // Trigger the scroll to Bio section
                style={{ cursor: 'pointer' }}  // Ensure it's clickable
            />

            {/* Bio section */}
            <Bio />

            {/* Render the Skill section */}
            <Skill />

            {/* Project Section */}
            <Project />
        </div>
    );
}

export default Home;
