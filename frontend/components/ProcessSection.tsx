const steps = [
  {
    number: "1",
    title: "Discover Yourself",
    description:
      "Understand your interests, strengths, skills, and preferences.",
  },
  {
    number: "2",
    title: "Explore Paths",
    description:
      "Find career options that match your personality and goals.",
  },
  {
    number: "3",
    title: "Get Expert Guidance",
    description:
      "Connect with experienced professionals and career consultants.",
  },
  {
    number: "4",
    title: "Build Your Future",
    description:
      "Make confident decisions and take the next step in your career.",
  },
];

export default function ProcessSection() {
  return (
    <section className="process-section">
      <div className="container">
        <div className="process-heading">
          <div className="section-tag">
            HOW MENTRO WORKS
          </div>

          <h2 className="section-title">
            Your career journey, made simple.
          </h2>

          <p className="section-description">
            From discovering your strengths to building your future, Mentro
            guides you through every important step of your career journey.
          </p>
        </div>

        <div className="process-grid">
          {steps.map((step) => (
            <div className="process-card" key={step.number}>
              <div className="process-number">
                {step.number}
              </div>

              <div className="process-icon">
                {step.number}
              </div>

              <h3>{step.title}</h3>

              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}