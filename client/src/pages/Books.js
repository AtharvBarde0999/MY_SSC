import React from "react";
import "./Books.css";
import { useNavigate } from 'react-router-dom';

function Books() {
    const navigate = useNavigate();

    return (
        <div className="books-container">
            <h1 className="books-title">SSC CGL Book Resources</h1>

            {/* Add this right after your <h1> title */}
            <section className="book-intro-section">
                <div className="book-intro-content">
                    <h2>Master SSC CGL with Curated Books</h2>
                    <p>Handpicked books and resources from top publishers covering all SSC CGL subjects</p>
                    <div className="book-features">
                        <div className="feature-item">
                            <span className="feature-icon">📚</span>
                            <span>Free & Paid Resources</span>
                        </div>
                        <div className="feature-item">
                            <span className="feature-icon">🎯</span>
                            <span>Tier-Specific Guides</span>
                        </div>
                        <div className="feature-item">
                            <span className="feature-icon">🏆</span>
                            <span>Topper Recommended</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Rest of your existing code remains exactly the same */}
            <section className="free-resources-section">
                <div className="section-header">
                    <h2>📘 Free Learning Resources</h2>
                    <p>High-quality materials to boost your SSC CGL preparation</p>
                </div>

                <div className="resources-container">
                    <div className="pdf-downloads">
                        <h3>Free Book PDFs</h3>
                        <ul className="pdf-list">
                            <li>
                                <a href="/pdfs/english-grammar.pdf" download>
                                    <span className="pdf-icon">📄</span>
                                    English Grammar Book (PDF)
                                </a>
                            </li>
                            <li>
                                <a href="/pdfs/quantitative-aptitude.pdf" download>
                                    <span className="pdf-icon">📄</span>
                                    Quantitative Aptitude Book (PDF)
                                </a>
                            </li>
                            <li>
                                <a href="/pdfs/general-awareness.pdf" download>
                                    <span className="pdf-icon">📄</span>
                                    General Awareness (PDF)
                                </a>
                            </li>
                            <li>
                                <a href="/pdfs/reasoning.pdf" download>
                                    <span className="pdf-icon">📄</span>
                                    Reasoning Practice Book (PDF)
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="notes-cta">
                        <div className="notes-content">
                            <h3>Premium Handwritten Notes</h3>
                            <p>Beautifully crafted notes that simplify complex concepts</p>
                            <button
                                className="notes-button"
                                onClick={() => navigate('/handwritten-notes')}
                            >
                                Explore Notes
                                <span className="arrow-icon">→</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>




            <section className="purchase-books-section">
                <h2>📚 Best SSC CGL Books (Buy Online)</h2>
                <div className="book-cards">
                    <div className="book-card">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/Screenshot 2025-04-10 134030.png`}
                            alt="Reasoning and IQ Book by StudyIQ Publications"
                        />
                        <h3>Reasoning & IQ Book – StudyIQ Publications</h3>
                        <p>Perfect for mastering reasoning concepts for SSC CGL, CHSL, CPO & other government exams.</p>
                        <div className="book-links">
                            <a
                                href="https://www.flipkart.com/reasoning-iq-book-ssc-cgl-chsl-cpo-other-govt-exams-paperback-studyiq-publications/p/itm92ea96efddad0?pid=RBKGBQDWNNARTRQK"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Buy on Flipkart
                            </a>
                        </div>
                    </div>

                    <div className="book-card">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/Screenshot 2025-04-10 133842.png`}
                            alt="SSC English CGL Warrior Book by Prashant Solanki Sir"
                        />
                        <h3>SSC English CGL Warrior – Tier II by Prashant Solanki Sir</h3>
                        <p>Chapterwise best explanation for Tier II English, bilingual format for better understanding.</p>
                        <div className="book-links">
                            <a
                                href="https://www.flipkart.com/ssc-english-cgl-warrior-prashant-solanki-sir-tier-ii-chapterwise-best-explanation-bilingual/p/itm0ed0cb4c2a435?pid=9789358705041&lid=LSTBOK9789358705041QDGHJF"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Buy on Flipkart
                            </a>
                        </div>
                    </div>

                    <div className="book-card">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/Screenshot 2025-04-10 133205.png`}
                            alt="Static GK Book for SSC Exams"
                        />
                        <h3>Static GK Book for SSC CGL, CPO, CHSL, GD, MTS, and Other Govt. Exams</h3>
                        <p>Complete General Knowledge book covering Static GK topics for SSC & other exams.</p>
                        <div className="book-links">
                            <a
                                href="https://www.flipkart.com/static-gk-upsssc-pet-ssc-cgl-cpo-chsl-gd-mts-up-si-constable-lekhpal-jailward-delhi-police-railway-ntpc-group-d-other-exams/p/itmc902cbbfd8ae9?pid=9788193965184&lid=LSTBOK9788193965184GT0E26&marketplace=FLIPKART&q=ssc+cgl+books+++GK+&store=bks&srno=s_1_1"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Buy on Flipkart
                            </a>
                        </div>
                    </div>

                    <div className="book-card">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/advance-maths-book.jpg`}
                            alt="Advance Maths Book for SSC Exams"
                        />
                        <h3>Advance Maths Book for SSC CGL, CHSL, CPO, and Other Govt. Exams</h3>
                        <p>Comprehensive guide covering advanced mathematics topics essential for SSC exams.</p>
                        <div className="book-links">
                            <a
                                href="https://www.flipkart.com/advance-maths-book-ssc-cgl-chsl-cpo-other-govt-exams-english-printed-edition/p/itmc08ce2ef802ef"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Buy on Flipkart
                            </a>
                        </div>
                    </div>

                    <div className="book-card">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/Screenshot 2025-04-10 134446.png`}
                            alt="PW 30 SSC CGL Previous Year Solved Papers"
                        />
                        <h3>PW 30 SSC CGL Tier-1 Previous Year Solved Papers</h3>
                        <p>Includes 30 solved papers to give you complete practice and insight into exam trends.</p>
                        <div className="book-links">
                            <a
                                href="https://www.flipkart.com/pw-30-ssc-cgl-combined-graduate-level-tier-1-previous-year-solved-papers-english/p/itm5250201fa325b?pid=9789368977117"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Buy on Flipkart
                            </a>
                        </div>
                    </div>
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

export default Books;