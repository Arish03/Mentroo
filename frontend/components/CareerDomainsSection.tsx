const domains = [
  {
    icon: "🎓",
    title: "Education",
    description: "Teaching, academics, and student development.",
  },
  {
    icon: "▣",
    title: "Business",
    description: "Management, finance, marketing, and entrepreneurship.",
  },
  {
    icon: "🏆",
    title: "Sports",
    description: "Coaching, management, fitness, and sports sciences.",
  },
  {
    icon: "♡",
    title: "Medical",
    description: "Healthcare, nursing, research, and patient care.",
  },
  {
    icon: "⚙",
    title: "Engineering",
    description: "Technology, innovation, and problem solving.",
  },
];

export default function CareerDomainsSection() {
  return (
    <section className="career-domains-section">
      <div className="container">
        <div className="domains-heading">
          <div className="section-tag">
            EXPLORE CAREER DOMAINS
          </div>

          <h2>
            Find the perfect path for your future.
          </h2>

          <p>
            Explore different fields and discover your strengths
            and interests to make confident career decisions.
          </p>
        </div>

        <div className="domains-grid">
          {domains.map((domain) => (
            <div className="domain-card" key={domain.title}>
              <div className="domain-icon">
                {domain.icon}
              </div>

              <h3>
                {domain.title}
              </h3>

              <p>
                {domain.description}
              </p>

              <a href="#">
                Explore →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}