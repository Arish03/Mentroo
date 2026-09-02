const stories = [
  {
    quote:
      "The AI guide helped me understand my strengths and explore career options I had never considered before. Mentroo made my decision so much easier.",
    name: "Emily Chen",
    role: "Final Year Student",
    initials: "EC",
  },
  {
    quote:
      "The assessment gave me much more clarity about my future. I finally understood which career path matches my skills and interests.",
    name: "David Kim",
    role: "Software Developer",
    initials: "DK",
  },
  {
    quote:
      "The guidance from experienced professionals made a huge difference. I feel more confident and ready to grow in my career.",
    name: "Sarah Williams",
    role: "Marketing Manager",
    initials: "SW",
  },
];

export default function SuccessStoriesSection() {
  return (
    <section className="success-section">
      <div className="container">
        <div className="success-heading">
          <div className="section-tag">
            SUCCESS STORIES
          </div>
        </div>

        <div className="success-grid">
          {stories.map((story) => (
            <article
              className="success-card"
              key={story.name}
            >
              <div className="success-card-top">
                <div className="success-stars">
                  ★★★★★
                </div>

                <span className="quote-mark">
                  99
                </span>
              </div>

              <p className="success-quote">
                &quot;{story.quote}&quot;
              </p>

              <div className="success-user">
                <div className="success-avatar">
                  {story.initials}
                </div>

                <div>
                  <strong>
                    {story.name}
                  </strong>

                  <span>
                    {story.role}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}