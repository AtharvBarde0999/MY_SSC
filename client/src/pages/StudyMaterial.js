// client/src/pages/StudyMaterial.js
import React from "react";

const studyMaterials = {
    "Quantitative Aptitude": [
        { topic: "Number System", link: "https://example.com/number-system.pdf" },
        { topic: "Profit and Loss", link: "https://example.com/profit-loss.pdf" }
    ],
    "English": [
        { topic: "Reading Comprehension", link: "https://example.com/rc.pdf" },
        { topic: "Grammar Rules", link: "https://example.com/grammar.pdf" }
    ],
    "General Awareness": [
        { topic: "History", link: "https://example.com/history.pdf" },
        { topic: "Geography", link: "https://example.com/geography.pdf" }
    ],
    "Reasoning": [
        { topic: "Puzzles", link: "https://example.com/puzzles.pdf" },
        { topic: "Series", link: "https://example.com/series.pdf" }
    ]
};

function StudyMaterial() {
    return (
        <div style={{ padding: "20px" }}>
            <h2>Subject-wise Study Material</h2>
            {Object.keys(studyMaterials).map((subject, i) => (
                <div key={i}>
                    <h3>{subject}</h3>
                    <ul>
                        {studyMaterials[subject].map((item, idx) => (
                            <li key={idx}>
                                <strong>{item.topic}:</strong>{" "}
                                <a href={item.link} target="_blank" rel="noopener noreferrer">
                                    Download
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}

export default StudyMaterial;
