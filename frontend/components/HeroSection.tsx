export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-tag">
            AI-POWERED CAREER GUIDANCE
          </div>

          <h1 className="hero-title">
            Build a Career You&apos;ll Be
            <br />
            <span>Proud Of.</span>
          </h1>

          <p className="hero-description">
            Discover your strengths, explore career opportunities, and get
            personalized guidance to build a career path that truly fits you.
          </p>

          <div className="hero-buttons">
            <button className="primary-button">
              Start Your Career Journey →
            </button>

            <button className="secondary-button">
              Talk to an Expert
            </button>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-circle circle-one" />
          <div className="hero-circle circle-two" />

          <div className="hero-card hero-top-card">
            <span className="small-icon">✦</span>

            <div>
              <strong>AI Career Guide</strong>
              <p>Discover your path</p>
            </div>
          </div>

          <div className="hero-card hero-left-card">
            <span>✦</span>

            <div>
              <strong>5+</strong>
              <p>Career Domains</p>
            </div>
          </div>

          <div className="hero-image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=85"
              alt="Career guidance"
            />
          </div>

          <div className="hero-card hero-bottom-card">
            <div>
              <strong>95%</strong>
              <p>Career Match</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}