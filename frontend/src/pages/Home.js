
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="home-content">
      {/* Hero Section */}
      <div className="hero-section">
        <p className="badge-text"><h3>Thousands of opportunities waiting for you</h3></p>
        <h1>Find your <span className="blue-text">Dream Job</span> or 
            <br /><span className="blue-text">perfect Hire</span>
        </h1>
        <p className="sub-text">
          Connect talented professionals with innovative companies. 
          Your next career move is one click away.
        </p>
        
        <div className="button-row">
          <Link to="/FindJobs" className="primary-btn">Find Jobs</Link>
          <button className="secondary-btn">Post a Job</button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="stats-container">
        <div className="stat-box">
          <h3>2,500+</h3>
          <p>Companies Hiring</p>
        </div>
        <div className="stat-box">
          <h3>50,000+</h3>
          <p>Active Job Seekers</p>
        </div>
        <div className="stat-box">
          <h3>12,000+</h3>
          <p>Jobs Posted Monthly</p>
        </div>
      </div>
      <Footer />
    </div> 
  );
}

export default Home;