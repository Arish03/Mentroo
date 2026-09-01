const features = [
  {
    title: "Personalized Recommendations",
    description:
      "Get career suggestions based on your skills, interests, and goals.",
  },
  {
    title: "Smart Career Insights",
    description:
      "Understand which career opportunities match your strengths.",
  },
  {
    title: "Always Available",
    description:
      "Get guidance whenever you need help making career decisions.",
  },
];

export default function AIGuideSection() {
  return (
    <section className="ai-guide-section">
      <div className="ai-guide-grid">
        <div className="ai-guide-content">
          <div className="section-tag">
            AI-POWERED CAREER GUIDANCE
          </div>

          <h2>
            Your personal AI
            <br />
            career companion.
          </h2>

          <p>
            Get personalized career guidance powered by artificial intelligence.
            Explore opportunities, understand your strengths, and make confident
            decisions about your future.
          </p>

          <div className="ai-features">
            {features.map((feature) => (
              <div className="ai-feature" key={feature.title}>
                <div className="ai-feature-icon">
                  ✓
                </div>

                <div>
                  <strong>{feature.title}</strong>

                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <button className="primary-button">
            Explore AI Career Guide →
          </button>
        </div>

        <div className="ai-guide-visual">
          <div className="ai-guide-panel">
            <div className="ai-panel-header">
              <div className="ai-avatar">
                ✦
              </div>

              <div>
                <strong>Mentro AI</strong>
                <span>AI Career Assistant</span>
              </div>

              <small>Online</small>
            </div>

            <div className="ai-message user-message">
              I&apos;m interested in finding a career path that matches me.
            </div>

            <div className="ai-message assistant-message">
              Based on your interests, here are some career paths you may enjoy.
            </div>

            <div className="career-suggestion">
              <span>🎓</span>
              <div>
                <strong>Education</strong>
                <small>High career match</small>
              </div>
              <b>94%</b>
            </div>

            <div className="career-suggestion">
              <span>💼</span>
              <div>
                <strong>Business</strong>
                <small>Strong opportunity match</small>
              </div>
              <b>89%</b>
            </div>

            <div className="career-suggestion">
              <span>⚙</span>
              <div>
                <strong>Technology</strong>
                <small>Growing career path</small>
              </div>
              <b>86%</b>
            </div>

            <button className="explore-path-button">
              Explore Career Paths →
            </button>

            <div className="ai-input">
              Ask your career question...
              <span>➤</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}