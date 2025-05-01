// Quizzes.js
import React from "react";
import "./Quizzes.css";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

function Quizzes() {
    const navigate = useNavigate();
    return (
        <div className="quizzes-container">
            <h1 className="quizzes-title">SSC CGL Practice Quizzes</h1>
            <section className="quiz-intro-section">
                <div className="intro-content">
                    <h1>Boost Your SSC CGL Prep with Quizzes</h1>
                    <p>Practice quizzes help identify weak areas and improve speed & accuracy</p>
                    <div className="quiz-benefits">
                        <span className="benefit-item">⚡ Speed Building</span>
                        <span className="benefit-item">🎯 Exam Pattern</span>
                        <span className="benefit-item">📊 Performance Tracking</span>
                    </div>
                </div>
            </section>






            <section className="quiz-section">
                <h2>📗 Topic-wise Mini Quizzes</h2>
                <p>Quick topic-wise quizzes to strengthen your weak areas.</p>
                <div className="quiz-grid">
                    {Array.from({ length: 15 }, (_, i) => (
                        <Link key={i} to={`/quiz/topicwise/${i + 1}`} className="quiz-card">
                            Topic Quiz {i + 1}
                        </Link>
                    ))}
                </div>
            </section>


            <section className="quiz-section">
                <h2>📘 Subject-wise Quizzes</h2>
                <p>Practice quizzes for each major subject with 10 different sets per subject.</p>
                <div className="quiz-grid">
                    {Array.from({ length: 10 }, (_, i) => (
                        <Link key={i} to={`/quiz/subjectwise/${i + 1}`} className="quiz-card">
                            Subject Quiz {i + 1}
                        </Link>
                    ))}
                </div>
            </section>




            <section className="quiz-section">
                <h2>📙 Full-Length Mock Tests</h2>
                <p>Simulate real exam environment with full-length mock tests.</p>
                <div className="quiz-grid">
                    {[1, 2].map((num) => (
                        <Link key={num} to={`/quiz/fulltest/${num}`} className="quiz-card">
                            Full Test {num}
                        </Link>
                    ))}
                </div>
            </section>

            <section className="about-buttons">
                <h2>🔗 Explore More</h2>
                <div className="button-group">
                    <button onClick={() => navigate('/cutoff')}>Cutoff</button>
                    <button onClick={() => navigate('/playlists')}>Playlist</button>
                    <button onClick={() => navigate('/quizzes')}>Quizzes</button>
                    <button onClick={() => navigate('/books')}>Books</button>
                    <button onClick={() => navigate('/notes')}>Notes</button>
                    <button onClick={() => navigate('/currentaffairs')}>Current Affairs</button>
                </div>
            </section>
        </div>
    );
}

export default Quizzes;
