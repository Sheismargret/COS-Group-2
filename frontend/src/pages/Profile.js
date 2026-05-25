import React, { useState } from 'react';
import '../styles/Profile.css';
import { FaUserCircle, FaCamera, FaCloudUploadAlt, FaBriefcase, FaGraduationCap, FaExternalLinkAlt } from 'react-icons/fa';

function Profile() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setSelectedFile(e.target.files[0].name);
    }
  };

  return (
    <div className="pau-profile-viewport">
      <div className="pau-profile-container">
        
        {/* LEFT COLUMN: SIDEBAR */}
        <aside className="pau-profile-sidebar">
          <div className="pau-avatar-section">
            <div className="pau-avatar-container">
              <FaUserCircle className="pau-default-avatar" />
              <label htmlFor="pau-avatar-input" className="pau-avatar-upload-badge">
                <FaCamera />
                <input type="file" id="pau-avatar-input" accept="image/*" style={{ display: 'none' }} />
              </label>
            </div>
            <h2 className="pau-user-name">Name</h2>
            <p className="pau-user-headline">Student at Pan-Atlantic University (PAU)</p>
            <span className="pau-user-location">Lagos, Nigeria</span>
          </div>

          <div className="pau-profile-hr" />

          {/* Quick Metrics */}
          <div className="pau-stats-stack">
            <div className="pau-stat-tile">
              <span className="pau-stat-label">Applications</span>
              <span className="pau-stat-value pau-txt-blue">12</span>
            </div>
            <div className="pau-stat-tile">
              <span className="pau-stat-label">Interviews</span>
              <span className="pau-stat-value pau-txt-purple">3</span>
            </div>
          </div>

          {/* Interactive Document Upload */}
          <div className="pau-upload-zone">
            <FaCloudUploadAlt className="pau-upload-icon" />
            <p className="pau-upload-text">Upload your CV / Resume</p>
            <label htmlFor="pau-resume-file" className="pau-upload-btn">
              Browse File
            </label>
            <input type="file" id="pau-resume-file" accept=".pdf,.doc,.docx" onChange={handleFileChange} style={{ display: 'none' }} />
            {selectedFile && <div className="pau-uploaded-file-pill">📄 {selectedFile}</div>}
          </div>
        </aside>

        {/* RIGHT COLUMN: MAIN CONTENT FEED */}
        <main className="pau-profile-main">
          
          {/* Professional Bio */}
          <section className="pau-profile-card">
            <h3 className="pau-card-heading">About Me</h3>
            <p className="pau-bio-text">
              Passionate and solution-driven Computer Science undergraduate focused on modern web architectures and full-stack development. Eager to connect with innovative product engineering teams for internship opportunities.
            </p>
          </section>

          {/* Academic Timeline */}
          <section className="pau-profile-card">
            <h3 className="pau-card-heading"><FaGraduationCap /> Education</h3>
            <div className="pau-timeline">
              <div className="pau-timeline-dot" />
              <div className="pau-timeline-body">
                <h4 className="pau-timeline-title">Pan-Atlantic University</h4>
                <p className="pau-timeline-subtitle">B.Sc. in Computer Science</p>
                <span className="pau-timeline-date">2023 - 2027 (Expected)</span>
              </div>
            </div>
          </section>

          {/* Key Practical Projects */}
          <section className="pau-profile-card">
            <h3 className="pau-card-heading"><FaBriefcase /> Key Projects</h3>
            <div className="pau-project-box">
              <div className="pau-project-header">
                <h4 className="pau-project-title">PAU Connect — Job Portal Platform</h4>
                <a href="#" className="pau-project-link"><FaExternalLinkAlt /></a>
              </div>
              <p className="pau-bio-text">
                Collaborating with group mates to develop a feature-rich talent platform using React and advanced CSS configurations.
              </p>
              <div className="pau-tag-cloud">
                <span className="pau-skill-tag">React</span>
                <span className="pau-skill-tag">CSS Grid</span>
                <span className="pau-skill-tag">Git Workflow</span>
              </div>
            </div>
          </section>

        </main>

      </div>
    </div>
  );
}

export default Profile;