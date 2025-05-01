import React from 'react';
import './AboutSSC.css';
import { useNavigate } from 'react-router-dom';

const AboutSSC = () => {
    const navigate = useNavigate();

    return (
        <div className="about-ssc-container">
            <h1>About SSC & SSC CGL</h1>

            <section className="about-section">
                <h2>🏛️ What is SSC?</h2>
                <p>
                    The Staff Selection Commission (SSC) is a central government organization established in 1975 to recruit staff for various posts in ministries and departments of the Government of India.
                </p>
                <ul>
                    <li>Conducts exams like SSC CGL, CHSL, MTS, GD, CPO, JE, etc.</li>
                    <li>Recruits for Group B and C posts.</li>
                </ul>
            </section>

            <section className="about-section">
                <h2>📘 What is SSC CGL?</h2>
                <p>
                    The SSC Combined Graduate Level (CGL) exam is a competitive exam for graduates, offering jobs in various central government departments.
                </p>
                <ul>
                    <li>Minimum Qualification: Graduate</li>
                    <li>Jobs in ministries, tax departments, and other central organizations</li>
                    <li>Computer-based and descriptive exam stages</li>
                </ul>
            </section>

            <section className="about-section">
                <h2>🧩 SSC CGL Exam Pattern</h2>
                <ol>
                    <li><strong>Tier I:</strong> Preliminary (Reasoning, Awareness, Maths, English)</li>
                    <li><strong>Tier II:</strong> Mains (Quant, English, Statistics, Finance & Economics)</li>
                    <li><strong>Tier III:</strong> Descriptive (Essay, Letter Writing)</li>
                    <li><strong>Tier IV:</strong> Skill Test / Document Verification</li>
                </ol>
            </section>

            <section className="about-section">
                <h2>🧾 Eligibility</h2>
                <ul>
                    <li>Education: Bachelor's Degree</li>
                    <li>Age: 18–32 years (varies by post)</li>
                    <li>Citizenship: Indian</li>
                </ul>
            </section>

            <section className="about-section">
                <h2>💼 Popular Posts</h2>
                <ul>
                    <li>Income Tax Inspector</li>
                    <li>Assistant Section Officer (ASO)</li>
                    <li>Sub Inspector (CBI, NIA)</li>
                    <li>Junior Statistical Officer (JSO)</li>
                    <li>Auditor, Accountant, UDC, Tax Assistant</li>
                </ul>
            </section>

            <section className="about-section">
                <h2>📊 Salary Structure</h2>
                <p>
                    SSC CGL offers a salary range of ₹25,500 to ₹44,900 per month (excluding allowances). Benefits include DA, HRA, TA, and pension.
                </p>
            </section>

            <section className="about-section">
                <h2>📅 Exam Timeline</h2>
                <ul>
                    <li>Notification: March–April</li>
                    <li>Tier I: July–August</li>
                    <li>Tier II: September–October</li>
                    <li>Final Result: December–January</li>
                </ul>
            </section>

            <section className="about-section">
                <h2>✨ Why SSC CGL?</h2>
                <ul>
                    <li>Secure government job with growth</li>
                    <li>Work-life balance</li>
                    <li>Nationwide service opportunities</li>
                </ul>
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

export default AboutSSC;
