// src/components/Bio.js
import React from 'react';
import './Bio.css';  // Import CSS file for styling

function Bio() {

    // Function to scroll to the Projects section (assumes target has id="work")
    const handleProjectsClick = () => {
        const projectSection = document.querySelector('#work');
        if (projectSection) {
            projectSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Function to scroll to the Skills section (assumes target has id="skills")
    const handleSkillsClick = () => {
        const skillsSection = document.querySelector('#skills');
        if (skillsSection) {
            skillsSection.scrollIntoView({ behavior: 'smooth' });
        }
    };



    return (
        <div id="bio" className="bio-container">

            {/* Block 3: Container (row) holding Block 1 and Block 2 side by side */}
            <div className="block3">

                {/* Block 1: Profile Section */}
                <div className="profile-section">
                    <div className="profile-image-container">
                        {/* Profile Image (Big Circle) */}
                        <img src="/profile.png" alt="Profile" className="profile-image" />
                    </div>

                    <div className="social-icons">
                        {/* Small circular icons for Facebook, Instagram, GitHub */}
                        <button className="social-icon-btn">
                            <img src="/icon_f.png" alt="Facebook" className="social-icon" />
                        </button>
                        <button className="social-icon-btn">
                            <img src="/icon_l.png" alt="Linkedin" className="social-icon" />
                        </button>
                        <button className="social-icon-btn">
                            <img src="/icon_g.png" alt="GitHub" className="social-icon" />
                        </button>
                    </div>
                </div>

                {/* Block 2: Introduction Section */}
                <div className="introduction-section">
                    <h2>Rahul Modugu in a Nutshell</h2>
                    <h3>ML Engineer</h3>
                    <p>
                        I am a Master's student in Data Science at University of Essex, with a keen
                        interest in applying data-driven solutions to real-world problems. I have a
                        strong background in Electrical, Electronics and Communications Engineering,
                        having graduated from National Institute of Technology Karnataka in 2021.
                    </p>
                    <p>
                        I have gained hands-on experience in Flutter Development, working on two
                        short-term projects for Deep Nucleus and Remote Care, where I developed and
                        deployed mobile applications using Flutter and Firebase. I have also acquired
                        skills in Python, Machine Learning, and Android Development, through various
                        courses, online platforms, and a research project on autonomous driving robot
                        sign detection at IIT Kanpur. I am looking for summer internships in data science
                        and machine learning, where I can leverage my skills and learn from industry
                        experts.
                    </p>
                    <h3>Education and Certifications:</h3>
                    <ul>
                        <li>Bachelor of Science in Electronics Science (Specialization Master in Machine Learning and Artificial Intelligence)</li>
                        <li>Certified in TensorFlow Development</li>
                        <li>Ongoing participation in professional workshops and online courses related to advanced machine learning technologies and techniques</li>
                    </ul>
                </div>

            </div>
            {/* End of Block 3 */}

            {/* Block 4 - Circular Animation */}
            <div className="block-four" style={{
                backgroundImage: `url('/background_bio.jpg')`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
            }}>
                <h3>Learn more about :</h3>

                <div className="circle-container">
                    <button className="circle-box" onClick={handleProjectsClick}>
                        <span className="circle-content">Projects</span>
                    </button>
                    <button className="circle-box" onClick={handleSkillsClick}>
                        <span className="circle-content">Skills</span>
                    </button>
                    <button className="circle-box"><span className="circle-content">Git Repo</span></button>
                    <button className="circle-box"><span className="circle-content">Resume</span></button>
                    <button className="circle-box"><span className="circle-content">Contact</span></button>
                </div>


            </div>


        </div>
    );
}

export default Bio;
