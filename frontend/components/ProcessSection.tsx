const steps = [
  {
    number: "1",
    title: "Discover Yourself",
    description:
      "Take assessments to understand your skills, interests, and personality.",
  },
  {
    number: "2",
    title: "Explore Paths",
    description:
      "Browse career domains and find what aligns with your goals.",
  },
  {
    number: "3",
    title: "Get Expert Guidance",
    description:
      "Connect with verified consultants and clarify your doubts to guide you.",
  },
  {
    number: "4",
    title: "Build Your Future",
    description:
      "Schedule 1:1 sessions and take action towards your successful future.",
  },
];

export default function ProcessSection() {
  return (
    <section className="process-section">
      <div className="container">
        <div className="process-heading">
          <div className="section-tag">
            HOW MENTROO WORKS
          </div>

          <h2>
            Four simple steps to discover and embark on a career
            that truly fits you.
          </h2>
        </div>

        <div className="process-grid">
          {steps.map((step) => (
            <div className="process-step" key={step.number}>
              <div className="process-number">
                {step.number}
              </div>

              <h3>
                {step.title}
              </h3>

              <p>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}