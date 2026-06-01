import React from 'react';
import '../styles/Navbar.css';
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
    const navigate = useNavigate();
    const { isAuthenticated, logout, user } = useAuth();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <nav className="navbar">
            <div className="nav-logo">
                <Link to="/">PAU Connect</Link>
            </div>

            <ul className="nav-links">
                
                {isAuthenticated ? (
                    /* --- Logged In State --- */
                    <>
                        <li><Link to="/profile">Profile</Link></li>
                        <li><Link to="/find-jobs">Find Jobs</Link></li>
                        <li><Link to="/post-job">Post a Job</Link></li>
                        <li className="nav-user-label">{user?.fullName || user?.email}</li>
                        <li>
                            <button onClick={handleLogout} className="logout-btn">
                                Log out
                            </button>
                        </li>
                    </>
                ) : (
                    /* --- Logged Out State --- */
                    <>
                        <li><Link to="/login">Login</Link></li>
                        <button 
                        className="Register-btn" 
                        onClick={() => navigate('/register')}
                    >
                        Register
                    </button>
                    </>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;
