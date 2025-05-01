// src/pages/Notes.js
import React from 'react';
import './Notes.css';
import { useNavigate } from 'react-router-dom';

const Notes = () => {
    const navigate = useNavigate();
    return (
        <div className="notes-page">
            {/* Header Section */}
            <section className="notes-header">
                <h1>📘 SSC CGL Handwritten Notes</h1>
                <p>
                    The SSC Combined Graduate Level (CGL) exam is one of the most prestigious competitive exams in India.
                    Cracking SSC CGL opens doors to government job opportunities in various departments, offering job security,
                    prestige, and good salary benefits.
                </p>
            </section>

            {/* Study Tips Section */}
            <section className="study-tips">
                <h2>📚 How to Study from These Notes</h2>
                <ul>
                    <li><strong>Structured Learning:</strong> These notes are arranged in a logical sequence from basics to advanced concepts.</li>
                    <li><strong>Easy to Revise:</strong> Use these as revision notes before exams for quick brush-up.</li>
                    <li><strong>Use Highlighters:</strong> Highlight important keywords or formulas for quick visual memory recall.</li>
                    <li><strong>Practice:</strong> Apply concepts using quizzes and previous year questions right after reading the notes.</li>
                    <li><strong>Time Management:</strong> Focus on weaker areas and use these notes to cover more in less time.</li>
                </ul>
            </section>

            {/* Notes Section */}
            <section className="notes-section">
                <h2>🗂️ Subject-Wise Notes</h2>
                <div className="notes-grid">
                    {/* Add download buttons for each subject */}
                    <a href="/pdfs/english.pdf" download>📄 English Notes</a>
                    <a href="/pdfs/maths.pdf" download>📄 Maths Notes</a>
                    <a href="/pdfs/reasoning.pdf" download>📄 Reasoning Notes</a>
                    <a href="/pdfs/gk.pdf" download>📄 General Knowledge Notes</a>
                </div>

                <h2>📌 Topic-Wise Notes</h2>
                <div className="notes-grid">
                    <a href="/pdfs/percentages.pdf" download>📄 Percentages</a>
                    <a href="/pdfs/syllogism.pdf" download>📄 Syllogism</a>
                    <a href="/pdfs/history.pdf" download>📄 Modern History</a>
                </div>

                <h2>💡 Easy Tricks to Learn</h2>
                <div className="notes-grid">
                    <a href="/pdfs/tricks-maths.pdf" download>📄 Maths Shortcuts</a>
                    <a href="/pdfs/tricks-gk.pdf" download>📄 GK Mnemonics</a>
                </div>

                <h2>🧮 Important Formulas</h2>
                <div className="notes-grid">
                    <a href="/pdfs/formulas-maths.pdf" download>📄 Maths Formulas</a>
                    <a href="/pdfs/formulas-physics.pdf" download>📄 Physics Formulas</a>
                </div>

                <h2>📰 Current Affairs Notes</h2>
                <div className="notes-grid">
                    <a href="/pdfs/current-jan.pdf" download>📄 January 2025</a>
                    <a href="/pdfs/current-feb.pdf" download>📄 February 2025</a>
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
};

export default Notes;
