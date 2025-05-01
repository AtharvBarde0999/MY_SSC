// client/src/pages/Courses.js
import React from "react";
import "./Courses.css"; // We'll create this next

const courses = [
    {
        title: "Complete SSC CGL Preparation",
        description: "Covers Quant, Reasoning, English, and GK.",
        link: "https://www.youtube.com/playlist?list=YOUR_PLAYLIST_ID"
    },
    {
        title: "Quantitative Aptitude Mastery",
        description: "All math topics explained in detail.",
        link: "https://www.youtube.com/playlist?list=YOUR_PLAYLIST_ID"
    },
    {
        title: "Reasoning Tricks for SSC",
        description: "Fast tricks and shortcuts for reasoning.",
        link: "https://www.youtube.com/playlist?list=YOUR_PLAYLIST_ID"
    }
];

function Courses() {
    return (
        <div className="courses-container">
            <h2>Our Courses</h2>
            <div className="course-list">
                {courses.map((course, index) => (
                    <div key={index} className="course-card">
                        <h3>{course.title}</h3>
                        <p>{course.description}</p>
                        <a href={course.link} target="_blank" rel="noopener noreferrer">
                            Watch on YouTube
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Courses;
