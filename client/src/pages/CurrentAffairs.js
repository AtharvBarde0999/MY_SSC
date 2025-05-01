import React from "react";
import "./CurrentAffairs.css";
import { useNavigate } from 'react-router-dom';

function CurrentAffairs() {
    const navigate = useNavigate();

    // Sample data for current affairs
    const currentAffairsData = {
        "2025": ["January", "February", "March"],
        "2024": ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"],
        "2023": ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"]
    };

    return (
        <div className="current-affairs-container">
            {/* Sky Blue + Red Intro Section */}
            <section className="ca-intro-section">
                <div className="intro-content">
                    <h1>Current Affairs for SSC CGL</h1>
                    <p>Stay updated with monthly current affairs to ace the General Awareness section</p>
                    <div className="intro-features">
                        <div className="feature-item">
                            <span>📰</span> Comprehensive Coverage
                        </div>
                        <div className="feature-item">
                            <span>📅</span> Month-wise Organization
                        </div>
                        <div className="feature-item">
                            <span>🔍</span> Exam-focused Content
                        </div>
                    </div>
                </div>
            </section>

            {/* Orange + Green Current Affairs Sections */}
            {Object.entries(currentAffairsData).map(([year, months]) => (
                <section key={year} className="year-section">
                    <h2 className="year-heading">{year} Current Affairs</h2>
                    <div className="months-grid">
                        {months.map(month => (
                            <div
                                key={`${year}-${month}`}
                                className="month-card"
                                onClick={() => navigate(`/current-affairs/${year}/${month.toLowerCase()}`)}
                            >
                                {month}
                            </div>
                        ))}
                    </div>
                </section>
            ))}

            {/* Navigation Section */}
            <section className="ca-navigation">
                <h2>Explore More Resources</h2>
                <div className="nav-buttons">
                    <button onClick={() => navigate('/quizzes')}>Quizzes</button>
                    <button onClick={() => navigate('/books')}>Books</button>
                    <button onClick={() => navigate('/notes')}>Notes</button>
                </div>
            </section>
        </div>
    );
}

export default CurrentAffairs;