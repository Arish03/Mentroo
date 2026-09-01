const stories = [
  {
    quote:
      "The AI guide helped me understand my strengths and explore career options I had never considered before.",
    name: "Priya Sharma",
    role: "Computer Science Student",
    initials: "PS",
  },
  {
    quote:
      "The assessment gave me much more clarity about my future. I finally understood which career path suited me.",
    name: "Rahul Kumar",
    role: "Business Graduate",
    initials: "RK",
  },
  {
    quote:
      "The guidance from experienced professionals made a huge difference. I feel much more confident about my career.",
    name: "Ananya Singh",
    role: "Aspiring Designer",
    initials: "AS",
  },
];

export default function SuccessStoriesSection() {
  return (
    <section className="success-stories-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            SUCCESS STORIES
          </div>

          <h2 className="section-title">
            Real people. Real career progress.
          </h2>

          <p className="section-description">
            Discover how Mentro is helping people find clarity, confidence,
            and direction for their future.
          </p>
        </div>

        <div className="success-grid">
          {stories.map((story) => (
            <div className="success-card" key={story.name}>
              <div>
                <div className="success-rating">
                  ★★★★★
                </div>

                <p className="success-quote">
                  &quot;{story.quote}&quot;
                </p>
              </div>

              <div className="success-user">
                <div className="success-avatar">
                  {story.initials}
                </div>

                <div>
                  <h4>{story.name}</h4>

                  <p>{story.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}