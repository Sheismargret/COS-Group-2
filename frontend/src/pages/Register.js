import React, { useState } from 'react';

const Register = () => {
    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h2>Register</h2>
            <form style={{ display: 'flex', flexDirection: 'column', width: '300px', margin: '0 auto', gap: '10px' }}>
                <input type="text" placeholder="Full Name" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <input type="password" placeholder="Confirm Password" />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default Register;