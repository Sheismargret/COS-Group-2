import React, { useEffect, useMemo, useState } from 'react';
import '../styles/FindJobs.css';
import { apiRequest } from '../lib/api';

function FindJobs() {
  const [jobs, setJobs] = useState([]);
  const [query, setQuery] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let active = true;

    const loadJobs = async () => {
      try {
        const response = await apiRequest('/api/v1/jobs');
        if (active) {
          setJobs(response.data || []);
        }
      } catch (err) {
        if (active) {
          setError(err.message || 'Unable to load jobs.');
        }
      } finally {
        if (active) {
          setIsLoading(false);
        }
      }
    };

    loadJobs();
    return () => {
      active = false;
    };
  }, []);

  const filteredJobs = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) return jobs;

    return jobs.filter((job) => {
      const haystack = [
        job.title,
        job.company_name,
        job.location,
        job.description,
        job.creator_name,
      ]
        .filter(Boolean)
        .join(' ')
        .toLowerCase();
      return haystack.includes(normalizedQuery);
    });
  }, [jobs, query]);

  return (
    <div className="find-jobs-container">
      <header className="jobs-header">
        <h1>Find Jobs</h1>
        <p>Discover opportunities that match your passion</p>
        <div className="search-bar-container">
          <input
            type="text"
            placeholder="Search by title, company, or skill..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="search-btn" type="button" onClick={() => setQuery(query.trim())}>
            Search Jobs
          </button>
        </div>
      </header>

      <div className="jobs-layout">
        <aside className="filters-sidebar">
          <div className="filter-group">
            <h3>Job Type</h3>
            <ul>
              <li>Full-time</li>
              <li>Part-time</li>
              <li>Contract</li>
              <li>Remote</li>
            </ul>
          </div>
          <div className="filter-group">
            <h3>Salary Range</h3>
            <ul>
              <li>$100k - $150k</li>
              <li>$150k - $200k</li>
              <li>$200k+</li>
            </ul>
          </div>
          <div className="filter-group">
            <h3>Category</h3>
            <ul>
              <li>Engineering</li>
              <li>Design</li>
              <li>Marketing</li>
              <li>Sales</li>
              <li>Finance</li>
              <li>Data Science</li>
              <li>Product</li>
            </ul>
          </div>
        </aside>

        <main className="job-listings">
          {isLoading ? (
            <p>Loading jobs...</p>
          ) : error ? (
            <p className="error-message">{error}</p>
          ) : (
            <>
              <p className="showing-count">
                Showing <strong>{filteredJobs.length}</strong> jobs
              </p>
              <div className="listings-grid">
                {filteredJobs.length === 0 ? (
                  <p>No jobs match your search yet.</p>
                ) : (
                  filteredJobs.map((job) => (
                    <div key={job.id} className="job-card">
                      <div className="job-card-header">
                        <div className="company-logo" style={{ backgroundColor: '#6366f1' }}>
                          {(job.company_name || '?').charAt(0).toUpperCase()}
                        </div>
                        <div>
                          <h4>{job.title}</h4>
                          <p className="company-name">{job.company_name}</p>
                        </div>
                      </div>
                      <p className="job-desc">{job.description}</p>
                      <div className="job-meta">
                        <span>📍 {job.location || 'Remote'}</span>
                        <span>🕒 {job.created_at ? new Date(job.created_at).toLocaleDateString() : 'Recently'}</span>
                        {job.creator_name && <span>👤 {job.creator_name}</span>}
                      </div>
                    </div>
                  ))
                )}
              </div>
            </>
          )}
        </main>
      </div>
    </div>
  );
}

export default FindJobs;
