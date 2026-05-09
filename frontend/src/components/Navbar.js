import React from 'react';
import '../styles/Navbar.css';
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    
    // Check if the user is logged in
    const isAuthenticated = localStorage.getItem('userToken'); 

    const handleLogout = () => {
        localStorage.removeItem('userToken'); // Clear the session
        navigate('/Login'); // Redirect to login page
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
                        <li>
                            <button onClick={handleLogout} className="logout-btn">
                                Log out
                            </button>
                        </li>
                    </>
                ) : (
                    /* --- Logged Out State --- */
                    <>
                        <li><Link to="/Login">Login</Link></li>
                        <button 
                        className="Register-btn" 
                        onClick={() => navigate('/Register')}
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