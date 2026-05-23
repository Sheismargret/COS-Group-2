import { Link } from 'react-router-dom';
import Category from '../components/Category';
import Footer from '../components/Footer';
import '../styles/Roadmap.css';
import heroIllustration from '../Assets/freelancer.svg';


const roadmapSteps = [
  {
    step: '01',
    seeker: { icon: '🔍', title: 'Search & Discover', desc: 'Browse thousands of verified roles filtered by location, salary, and skill.' },
    employer: { icon: '📝', title: 'Post a Job', desc: 'Create a listing in minutes and reach thousands of qualified candidates instantly.' },
  },
  {
    step: '02',
    seeker: { icon: '📄', title: 'Build Your Profile', desc: 'Set up your profile once — it becomes your CV for every application.' },
    employer: { icon: '📬', title: 'Receive Applications', desc: 'Candidates apply directly. Review profiles, CVs, and portfolios in one place.' },
  },
  {
    step: '03',
    seeker: { icon: '⚡', title: 'Apply in One Click', desc: 'Send your application instantly and track its status in real time.' },
    employer: { icon: '🤝', title: 'Shortlist & Connect', desc: 'Message shortlisted candidates directly and schedule interviews without leaving the platform.' },
  },
  {
    step: '04',
    seeker: { icon: '🎉', title: 'Get Hired', desc: 'Land your dream role and start the next chapter of your career.' },
    employer: { icon: '✅', title: 'Make the Hire', desc: 'Confirm your hire and build the team your company deserves.' },
  },
];

function Home() {
  return (
    <div className="home-content">

      {/* ── Dark hero ── */}
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

        <div className="hero-illustration">
          <img src={heroIllustration} alt="Job search illustration" />
        </div>

        <div className="stats-wrapper">
          <div className="stats-container">
            <div className="stat-box"><h3>2,500+</h3><p>Companies Hiring</p></div>
            <div className="stat-box"><h3>50,000+</h3><p>Active Job Seekers</p></div>
            <div className="stat-box"><h3>12,000+</h3><p>Jobs Posted Monthly</p></div>
          </div>
        </div>
      </div>

      {/* ── White bottom half ── */}
      <div className="below-fold">
        <Category />

        {/* ── How It Works Roadmap ── */}
        <section className="roadmap-section">
          <div className="roadmap-header">
            <span className="roadmap-eyebrow">How it works</span>
            <h2 className="roadmap-heading">Two paths, one platform</h2>
            <p className="roadmap-sub">Whether you're looking for work or looking to hire — we've got you covered.</p>
          </div>

          {/* Column labels */}
          <div className="roadmap-labels">
            <div className="roadmap-label seeker-label">👤 Job Seeker</div>
            <div className="roadmap-label-spacer" />
            <div className="roadmap-label employer-label">🏢 Employer</div>
          </div>

          {/* Steps */}
          <div className="roadmap-steps">
            {roadmapSteps.map((s, i) => (
              <div className="roadmap-row" key={i}>

                {/* Seeker card */}
                <div className="roadmap-card seeker-card">
                  <div className="roadmap-card-icon">{s.seeker.icon}</div>
                  <div>
                    <h3 className="roadmap-card-title">{s.seeker.title}</h3>
                    <p className="roadmap-card-desc">{s.seeker.desc}</p>
                  </div>
                </div>

                {/* Centre spine */}
                <div className="roadmap-spine">
                  <div className="spine-line top" />
                  <div className="spine-node">
                    <span className="spine-step">{s.step}</span>
                  </div>
                  <div className={`spine-line bottom${i === roadmapSteps.length - 1 ? ' hidden' : ''}`} />
                </div>

                {/* Employer card */}
                <div className="roadmap-card employer-card">
                  <div className="roadmap-card-icon">{s.employer.icon}</div>
                  <div>
                    <h3 className="roadmap-card-title">{s.employer.title}</h3>
                    <p className="roadmap-card-desc">{s.employer.desc}</p>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}

export default Home;