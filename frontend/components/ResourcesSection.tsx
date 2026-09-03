import Link from "next/link";

const resources = [
  {
    category: "CAREER GUIDES",
    title: "How to Choose the Right Career Path",
    description:
      "A complete guide to identifying your strengths, interests, and choosing the best career path.",
    meta: "5 min read  ·  Dec 12, 2024",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=90",
  },
  {
    category: "EXPERT ADVICE",
    title: "How to Choose the Right College",
    description:
      "Important factors to consider before selecting a college that supports your academic and career goals.",
    meta: "6 min read  ·  Dec 10, 2024",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=90",
  },
  {
    category: "CAREER PLANNING",
    title: "Choosing the Right Course for Your Future",
    description:
      "Explore how the right course can shape your future and help you achieve your career aspirations.",
    meta: "4 min read  ·  Dec 8, 2024",
    image:
      "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=900&q=90",
  },
];

export default function ResourcesSection() {
  return (
    <section className="resources-section">
      <div className="container">
        <div className="resources-heading">
          <div>
            <div className="section-tag">
              CAREER INSIGHTS &amp; RESOURCES
            </div>

            <p>
              Stay updated with the latest articles, tips and
              industry insights.
            </p>
          </div>

          <Link
            href="/resources"
            className="section-link-button"
          >
            View All Resources →
          </Link>
        </div>

        <div className="resources-grid">
          {resources.map((resource) => (
            <article
              className="resource-card"
              key={resource.title}
            >
              <div className="resource-image">
                <img
                  src={resource.image}
                  alt={resource.title}
                />

                <span className="resource-badge">
                  {resource.category}
                </span>
              </div>

              <div className="resource-info">
                <h3>
                  {resource.title}
                </h3>

                <p>
                  {resource.description}
                </p>

                <div className="resource-bottom">
                  <span>
                    {resource.meta}
                  </span>

                  <Link href="/resources">
                    Read More →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}