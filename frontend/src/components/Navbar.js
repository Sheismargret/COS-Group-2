import React from 'react';
import '../styles/Navbar.css';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-logo">
                <Link to="/">PAU Connect</Link>
            </div>

            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Login">Login</Link></li>
                <li> <Link to="/Register" className="btn-link">Register</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;