import React from 'react';
import '../styles/FindJobs.css';

const JOBS_DATA = [
  { id: 1, title: "Senior Frontend Engineer", company: "Stripe", logo: "S", color: "#6366f1", desc: "Build and maintain the next generation of payment interfaces used by millions of businesses worldwide.", loc: "San Francisco, CA", salary: "$160k - $210k", time: "2 days ago", tags: ["React", "TypeScript", "GraphQL"], type: "Full-time" },
  { id: 2, title: "Product Designer", company: "Figma", logo: "F", color: "#ec4899", desc: "Shape the future of collaborative design tools used by teams around the globe.", loc: "Remote", salary: "$140k - $185k", time: "1 day ago", tags: ["Figma", "Prototyping"], type: "Remote" },
  { id: 3, title: "Data Scientist", company: "Netflix", logo: "N", color: "#e11d48", desc: "Leverage data to improve content recommendations and optimize the streaming experience.", loc: "Los Gatos, CA", salary: "$150k - $200k", time: "3 days ago", tags: ["Python", "ML", "SQL"], type: "Full-time" },
  { id: 4, title: "Backend Engineer", company: "Vercel", logo: "V", color: "#000000", desc: "Design and build the infrastructure powering the modern web deployment platform.", loc: "Remote", salary: "$155k - $195k", time: "1 day ago", tags: ["Node.js", "Go", "AWS"], type: "Remote" },
  { id: 5, title: "DevOps Engineer", company: "Datadog", logo: "D", color: "#7933e1", desc: "Build and scale the monitoring infrastructure trusted by thousands of engineering teams.", loc: "New York, NY", salary: "$145k - $190k", time: "2 days ago", tags: ["Kubernetes", "Terraform"], type: "Full-time" },
  { id: 6, title: "ML Engineer", company: "OpenAI", logo: "O", color: "#10a37f", desc: "Push the boundaries of AI research and deploy models that benefit all of humanity.", loc: "San Francisco, CA", salary: "$200k - $280k", time: "Just now", tags: ["PyTorch", "Transformers"], type: "Contract" },
];

function FindJobs() {
  return (
    <div className="find-jobs-container">
      <header className="jobs-header">
        <h1>Find Jobs</h1>
        <p>Discover opportunities that match your passion</p>
        <div className="search-bar-container">
          <input type="text" placeholder="Search by title, company, or skill..." />
          <button className="search-btn">Search Jobs</button>
        </div>
      </header>

      <div className="jobs-layout">
        <aside className="filters-sidebar">
          <div className="filter-group">
            <h3>Job Type</h3>
            <ul><li>Full-time</li><li>Part-time</li><li>Contract</li><li>Remote</li></ul>
          </div>
          <div className="filter-group">
            <h3>Salary Range</h3>
            <ul><li>$100k - $150k</li><li>$150k - $200k</li><li>$200k+</li></ul>
          </div>
          <div className="filter-group">
            <h3>Category</h3>
            <ul>
              <li>Engineering</li><li>Design</li><li>Marketing</li><li>Sales</li>
              <li>Finance</li><li>Data Science</li><li>Product</li>
            </ul>
          </div>
        </aside>

        <main className="job-listings">
          <p className="showing-count">Showing <strong>{JOBS_DATA.length}</strong> jobs</p>
          <div className="listings-grid">
            {JOBS_DATA.map(job => (
              <div key={job.id} className="job-card">
                <div className="job-card-header">
                  <div className="company-logo" style={{backgroundColor: job.color}}>{job.logo}</div>
                  <div>
                    <h4>{job.title}</h4>
                    <p className="company-name">{job.company}</p>
                  </div>
                </div>
                <p className="job-desc">{job.desc}</p>
                <div className="job-meta">
                  <span>📍 {job.loc}</span>
                  <span>💰 {job.salary}</span>
                  <span>🕒 {job.time}</span>
                </div>
                <div className="job-tags">
                  {job.tags.map(tag => <span key={tag}>{tag}</span>)}
                  <span className={`type-tag ${job.type.toLowerCase()}`}>{job.type}</span>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default FindJobs;