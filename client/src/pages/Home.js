// client/src/pages/Home.js
import React, { useState, useEffect } from "react";
import "./Home.css";
import heroImage from "../assets/hero-image.jpg";
import studyMaterialIcon from "../assets/study-material.png";
import playlistIcon from "../assets/playlist.png";
import quizIcon from "../assets/quiz.png";
import notesIcon from "../assets/notes.png";
import booksIcon from "../assets/books.png";
import communityIcon from "../assets/community.png";
import { Link } from "react-router-dom";

const Typewriter = ({ phrases }) => {
    const [text, setText] = useState('');
    const [phraseIndex, setPhraseIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(true);

    useEffect(() => {
        const currentPhrase = phrases[phraseIndex % phrases.length];
        let timeout;

        if (isTyping) {
            if (text.length < currentPhrase.length) {
                timeout = setTimeout(() => {
                    setText(currentPhrase.substring(0, text.length + 1));
                }, 100);
            } else {
                timeout = setTimeout(() => setIsTyping(false), 2000);
            }
        } else {
            if (text.length > 0) {
                timeout = setTimeout(() => {
                    setText(text.substring(0, text.length - 1));
                }, 50);
            } else {
                setIsTyping(true);
                setPhraseIndex(phraseIndex + 1);
            }
        }

        return () => clearTimeout(timeout);
    }, [text, phraseIndex, isTyping, phrases]);

    return (
        <span className="typewriter-text">
            {text}
            <span className="blinking-cursor">|</span>
        </span>
    );
};


function Home() {
    return (
        <div className="home-page">



            {/* Hero Section */}
            <header className="hero-section">
                <div className="hero-content">
                    <h1>Master SSC CGL with MYSSC</h1>
                    <p className="hero-subtitle">
                        <Typewriter phrases={[
                            "Comprehensive preparation resources...",
                            "Curated playlists for all subjects...",
                            "Daily practice quizzes and tests...",
                            "Join our vibrant community..."
                        ]} />
                    </p>
                    <div className="hero-buttons">
                        <button className="primary-btn">Get Started</button>
                        <button className="secondary-btn">Explore Resources</button>
                    </div>
                </div>
                <div className="hero-image">
                    <img src={heroImage} alt="Students preparing for SSC CGL" />
                </div>
            </header>





            {/* Features Grid */}
            <section className="features-section">
                <h2 className="section-title">Everything You Need in One Place</h2>
                <div className="features-grid">
                    <div className="feature-card" style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                        gap: '15px',
                        width: '100%',
                        height: '100%',
                        padding: '20px',
                        boxSizing: 'border-box'
                    }}>
                        <img
                            src={studyMaterialIcon}
                            alt="Study Material"
                            style={{
                                height: '300px',
                                width: '300px',
                                objectFit: 'contain',
                                display: 'block'
                            }}
                        />
                        <div style={{ maxWidth: '300px' }}>
                            <h3 style={{ margin: 0 }}>Subject-wise Study Material</h3>
                            <p style={{ margin: '10px 0 0' }}>
                                Comprehensive resources for all SSC<br />CGL subjects
                            </p>
                        </div>
                    </div>

                    <div className="feature-card" style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                        gap: '15px',
                        width: '100%',
                        height: '100%',
                        padding: '20px',
                        boxSizing: 'border-box'
                    }}>
                        <img
                            src={playlistIcon}
                            alt="Playlist"
                            style={{
                                height: '300px',
                                width: '300px',
                                objectFit: 'contain',
                                display: 'block'
                            }}
                        />
                        <div style={{ maxWidth: '300px' }}>
                            <h3 style={{ margin: 0 }}>Curated YouTube Playlists</h3>
                            <p style={{ margin: '10px 0 0' }}>
                                Best video resources organized by topic
                            </p>
                        </div>
                    </div>

                    <div className="feature-card" style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                        gap: '15px',
                        width: '100%',
                        height: '100%',
                        padding: '20px',
                        boxSizing: 'border-box'
                    }}>
                        <img
                            src={quizIcon}
                            alt="Quiz"
                            style={{
                                height: '300px',
                                width: '300px',
                                objectFit: 'contain',
                                display: 'block'
                            }}
                        />
                        <div style={{ maxWidth: '300px' }}>
                            <h3 style={{ margin: 0 }}>Daily Practice Quizzes</h3>
                            <p style={{ margin: '10px 0 0' }}>
                                Test your knowledge with topic-wise quizzes
                            </p>
                        </div>
                    </div>

                    <div className="feature-card" style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                        gap: '15px',
                        width: '100%',
                        height: '100%',
                        padding: '20px',
                        boxSizing: 'border-box'
                    }}>
                        <img
                            src={notesIcon}
                            alt="Handwritten Notes"
                            style={{
                                height: '300px',
                                width: '300px',
                                objectFit: 'contain',
                                display: 'block'
                            }}
                        />
                        <div style={{ maxWidth: '300px' }}>
                            <h3 style={{ margin: 0 }}>Handwritten Notes</h3>
                            <p style={{ margin: '10px 0 0' }}>
                                Downloadable PDF notes from top educators
                            </p>
                        </div>
                    </div>

                    <div className="feature-card" style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                        gap: '15px',
                        width: '100%',
                        height: '100%',
                        padding: '20px',
                        boxSizing: 'border-box'
                    }}>
                        <img
                            src={booksIcon}
                            alt="Book Recommendations"
                            style={{
                                height: '300px',
                                width: '300px',
                                objectFit: 'contain',
                                display: 'block'
                            }}
                        />
                        <div style={{ maxWidth: '300px' }}>
                            <h3 style={{ margin: 0 }}>Book Recommendations</h3>
                            <p style={{ margin: '10px 0 0' }}>
                                Best books for SSC CGL with purchase links
                            </p>
                        </div>
                    </div>

                    <div className="feature-card" style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                        gap: '15px',
                        width: '100%',
                        height: '100%',
                        padding: '20px',
                        boxSizing: 'border-box'
                    }}>
                        <img
                            src={communityIcon}
                            alt="Active Community"
                            style={{
                                height: '300px',
                                width: '300px',
                                objectFit: 'contain',
                                display: 'block'
                            }}
                        />
                        <div style={{ maxWidth: '300px' }}>
                            <h3 style={{ margin: 0 }}>Active Community</h3>
                            <p style={{ margin: '10px 0 0' }}>
                                Connect with fellow aspirants
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Current Affairs Section */}
            <section className="current-affairs-section">
                <div className="section-content">
                    <h2 className="section-title">Daily Current Affairs</h2>
                    <p>
                        Stay updated with specially curated current affairs materials for
                        SSC CGL
                    </p>
                    <button className="primary-btn">View Latest Updates</button>
                </div>
            </section>

            {/* Testimonials */}
            <section className="testimonials-section">
                <h2 className="section-title">What Our Students Say</h2>
                <div className="testimonials-grid">
                    <div className="testimonial-card">
                        <p>
                            "MYSSC's curated playlists saved me hundreds of hours searching for
                            quality content."
                        </p>
                        <div className="student-info">
                            <span className="student-name">Rahul Sharma</span>
                            <span className="student-rank">AIR 42, SSC CGL 2023</span>
                        </div>
                    </div>
                    <div className="testimonial-card">
                        <p>
                            "The handwritten notes are gold! Especially for Quantitative
                            Aptitude."
                        </p>
                        <div className="student-info">
                            <span className="student-name">Priya Patel</span>
                            <span className="student-rank">AIR 87, SSC CGL 2023</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="cta-section">
                <div className="cta-container">
                    <div className="cta-content">
                        <h2 className="cta-title">Ready to Start Your SSC CGL Journey?</h2>
                        <p className="cta-subtitle">Join thousands of aspirants who are already preparing with MYSSC</p>
                        <button className="primary-btn large-btn cta-button">
                            <span className="btn-text">Join Now - It's Free</span>

                            <span className="btn-icon">→</span>
                            <Link to="/signup" className="auth-link signup">Sign Up now </Link>
                        </button>
                        <div className="cta-stats">
                            <div className="stat-item">
                                <span className="stat-number">10,000+</span>
                                <span className="stat-label">Active Users</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">95%</span>
                                <span className="stat-label">Success Rate</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>





    );
}




export default Home;