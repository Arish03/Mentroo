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

const suggestions = [
  {
    icon: "⚙",
    title: "Software Engineering",
    match: "94% Match",
  },
  {
    icon: "▣",
    title: "Data Science",
    match: "89% Match",
  },
  {
    icon: "✦",
    title: "AI / Machine Learning",
    match: "86% Match",
  },
];

export default function AIGuideSection() {
  return (
    <section className="ai-guide-section">
      <div className="ai-guide-grid">
        {/* LEFT CONTENT */}
        <div className="ai-guide-content">
          <div className="section-tag">MEET YOUR AI GUIDE</div>

          <h2>
            Your personal AI career
            <br />
            companion.
          </h2>

          <p className="ai-guide-description">
            Get intelligent career assistance anytime, anywhere. Our AI helps
            you discover the best career paths for you, understand your
            strengths, explore opportunities, and make confident decisions
            about your future.
          </p>

          <div className="ai-features">
            {features.map((feature) => (
              <div className="ai-feature" key={feature.title}>
                <div className="ai-feature-icon">✓</div>

                <div>
                  <strong>{feature.title}</strong>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <button className="primary-button ai-guide-button">
            Try AI Assistant Now →
          </button>
        </div>

        {/* RIGHT AI CARD */}
        <div className="ai-guide-visual">
          <div className="ai-guide-panel">
            {/* Header */}
            <div className="ai-panel-header">
              <div className="ai-avatar">✦</div>

              <div className="ai-panel-title">
                <strong>Career AI</strong>
                <span>Online</span>
              </div>

              <div className="ai-online-indicator" />
            </div>

            {/* User message */}
            <div className="ai-message user-message">
              I&apos;m interested in finding a career path that matches me.
            </div>

            {/* AI message */}
            <div className="ai-message assistant-message">
              Based on your interests, here are 3 great paths to consider:
            </div>

            {/* Suggestions */}
            <div className="career-suggestions">
              {suggestions.map((suggestion) => (
                <div className="career-suggestion" key={suggestion.title}>
                  <div className="career-suggestion-icon">
                    {suggestion.icon}
                  </div>

                  <div className="career-suggestion-info">
                    <strong>{suggestion.title}</strong>
                    <small>{suggestion.match}</small>
                  </div>
                </div>
              ))}
            </div>

            {/* Explore button */}
            <button className="explore-path-button">
              Explore My Career Path →
            </button>

            {/* Input */}
            <div className="ai-input">
              <span>Ask your career question...</span>
              <button>➤</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}