import React from 'react';
import '../styles/FindJobs.css';

function FindJobs() {
  return (
    <div className="find-jobs-container">
      {/* 1. Header Search Area */}
      <header className="jobs-header">
        <h1>Find Jobs</h1>
        <p>Discover opportunities that match your passion</p>
        <div className="search-bar-container">
          <input type="text" placeholder="🔍 Search by title, company, or skill..." />
          <button className="search-btn">Search Jobs</button>
        </div>
      </header>

      <div className="jobs-layout">
        {/* 2. Sidebar Filters */}
        <aside className="filters-sidebar">
          <h3>FILTERS</h3>
          <div className="filter-group">
            <h4>Job Type</h4>
            <ul>
              <li>Full-time</li>
              <li>Part-time</li>
              <li>Contract</li>
              <li>Remote</li>
            </ul>
          </div>
          <div className="filter-group">
            <h4>Salary Range</h4>
            <ul>
              <li>Under $100k</li>
              <li>$100k - $150k</li>
              <li>$150k - $200k</li>
              <li>$200k+</li>
            </ul>
          </div>
        </aside>

        {/* 3. Job Listings Grid */}
        <main className="job-listings">
          <p className="showing-count">Showing <strong>12</strong> jobs</p>
          <div className="listings-grid">
            {/* Example Job Card */}
            <div className="job-card">
              <div className="job-card-header">
                <div className="company-logo s-bg">S</div>
                <div>
                  <h4>Senior Frontend Engineer</h4>
                  <p className="company-name">Stripe</p>
                </div>
              </div>
              <p className="job-desc">Build and maintain the next generation of payment interfaces used by millions of businesses worldwide.</p>
              <div className="job-tags">
                <span>React</span>
                <span>TypeScript</span>
                <span>GraphQL</span>
                <span className="type-tag">Full-time</span>
              </div>
            </div>

            {/* Repeat Job Card for Product Designer */}
            <div className="job-card">
              <div className="job-card-header">
                <div className="company-logo f-bg">F</div>
                <div>
                  <h4>Product Designer</h4>
                  <p className="company-name">Figma</p>
                </div>
              </div>
              <p className="job-desc">Shape the future of collaborative design tools used by teams around the globe.</p>
              <div className="job-tags">
                <span>Figma</span>
                <span>Prototyping</span>
                <span className="type-tag remote">Remote</span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default FindJobs;