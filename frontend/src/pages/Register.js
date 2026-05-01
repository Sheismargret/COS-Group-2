import '../styles/Register.css';
/*import React, { useState } from 'react';*/
import { Link } from 'react-router-dom';

const Register = () => {
    return (
    <div className="auth-wrapper">
        <div className="auth-card">
            <div className="auth-header">
                <h2>Create Account</h2>
            </div>
            <form className="auth-form">
                <div className="input-group">
                    <label>Full Name</label>
                    <input type="text" placeholder="Enter your full name" required />
                </div>
                <div className="input-group">
                    <label>Email Address</label>
                    <input type="email" placeholder="example@pau.edu.ng" required />
                </div>
                <div className="input-group">
                    <label>Password</label>
                    <input type="password" placeholder="Create a password" required />
                </div>
                <div className="input-group">
                    <label>Confirm Password</label>
                    <input type="password" placeholder="Repeat your password" required />
                </div>
                <button type="submit" className="auth-btn">Sign Up</button>
            </form>
            <div className="auth-footer">
                <p>Already have an account? <Link to="/Login">Login here</Link></p>
            </div>
        </div>
    </div>
);
};

export default Register;