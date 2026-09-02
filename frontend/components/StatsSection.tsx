const stats = [
  {
    icon: "✦",
    number: "AI Powered",
    label: "Career Guidance",
  },
  {
    icon: "▦",
    number: "5+",
    label: "Career Domains",
  },
  {
    icon: "♡",
    number: "Verified",
    label: "Consultants",
  },
  {
    icon: "♟",
    number: "1:1",
    label: "Expert Sessions",
  },
];

export default function StatsSection() {
  return (
    <section className="stats-section">
      <div className="stats-container">
        {stats.map((stat) => (
          <div className="stat-item" key={stat.label}>
            <div className="stat-icon">
              {stat.icon}
            </div>

            <div className="stat-content">
              <strong>{stat.number}</strong>
              <span>{stat.label}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}