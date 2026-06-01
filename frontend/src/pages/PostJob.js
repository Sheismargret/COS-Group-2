import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/PostJob.css';
import { apiRequest } from '../lib/api';
import { useAuth } from '../context/AuthContext';

function PostJob() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    companyName: '',
    location: '',
    description: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setSuccess('');
    setIsSubmitting(true);

    try {
      await apiRequest('/api/v1/jobs', {
        method: 'POST',
        body: {
          title: formData.title,
          companyName: formData.companyName,
          location: formData.location,
          description: formData.description,
          createdBy: user?.id || null,
        },
      });
      setSuccess('Job posted successfully.');
      setFormData({ title: '', companyName: '', location: '', description: '' });
    } catch (err) {
      setError(err.message || 'Could not publish job.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    setFormData({ title: '', companyName: '', location: '', description: '' });
    navigate('/');
  };

  return (
    <div className="post-job-container">
      <div className="post-job-header">
        <Link to="/" className="back-btn">← Back to Home</Link>
        <div className="title-wrapper">
          <h1>Post a Job</h1>
        </div>
        <p>Reach thousands of qualified candidates by listing your position on HireHub</p>
      </div>

      <form className="post-job-form" onSubmit={handleSubmit}>
        {error && <div className="error-message">{error}</div>}
        {success && <div className="success-message">{success}</div>}

        <div className="form-section">
          <h3>Job Details</h3>
          <p className="section-sub">Provide the essential information about the position</p>
          
          <div className="input-group full">
            <label>📋 Job Title</label>
            <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="e.g. Senior Frontend Engineer" />
          </div>

          <div className="input-grid">
            <div className="input-group">
              <label>🏢 Company Name</label>
              <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} placeholder="e.g. Stripe" />
            </div>
            <div className="input-group">
              <label>📍 Location</label>
              <input type="text" name="location" value={formData.location} onChange={handleChange} placeholder="e.g. San Francisco, CA" />
            </div>
          </div>
        </div>

        <div className="form-section">
          <h3>Description</h3>
          <p className="section-sub">Tell candidates what the role involves and what makes it exciting</p>
          
          <div className="input-group full">
            <label>📄 Job Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe the role, responsibilities, and what makes this opportunity unique..."
            />
          </div>
        </div>

        <div className="form-footer">
          <button type="button" className="cancel-btn" onClick={handleCancel}>Cancel</button>
          <button type="submit" className="publish-btn" disabled={isSubmitting}>
            {isSubmitting ? 'Publishing...' : '✨ Publish Job Listing'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default PostJob;
