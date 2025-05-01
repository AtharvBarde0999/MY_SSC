// Footer.js
import React from "react";
import "./footer.css";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaTelegram, FaBook, FaGraduationCap, FaBuilding, FaHeadset } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

function Footer() {
    return (
        <footer className="main-footer">
            <div className="footer-container">
                <div className="footer-headings-row">
                    <div className="footer-brand">
                        <div className="heading-with-icon">
                            <FaHeadset className="heading-icon" />
                            <h3 className="footer-logo">MYSSC</h3>
                        </div>
                        <p className="footer-tagline">Your complete SSC CGL preparation platform</p>
                        <div className="footer-newsletter">
                            <input type="email" placeholder="Your email" />
                            <button>Subscribe</button>
                        </div>
                    </div>

                    <div className="footer-links-group">
                        <div className="heading-with-icon">
                            <FaBook className="heading-icon" />
                            <h4 className="link-group-title">Study Resources</h4>
                        </div>
                        <ul className="footer-nav">
                            <li><a href="/notes">Handwritten Notes</a></li>
                            <li><a href="/playlists">Video Playlists</a></li>
                            <li><a href="/quizzes">Practice Quizzes</a></li>
                            <li><a href="/current-affairs">Current Affairs</a></li>
                        </ul>
                    </div>

                    <div className="footer-links-group">
                        <div className="heading-with-icon">
                            <FaGraduationCap className="heading-icon" />
                            <h4 className="link-group-title">Courses</h4>
                        </div>
                        <ul className="footer-nav">
                            <li><a href="/courses/quant">Quantitative Aptitude</a></li>
                            <li><a href="/courses/english">English Language</a></li>
                            <li><a href="/courses/reasoning">Logical Reasoning</a></li>
                            <li><a href="/courses/gk">General Awareness</a></li>
                        </ul>
                    </div>

                    <div className="footer-links-group">
                        <div className="heading-with-icon">
                            <FaBuilding className="heading-icon" />
                            <h4 className="link-group-title">Company</h4>
                        </div>
                        <ul className="footer-nav">
                            <li><a href="/about">About Us</a></li>
                            <li><a href="/contact">Contact</a></li>
                            <li><a href="/privacy">Privacy Policy</a></li>
                            <li><a href="/terms">Terms of Service</a></li>
                        </ul>
                    </div>

                    <div className="footer-contact-group">
                        <div className="heading-with-icon">
                            <FaHeadset className="heading-icon" />
                            <h4 className="link-group-title">Connect With Us</h4>
                        </div>
                        <div className="social-links">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                <FaFacebook className="social-icon" />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                                <FaTwitter className="social-icon" />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <FaInstagram className="social-icon" />
                            </a>
                            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                                <FaYoutube className="social-icon" />
                            </a>
                            <a href="https://telegram.org" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
                                <FaTelegram className="social-icon" />
                            </a>
                        </div>
                        <div className="contact-info">
                            <p><MdEmail /> contact@myssc.com</p>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="footer-copyright">
                        © {new Date().getFullYear()} MYSSC. All rights reserved.
                    </div>
                    <div className="footer-credits">
                        Made with ❤️ for SSC aspirants
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;