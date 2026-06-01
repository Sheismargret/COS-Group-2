import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: '4rem 1.5rem' }}>
      <h1>About PAU Connect</h1>
      <p style={{ lineHeight: 1.7 }}>
        PAU Connect is a job board and hiring platform for students, graduates, and employers.
        It lets users register, log in, search jobs, post jobs, and manage a profile in one place.
      </p>
      <p style={{ lineHeight: 1.7 }}>
        If you are deploying this project, the frontend connects to the Render backend through
        the `REACT_APP_API_URL` environment variable.
      </p>
      <Link to="/" className="primary-btn" style={{ display: 'inline-block', marginTop: '1rem' }}>
        Back Home
      </Link>
    </div>
  );
};

export default About;
