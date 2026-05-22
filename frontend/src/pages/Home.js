import { Link } from 'react-router-dom';
import Category from '../components/Category';
import Footer from '../components/Footer';
import heroIllustration from '../Assets/freelancer.svg';

function Home() {
  return (
    <div className="home-content">

      {/* ── Dark top half ── */}
      <div className="hero-section">
        <div className="hero-text">
          <p className="badge-text">Thousands of Opportunities Waiting For You</p>
          <h1>
            Find your <span className="blue-text">Dream Job</span> or{' '}
            <span className="blue-text">perfect Hire</span>
          </h1>
          <p className="sub-text">
            Connect talented professionals with innovative companies.
            Your next career move is one click away.
          </p>
          <div className="button-row">
            <Link to="/FindJobs" className="primary-btn">Find Jobs</Link>
            <Link to="/PostJob" className="secondary-btn">Post a job</Link>
          </div>
        </div>

        {/* ── Your illustration ── */}
        <div className="hero-illustration">
          <img src={heroIllustration} alt="Job search illustration" />
        </div>

        {/* ── Stats – floats over the color split ── */}
        <div className="stats-wrapper">
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
        </div>
      </div>

      {/* ── White bottom half ── */}
      <div className="below-fold">
        <Category />
        <Footer />
      </div>

    </div>
  );
}

export default Home;