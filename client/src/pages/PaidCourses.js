import React from 'react';
import './PaidCourses.css';

const paidCourses = [
    {
        title: '📚 Full SSC CGL Course',
        thumbnail: '/images/full-ssc-course.jpg',
        description: 'Complete preparation package with 150+ PDFs, 120+ HD video lectures, 50+ quizzes, and doubt clearing sessions.',
    },
    {
        title: '🧮 Maths Masterclass',
        thumbnail: '/images/maths-course.jpg',
        description: 'Advance Maths + Arithmetic concepts explained through 40 PDFs, 30+ video lectures, and 15 practice quizzes.',
    },
    {
        title: '🧠 Reasoning Mastery',
        thumbnail: '/images/reasoning-course.jpg',
        description: 'Shortcut tricks, puzzles, logical reasoning covered via 25 PDFs, 20 videos, and exclusive quizzes.',
    },
    {
        title: '📖 English Booster',
        thumbnail: '/images/english-course.jpg',
        description: 'Grammar rules, comprehension practice, vocabulary boosters: 30 PDFs, 25+ video sessions, quizzes every week!',
    },
    {
        title: '🌍 General Knowledge Capsule',
        thumbnail: '/images/gk-course.jpg',
        description: 'Static GK + Current Affairs combo pack with 35 handpicked PDFs, 15 mini-lectures, and daily MCQs.',
    }
];

const PaidCourses = () => {
    return (
        <div className="paid-courses-page">
            <header className="paid-courses-header">
                <h1>🚀 Our Premium SSC CGL Courses</h1>
                <p>Boost your preparation with our expert-designed paid courses. Affordable. Powerful. Proven!</p>
            </header>

            <div className="paid-courses-grid">
                {paidCourses.map((course, index) => (
                    <div className="paid-course-card" key={index}>
                        <img src={course.thumbnail} alt={course.title} className="paid-course-image" />
                        <h2>{course.title}</h2>
                        <p>{course.description}</p>
                        <button className="buy-now-button">Buy Now</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PaidCourses;
