import React from "react";
import "./Cutoff.css";
import { useNavigate } from 'react-router-dom';

function Cutoff() {
    const navigate = useNavigate();
    const cutoffData = [
        {
            year: "2021",
            data: [
                { category: "UR", tier1: "140-150", final: "440-470" },
                { category: "OBC", tier1: "135-145", final: "400-430" },
                { category: "SC", tier1: "120-130", final: "350-380" },
                { category: "ST", tier1: "110-120", final: "320-350" },
            ],
        },
        {
            year: "2022",
            data: [
                { category: "UR", tier1: "145-155", final: "450-480" },
                { category: "OBC", tier1: "140-150", final: "410-440" },
                { category: "SC", tier1: "125-135", final: "360-390" },
                { category: "ST", tier1: "115-125", final: "330-360" },
            ],
        },
        {
            year: "2023",
            data: [
                { category: "UR", tier1: "150-160", final: "460-490" },
                { category: "OBC", tier1: "145-155", final: "420-450" },
                { category: "SC", tier1: "130-140", final: "370-400" },
                { category: "ST", tier1: "120-130", final: "340-370" },
            ],
        },
        {
            year: "2024 (Expected)",
            data: [
                { category: "UR", tier1: "155-165", final: "470-500" },
                { category: "OBC", tier1: "150-160", final: "430-460" },
                { category: "SC", tier1: "135-145", final: "380-410" },
                { category: "ST", tier1: "125-135", final: "350-380" },
            ],
        },
        {
            year: "2025 (Predicted)",
            data: [
                { category: "UR", tier1: "160-170", final: "480-510" },
                { category: "OBC", tier1: "155-165", final: "440-470" },
                { category: "SC", tier1: "140-150", final: "390-420" },
                { category: "ST", tier1: "130-140", final: "360-390" },
            ],
        },
    ];

    return (

        <div className="cutoff-page">
            <h1>SSC CGL Year-wise Cutoffs</h1>

            <h2> <p className="cutoff-intro">
                The SSC CGL cutoff marks are the minimum scores required to qualify for the next stage of the selection process. These cutoffs are decided based on various factors such as the difficulty level of the exam, number of vacancies, and candidates’ performance. Below are the Tier-I and Tier-II cutoffs for SSC CGL from 2021 to 2025 (predicted), categorized by UR, OBC, SC, and ST.
            </p>
            </h2>


            {cutoffData.map((cutoff, index) => (
                <div key={index} className="cutoff-table-container">
                    <h2>SSC CGL {cutoff.year} Cutoff</h2>
                    <table className="cutoff-table">
                        <thead>
                            <tr>
                                <th>Category</th>
                                <th>Tier-I Cutoff</th>
                                <th>Tier-I + Tier-II Final Cutoff</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cutoff.data.map((row, i) => (
                                <tr key={i}>
                                    <td>{row.category}</td>
                                    <td>{row.tier1}</td>
                                    <td>{row.final}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>


            ))}

            <div className="cutoff-intro">
                <h2>🔑 Key Notes:</h2>
                <ul className="cutoff-list">
                    <li><strong>Tier-I Cutoff:</strong> Minimum marks (out of 200) to qualify for Tier-II.</li>
                    <li><strong>Tier-II Cutoff:</strong> Combined score (Tier-I + Tier-II) out of 700-900 (varies by post).</li>
                    <li><strong>* 2024 & 2025 cutoffs:</strong> Estimated based on past trends (competition level & vacancies).</li>
                    <li><strong>Higher Posts (e.g., AAO, Inspector):</strong> Cutoffs are usually 10-30 marks higher than the general range.</li>
                </ul>
            </div>
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

export default Cutoff;


