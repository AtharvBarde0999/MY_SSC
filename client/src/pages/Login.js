// client/src/pages/Login.js
import React, { useState } from "react";
import "./login.css";

function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Login data:", formData);
        alert("Login successful!");
    };

    return (
        <div className="login-main">
            <div className="login-content">
                <div className="login-left">
                    <h1>Welcome Back to MySSC!</h1>
                    <p>
                        📚 Continue your journey towards success with us.<br />
                        Unlock all your saved notes, courses, quizzes, and get access to the latest updates.<br /><br />
                        🌟 Benefits of Logging In:<br />
                        - Track your progress<br />
                        - Personalized recommendations<br />
                        - Special discounts on courses<br />
                        - Live doubt-solving sessions<br />
                        - Daily quizzes and current affairs<br /><br />
                        Let's achieve greatness together! 🚀
                    </p>
                </div>

                <div className="login-right">
                    <form className="login-form" onSubmit={handleSubmit}>
                        <h2>Login to Your Account</h2>
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
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />

                        <button type="submit">Login 🚀</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
