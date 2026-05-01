import '../styles/Register.css';
/*import React, { useState } from 'react';*/
import { Link } from 'react-router-dom';

const Login = () => {
    return (
    <div className="auth-wrapper">
        <div className="auth-card">
            <div className="auth-header">
                <h2>Sign in</h2>
            </div>
            <form className="auth-form">
                <div className="input-group">
                    <label>Email Address</label>
                    <input type="email" placeholder="example@pau.edu.ng" required />
                </div>
                <div className="input-group">
                    <label>Password</label>
                    <input type="password" placeholder="Create a password" required />
                </div>
                <button type="submit" className="auth-btn">Login</button>
            </form>
            <div className="auth-footer">
                <p>Don't have an account? <Link to="/Register">Create an account</Link></p>
            </div>
        </div>
    </div>
);
};

export default Login;