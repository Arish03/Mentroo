import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        {/* LEFT CONTENT */}
        <div className="hero-content">
          <div className="hero-tag">
            ✦ AI-POWERED CAREER GUIDANCE
          </div>

          <h1 className="hero-title">
            Build a Career You&apos;ll
            <br />
            Be
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

          <div className="hero-trust">
            <div className="hero-trust-avatars">
              <span>JS</span>
              <span>AK</span>
              <span>EM</span>
            </div>

            <div className="hero-trust-text">
              <strong>Trusted by Students &amp; Professionals</strong>
              <span>Start your journey with confidence</span>
            </div>
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="hero-visual">

          {/* Career Match Card */}
          <div className="hero-match-card">
            <span>CAREER MATCH</span>

            <strong>95%</strong>

            <div className="hero-match-line">
              <div />
            </div>

            <small>Your best career opportunities</small>
          </div>

          {/* AI Career Guide Card */}
          <div className="hero-ai-card">
            <div className="floating-icon">✦</div>

            <div>
              <strong>AI Career Guide</strong>
              <span>Discover the best path for you</span>
            </div>
          </div>

          {/* Main Image */}
          <div className="hero-main-image">
            <div className="hero-image-placeholder">
              <div className="hero-person">
                <div className="hero-head" />
                <div className="hero-body" />
              </div>
            </div>
          </div>

          {/* Verified Consultant */}
          <div className="hero-consultant-card">
            <div className="mini-avatar">SJ</div>

            <div>
              <strong>Verified Consultant</strong>
              <span>★★★★★</span>
            </div>
          </div>

          {/* Career Match Percentage */}
          <div className="hero-success-card">
            <div>
              <small>Career Match</small>
              <strong>92%</strong>
            </div>

            <div className="success-circle">✓</div>
          </div>
        </div>
      </div>
    </section>
  );
}