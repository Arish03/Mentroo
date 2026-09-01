const domains = [
  {
    icon: "🎓",
    title: "Education",
    description:
      "Teaching, academics, and student development.",
  },
  {
    icon: "💼",
    title: "Business",
    description:
      "Management, finance, marketing, and entrepreneurship.",
  },
  {
    icon: "🏆",
    title: "Sports",
    description:
      "Coaching, fitness, management, and analytics.",
  },
  {
    icon: "⚕",
    title: "Medical",
    description:
      "Healthcare, nursing, research, and patient care.",
  },
  {
    icon: "⚙",
    title: "Engineering",
    description:
      "Technology, innovation, systems, and development.",
  },
];

export default function CareerDomainsSection() {
  return (
    <section className="career-domains-section">
      <div className="container">
        <div className="section-header domains-header">
          <div className="section-tag">
            EXPLORE CAREER DOMAINS
          </div>

          <h2 className="section-title">
            Find the perfect path for your future.
          </h2>

          <p className="section-description">
            Explore diverse career opportunities and discover a path that
            matches your interests, skills, and ambitions.
          </p>
        </div>

        <div className="domains-grid">
          {domains.map((domain) => (
            <div className="domain-card" key={domain.title}>
              <div className="domain-icon">
                {domain.icon}
              </div>

              <h3>{domain.title}</h3>

              <p>{domain.description}</p>

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