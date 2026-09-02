export default function AboutSection() {
  return (
    <section className="about-section">
      <div className="container about-container">
        <div className="about-content">
          <div className="section-tag">
            ABOUT MENTROO
          </div>

          <h2>
            Empowering careers with AI
            <br />
            and expert guidance.
          </h2>

          <p>
            Mentroo is an AI-powered career guidance platform that helps
            students and professionals discover the right career path with
            personalized insights, expert consultants, and smart tools.
          </p>

          <div className="about-points">
            <div>
              <span>✓</span>
              AI-powered career matching
            </div>

            <div>
              <span>✓</span>
              Verified expert consultants
            </div>

            <div>
              <span>✓</span>
              Personalized guidance for your success
            </div>

            <div>
              <span>✓</span>
              Trusted by thousands of users
            </div>
          </div>

          <button className="primary-button">
            Try AI Assistant About Us
            <span>→</span>
          </button>
        </div>

        <div className="about-visual">
          <img
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=90"
            alt="Mentroo career guidance"
          />

          <div className="about-play-button">
            ▶
          </div>
        </div>
      </div>
    </section>
  );
}