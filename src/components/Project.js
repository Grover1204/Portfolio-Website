// src/components/Project.js
import React, { useState } from 'react';
import './Project.css';

function Project() {
    const [selectedProject, setSelectedProject] = useState(null);

    // Project Data
    const container1Projects = [
        {
            title: "Eye Gaze Estimation",
            subtitle: "Understanding where we look",
            description: "Eye gaze estimation involves predicting the point of gaze or the direction in which a person is looking based on eye images.",
            skill_background: "/background_bio.jpg",
            details: `
            Facial Emotion Recognition (FER) is a machine learning project aimed at identifying human emotions such as happiness, sadness, anger, surprise, and more from facial expressions. This project is designed to analyze facial features and classify emotions using computer vision and deep learning techniques.

Implementation Approach:

Data Collection:

Utilized public datasets like FER-2013 and CK+ for diverse facial expression data.
Pre-processed the images to standardize dimensions and grayscale conversion for consistency.
Preprocessing:

Applied face detection using OpenCV and Dlib for isolating facial regions.
Data augmentation techniques such as rotation, flipping, and cropping were used to enhance model generalization.
Model Architecture:

Built a Convolutional Neural Network (CNN) with multiple layers for feature extraction and classification.
Experimented with transfer learning using pre-trained models like VGG16 and ResNet for improved accuracy.
Training and Optimization:

Implemented the model using TensorFlow and Keras frameworks.
Optimized with Adam optimizer and categorical cross-entropy loss function.
Used batch normalization and dropout to prevent overfitting.
Evaluation:

Evaluated model performance using accuracy, precision, recall, and F1-score.
Implemented k-fold cross-validation for robust performance metrics.
Deployment and Integration:

Deployed the model as a web application using Flask for real-time emotion detection via webcam input.
Integrated the model into a user-friendly interface for seamless interaction.


Facial Emotion Recognition (FER) is a machine learning project aimed at identifying human emotions such as happiness, sadness, anger, surprise, and more from facial expressions. This project is designed to analyze facial features and classify emotions using computer vision and deep learning techniques.

Implementation Approach:

Data Collection:

Utilized public datasets like FER-2013 and CK+ for diverse facial expression data.
Pre-processed the images to standardize dimensions and grayscale conversion for consistency.
Preprocessing:

Applied face detection using OpenCV and Dlib for isolating facial regions.
Data augmentation techniques such as rotation, flipping, and cropping were used to enhance model generalization.
Model Architecture:

Built a Convolutional Neural Network (CNN) with multiple layers for feature extraction and classification.
Experimented with transfer learning using pre-trained models like VGG16 and ResNet for improved accuracy.
Training and Optimization:

Implemented the model using TensorFlow and Keras frameworks.
Optimized with Adam optimizer and categorical cross-entropy loss function.
Used batch normalization and dropout to prevent overfitting.
Evaluation:

Evaluated model performance using accuracy, precision, recall, and F1-score.
Implemented k-fold cross-validation for robust performance metrics.
Deployment and Integration:

Deployed the model as a web application using Flask for real-time emotion detection via webcam input.
Integrated the model into a user-friendly interface for seamless interaction.
            `,
            githubLink: "https://github.com/example/eye-gaze-estimation",
            extraImages: ["/gaze1.jpg", "/gaze2.jpg"]
        },
        {
            title: "Facial Emotion Recognition",
            subtitle: "Decoding human emotions",
            description: "Facial Emotion Recognition (FER) is a deep learning project that predicts emotions from facial expressions.",
            skill_background: "/background_bio.jpg",
            details: "Using datasets like FER-2013, the model was trained with CNNs for high accuracy.",
            githubLink: "https://github.com/example/facial-emotion-recognition",
        },
        {
            title: "Wild-Fire Prediction",
            subtitle: "Predicting disasters early",
            description: "Machine learning model for wildfire prediction based on climate data.",
            skill_background: "/background_bio.jpg",
            details: "This project uses logistic regression and decision trees to predict wildfire occurrences.",
            githubLink: "https://github.com/example/wildfire-prediction"
        }
    ];

    const container2Projects = [
        {
            title: "Vehicle Detection",
            subtitle: "Detecting vehicles in real-time",
            description: "A deep learning project focused on detecting and classifying vehicles on roads.",
            skill_background: "/background_bio.jpg",
            details: "More details about Project Four.",
            githubLink: "https://github.com/example/eye-gaze-estimation",
            extraImages: ["/gaze1.jpg", "/gaze2.jpg"]
        },
        {
            title: "Hand Written Image Detection",
            subtitle: "Recognizing handwritten text",
            description: "A CNN-based approach for recognizing handwritten digits and letters.",
            skill_background: "/background_bio.jpg",
            details: "More details about Project Five.",
            githubLink: "https://github.com/example/eye-gaze-estimation",
            extraImages: ["/gaze1.jpg", "/gaze2.jpg"]
        },
        {
            title: "HR Employee Analysis",
            subtitle: "HR Analytics with ML",
            description: "Machine learning models for predicting employee retention and performance.",
            skill_background: "/background_bio.jpg",
            details: "More details about Project Six.",
            githubLink: "https://github.com/example/eye-gaze-estimation",
            extraImages: ["/gaze1.jpg", "/gaze2.jpg"]
        }
    ];

    const container3Projects = [
        {
            title: "Stock-Price Prediction",
            subtitle: "Forecasting financial markets",
            description: "Time-series forecasting using LSTM models for predicting stock prices.",
            skill_background: "/background_bio.jpg",
            details: "More details about Project Seven.",
            githubLink: "https://github.com/example/eye-gaze-estimation",
            extraImages: ["/gaze1.jpg", "/gaze2.jpg"]
        },
        {
            title: "WhatsApp Static Website",
            subtitle: "Frontend project",
            description: "A clone of WhatsApp web interface using modern web technologies.",
            skill_background: "/background_bio.jpg",
            details: "More details about Project Eight.",
            githubLink: "https://github.com/example/eye-gaze-estimation",
            extraImages: ["/gaze1.jpg", "/gaze2.jpg"]
        },
        {
            title: "Flutter Firebase Logins",
            subtitle: "Mobile Authentication",
            description: "A Flutter project for Firebase-based authentication.",
            skill_background: "/background_bio.jpg",
            details: "More details about Project Nine.",
            githubLink: "https://github.com/example/eye-gaze-estimation",
            extraImages: ["/gaze1.jpg", "/gaze2.jpg"]
        }
    ];

    const container4Projects = [
        {
            title: "Random Coin-Picker App",
            subtitle: "Decision-making app",
            description: "A fun project for randomly selecting a decision by flipping a coin.",
            skill_background: "/background_bio.jpg",
            details: "More details about Project Ten.",
            githubLink: "https://github.com/example/eye-gaze-estimation",
            extraImages: ["/gaze1.jpg", "/gaze2.jpg"]
        },
        {
            title: "Health Monitoring",
            subtitle: "Tracking health stats",
            description: "A web app for tracking health metrics and data visualization.",
            skill_background: "/background_bio.jpg",
            details: "More details about Project Eleven.",
            githubLink: "https://github.com/example/eye-gaze-estimation",
            extraImages: ["/gaze1.jpg", "/gaze2.jpg"]
        },
        {
            title: "Instagram Stealth Mode",
            subtitle: "Privacy enhancement",
            description: "A stealth mode feature for private Instagram usage.",
            skill_background: "/background_bio.jpg",
            details: "More details about Project Twelve.",
            githubLink: "https://github.com/example/eye-gaze-estimation",
            extraImages: ["/gaze1.jpg", "/gaze2.jpg"]
        },
        {
            title: "Autonomous Mobile Robot",
            subtitle: "Robotics project",
            description: "An autonomous robot built for navigation and obstacle avoidance.",
            skill_background: "/background_bio.jpg",
            details: "More details about Project Thirteen.",
            githubLink: "https://github.com/example/eye-gaze-estimation",
            extraImages: ["/gaze1.jpg", "/gaze2.jpg"]
        }
    ];

    // Pop-up Handlers
    const openPopup = (project) => setSelectedProject(project);
    const closePopup = () => setSelectedProject(null);

    // Reusable Component for Containers
    const ProjectContainer = ({ projects }) => (
        <div className="project-list">
            {projects.map((project, index) => (
                <div
                    key={index}
                    className="project-item"
                    style={{ backgroundImage: `url(${project.skill_background})` }}
                    onClick={() => openPopup(project)}
                >
                    <div className="project-content">
                        <h3 className="project-title">{project.title}</h3>
                        <h4 className="project-subtitle">{project.subtitle}</h4>
                        <p className="project-description">{project.description}</p>
                        <button className="primary-button">Know More &gt;&gt;</button>
                    </div>
                </div>
            ))}
        </div>
    );

    return (
        <div id="work" className="project-container">
            <h1>Personal Projects</h1>
            <h3>Here you can see some of the projects I've done on my own time.</h3>

            {/* Updated Container Layouts with Consistent Design */}
            <ProjectContainer projects={container1Projects} />
            <ProjectContainer projects={container2Projects} />
            <ProjectContainer projects={container3Projects} />
            <ProjectContainer projects={container4Projects} />













            {selectedProject && (
                <div className="popup-overlay" onClick={closePopup}>
                    <div
                        className="popup-box"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button in the Top Right */}
                        <button className="close-button-top-right" onClick={closePopup}>X</button>

                        {/* Title, Subtitle, and Description */}
                        <h2>{selectedProject.title}</h2>
                        <h4>{selectedProject.subtitle}</h4>
                        <p>{selectedProject.details}</p>

                        {/* Image Display */}
                        <img
                            src={selectedProject.skill_background}
                            alt={selectedProject.title}
                            className="popup-image"
                        />

                        {/* GitHub Link (Conditionally Rendered) */}
                        {selectedProject.githubLink && (
                            <p>
                                <a
                                    href={selectedProject.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="github-link"
                                >
                                    View on GitHub
                                </a>
                            </p>
                        )}

                        {/* Close Button at the Bottom */}
                        <button className="primary-button" onClick={closePopup}>Close</button>
                    </div>
                </div>
            )}







        </div>
    );
}

export default Project;