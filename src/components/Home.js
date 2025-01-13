// src/components/Home.js
import React from 'react';
import './Home.css';  // Import CSS file for styling
import Bio from './Bio';

function Home() {

    const handleLogoClick = () => {
        const bioSection = document.querySelector('#bio'); // Target the "bio" section
        if (bioSection) {
            bioSection.scrollIntoView({ behavior: 'smooth' });  // Scroll smoothly to Bio section
        }
    };


    return (
        <div className="home-container">
            {/* Header */}
            <header className="header">
                <div className="left-section">
                    <a href="#bio">Bio</a>
                    <a href="#work">Work</a>
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
                onClick={handleLogoClick}  // Trigger the scroll and hide logo on click
                style={{ cursor: 'pointer' }}  // Ensure it's clickable
            />


            {/* Bio section */}
            <Bio />
        </div>
    );
}

export default Home;








//       {/* Scroll down logo */}
//       <img
//       src="/logo.png"
//       alt="Scroll down"
//       className="scroll-logo"
//       onClick={handleScroll}  // Add the scroll functionality on click
//   />