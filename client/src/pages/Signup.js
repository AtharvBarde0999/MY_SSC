// client/src/pages/Signup.js
import React, { useState } from "react";
import "./signup.css";

function Signup() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Signup data:", formData);
        alert("Signup successful!");
    };

    return (
        <div className="signup-main">
            <div className="signup-content">
                <div className="signup-left">
                    <h1>Welcome to MySSC!</h1>
                    <p>
                        Unlock your potential with us. 🚀<br />
                        Get access to top-notch SSC CGL notes, expert-curated quizzes, high-quality courses, and real exam-like practice materials.
                        <br /><br />
                        📚 <strong>What you get:</strong><br />
                        - 1000+ PDFs covering all subjects<br />
                        - 500+ Video Lectures<br />
                        - Daily Current Affairs<br />
                        - Live Doubt Sessions<br />
                        - Personalized Study Plan
                        <br /><br />
                        Join the fastest-growing SSC community today and make your dream job a reality! 🎯
                    </p>
                </div>

                <div className="signup-right">
                    <form className="signup-form" onSubmit={handleSubmit}>
                        <h2>Create Your Account</h2>
                        <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />

                        <input
                            type="password"
                            name="password"
                            placeholder="Create Password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />

                        <button type="submit">Sign Up Now 🚀</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Signup;
