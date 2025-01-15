// src/components/Skill.js
import React from 'react';
import './Skill.css';  // Make sure the filename and path are correct

function Skill() {
    return (
        <div id="skills" className="skill-container">
            <h2>My Skills</h2>
            <h4>Below are some of my skills, and I'm always looking to learn more.</h4>

            {/* First container with 3 blocks */}
            <div className="skills-list">
                <div className="skill-item">
                    <div className="skill-image-container">
                        <img
                            src="/skill/skill1.png"
                            alt="Skill 1"
                            className="skill-image"
                        />
                    </div>
                    <h3>Computer Vision,</h3>
                    <h3>OpenCV/OpenGL</h3>
                    <p>I have significant research experience in the field of computer vision, including Computer Vision Tools for Locating Nitrogren-Vacancy Centers. I've also created dozens of programs using libraries such as OpenCV and OpenGL – these include my object tracker, collage generator, game engine, ray casting simulation, and many more.</p>
                </div>
                <div className="skill-item">
                    <div className="skill-image-container">
                        <img
                            src="/skill/skill2.png"
                            alt="Skill 2"
                            className="skill-image"
                        />
                    </div>
                    <h3>Machine Learning, Artificial Intelligence</h3>
                    <p>I've worked on many projects involving machine learning, and am currently a machine learning research assistant with the MIT Media Lab. Previous research includes Self-Driving Microscopy: Bayesian Inference for Localization and Autonomous Navigation and the model in Utility Programs for Nitrogen-Vacancy Center Identiﬁcation and Initialization Analysis. Relevant personal projects include my neural model library, NN trainer library, and NN experiments. I have experience using Tensorflow, PyTorch, and Keras.</p>
                </div>
                <div className="skill-item">
                    <div className="skill-image-container">
                        <img
                            src="/skill/skill3.png"
                            alt="Skill 3"
                            className="skill-image"
                        />
                    </div>
                    <h3>Flutter</h3>
                    <p>•	Designed and developed cross-platform applications for Android, iOS, and web using Flutter, focusing on healthcare and utility solutions.
                        •	Integrated cloud services like Firebase and Azure, along with advanced features such as Google Maps, language translation, and real-time alerts.
                        •	Enhanced app performance and user experience, leading to a 25% increase in user engagement and retention.
                    </p>
                </div>
            </div>

            {/* Second container placed down below */}
            <div className="skills-list second-container">
                <div className="skill-item">
                    <div className="skill-image-container">
                        <img
                            src="/skill/skill4.png"
                            alt="Skill 4"
                            className="skill-image"
                        />
                    </div>
                    <h3>Python</h3>
                    <p>Over the past 3 years, I've had extensive experience with Python in the course of my research, classwork, and personal projects. Some of my personal projects in Python include my Monte Carlo Localization library, smartwatch-controlled presentation tool, financial graph tool, neural model library, NN trainer library, and many more.

                    </p>
                </div>
                <div className="skill-item">
                    <div className="skill-image-container">
                        <img
                            src="/skill/skill5.png"
                            alt="Skill 5"
                            className="skill-image"
                        />
                    </div>
                    <h3>JavaScript</h3>
                    <p>With a combined 7 years of experience from personal projects and work at Diameter Health, I often develop full-stack applications, consisting of HTML/JavaScript/CSS, various web libraries, and a Node.js/MongoDB backend.</p>
                </div>
                <div className="skill-item">
                    <div className="skill-image-container">
                        <img
                            src="/skill/skill6.png"
                            alt="Skill 6"
                            className="skill-image"
                        />
                    </div>
                    <h3>MongoDB</h3>
                    <p>With many years of experience using MongoDB for backends, many of my projects utilize Node's MongoDB driver. Working for Diameter Health, I was responsible for using MongoDB databases efficiently and creating services that allowed for easy interaction between web apps and databases.</p>
                </div>
            </div>
        </div>
    );
}

export default Skill;
