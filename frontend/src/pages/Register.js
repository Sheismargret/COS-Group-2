import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Added for seamless navigation
import '../styles/Register.css';

const Register = () => {
    // State to keep track of user input
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    // Function to handle input changes
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your logic here for what happens when the form is submitted
        console.log("Registration Data:", formData);
    };

    return (
        <div className="auth-wrapper">
            <div className="auth-card">
                <div className="auth-header">
                    <h2>Create Account</h2>
                    <p>Join the group project and start collaborating.</p>
                </div>
                <form className="auth-form" onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label>Full Name</label>
                        <input 
                            type="text" 
                            name="fullName"
                            placeholder="Enter your full name" 
                            value={formData.fullName}
                            onChange={handleChange}
                            required 
                        />
                    </div>
                    <div className="input-group">
                        <label>Email Address</label>
                        <input 
                            type="email" 
                            name="email"
                            placeholder="example@pau.edu.ng" 
                            value={formData.email}
                            onChange={handleChange}
                            required 
                        />
                    </div>
                    <div className="input-group">
                        <label>Password</label>
                        <input 
                            type="password" 
                            name="password"
                            placeholder="Create a password" 
                            value={formData.password}
                            onChange={handleChange}
                            required 
                        />
                    </div>
                    <div className="input-group">
                        <label>Confirm Password</label>
                        <input 
                            type="password" 
                            name="confirmPassword"
                            placeholder="Repeat your password" 
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required 
                        />
                    </div>
                    <button type="submit" className="auth-btn">Sign Up</button>
                </form>
                <div className="auth-footer">
                    <p>Already have an account? <Link to="/login">Login here</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;