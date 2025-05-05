import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo">
                <span className="logo-my">My</span>
                <span className="logo-ssc">SSC</span>
            </div>
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/playlists">Playlists</Link></li>
                <li><Link to="/notes">Notes</Link></li>
                <li><Link to="/quizzes">Quizzes</Link></li>
                <li><Link to="/books">Books</Link></li>
                <li><Link to="/current-affairs">Current Affairs</Link></li>
                <li><Link to="/community">Community</Link></li>

                <li><Link to="/cutoff">Cutoff</Link></li>
                <li><Link to="/about-ssc">About SSC</Link></li>
                <li><Link to="/paidcourses">Paid Courses</Link></li> {/* 🔥 New Paid Courses Button Added */}
            </ul>
            <div className="auth-buttons">
                <Link to="/login" className="auth-link login">Login</Link>
                <Link to="/signup" className="auth-link signup">Sign Up</Link>
            </div>
        </nav>
    );
}

export default Navbar;
