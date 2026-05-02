import React, { useState } from 'react'; 
import '../styles/Register.css';
import { Link, useNavigate } from 'react-router-dom'; // Added useNavigate for redirection

const Login = () => {
    const navigate = useNavigate();
    
    // State to track email and password inputs
    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    });

    // Updates state whenever a user types
    const handleChange = (e) => {
        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would normally validate with a backend
        console.log("Logging in with:", loginData);
        
        // After "login", you could redirect the user to a home or dashboard
        // navigate('/home'); 
    };

    return (
        <div className="auth-wrapper">
            <div className="auth-card">
                <div className="auth-header">
                    <h2>Sign in</h2>
                </div>
                <form className="auth-form" onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label>Email Address</label>
                        <input 
                            type="email" 
                            name="email" // Added name to match state key
                            placeholder="example@pau.edu.ng" 
                            value={loginData.email}
                            onChange={handleChange}
                            required 
                        />
                    </div>
                    <div className="input-group">
                        <label>Password</label>
                        <input 
                            type="password" 
                            name="password" // Added name to match state key
                            placeholder="Enter password" 
                            value={loginData.password}
                            onChange={handleChange}
                            required 
                        />
                    </div>
                    <button type="submit" className="auth-btn">Login</button>
                </form>
                <div className="auth-footer">
                    <p>Don't have an account? <Link to="/register">Create an account</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;