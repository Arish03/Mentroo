const stats = [
  {
    number: "AI Powered",
    label: "Career Guidance",
  },
  {
    number: "5+",
    label: "Career Domains",
  },
  {
    number: "Verified",
    label: "Consultants",
  },
  {
    number: "1:1",
    label: "Expert Sessions",
  },
];

export default function StatsSection() {
  return (
    <section className="stats-section">
      <div className="stats-grid">
        {stats.map((stat) => (
          <div className="stat-item" key={stat.label}>
            <div className="stat-number">
              {stat.number}
            </div>

            <div className="stat-label">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}