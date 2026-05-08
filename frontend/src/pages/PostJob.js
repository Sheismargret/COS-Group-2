import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/PostJob.css';

function PostJob() {
  return (
    <div className="post-job-container">
      <div className="post-job-header">
        <Link to="/" className="back-btn">← Back to Home</Link>
        <div className="title-wrapper">
          <h1>Post a Job</h1>
        </div>
        <p>Reach thousands of qualified candidates by listing your position on HireHub</p>
      </div>

      <form className="post-job-form">
        {/* Section 1: Job Details */}
        <div className="form-section">
          <h3>Job Details</h3>
          <p className="section-sub">Provide the essential information about the position</p>
          
          <div className="input-group full">
            <label>📋 Job Title</label>
            <input type="text" placeholder="e.g. Senior Frontend Engineer" />
          </div>

          <div className="input-grid">
            <div className="input-group">
              <label>🏢 Company Name</label>
              <input type="text" placeholder="e.g. Stripe" />
            </div>
            <div className="input-group">
              <label>📍 Location</label>
              <input type="text" placeholder="e.g. San Francisco, CA" />
            </div>
            <div className="input-group">
              <label>🕒 Job Type</label>
              <select defaultValue="">
                <option value="" disabled>Select type</option>
                <option>Full-time</option>
                <option>Remote</option>
                <option>Contract</option>
              </select>
            </div>
            <div className="input-group">
              <label>🏷️ Category</label>
              <select defaultValue="">
                <option value="" disabled>Select category</option>
                <option>Engineering</option>
                <option>Design</option>
                <option>Marketing</option>
              </select>
            </div>
          </div>

          <label className="group-label">💰 Salary Range (Annual, USD)</label>
          <div className="input-grid">
            <input type="number" placeholder="Min e.g. 120000" min="0"/>
            <input type="number" placeholder="Max e.g. 160000" min="0" />
          </div>
        </div>

        {/* Section 2: Description */}
        <div className="form-section">
          <h3>Description</h3>
          <p className="section-sub">Tell candidates what the role involves and what makes it exciting</p>
          
          <div className="input-group full">
            <label>📄 Job Description</label>
            <textarea placeholder="Describe the role, responsibilities, and what makes this opportunity unique..." />
          </div>

          <div className="input-group full">
            <label>📑 Requirements</label>
            <textarea placeholder="List the key qualifications and skills required for this position..." />
          </div>

          <div className="input-group full">
            <label>🏷️ Skills & Tags</label>
            <input type="text" placeholder="e.g. React, TypeScript, GraphQL (comma-separated)" />
            <span className="input-hint">Separate each tag with a comma</span>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="form-footer">
          <button type="button" className="cancel-btn">Cancel</button>
          <button type="submit" className="publish-btn">✨ Publish Job Listing</button>
        </div>
      </form>
    </div>
  );
}

export default PostJob;