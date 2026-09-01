"use client";

import Link from "next/link";

const resources = [
  {
    category: "CAREER GUIDE",
    title: "How to Choose the Right Career Path",
    description:
      "Learn how to understand your interests, strengths, and career opportunities before choosing your next step.",
    readTime: "5 min read",
    type: "Guide",
    icon: "✦",
  },
  {
    category: "EXPERT ADVICE",
    title: "How to Choose the Right College",
    description:
      "Discover important factors to consider when selecting a college that supports your academic and career goals.",
    readTime: "6 min read",
    type: "Advice",
    icon: "⌕",
  },
  {
    category: "CAREER PLANNING",
    title: "Preparing for Your Future",
    description:
      "Build confidence in your future by planning your career journey with practical steps and clear direction.",
    readTime: "4 min read",
    type: "Planning",
    icon: "↗",
  },
];

export default function ResourcesSection() {
  return (
    <section className="resources-section">
      <div className="container">
        <div className="resources-heading">
          <div>
            <div className="section-tag">CAREER RESOURCES</div>

            <h2>
              Explore resources to help you
              <br />
              move forward.
            </h2>

            <p className="section-description">
              Stay informed with useful guides, expert insights, and practical
              resources to support your career journey.
            </p>
          </div>

          <Link href="/resources" className="consultants-view-button">
            View All Resources →
          </Link>
        </div>

        <div className="resources-grid">
          {resources.map((resource, index) => (
            <article className="resource-card" key={index}>
              {/* RESOURCE VISUAL */}
              <div className={`resource-visual resource-visual-${index + 1}`}>
                <div className="resource-visual-overlay">
                  <div className="resource-visual-icon">
                    {resource.icon}
                  </div>
                </div>
              </div>

              {/* CONTENT */}
              <div className="resource-content">
                <div className="resource-category">
                  {resource.category}
                </div>

                <h3>{resource.title}</h3>

                <p>{resource.description}</p>

                <div className="resource-footer">
                  <span className="resource-meta">
                    {resource.readTime} · {resource.type}
                  </span>

                  <Link
                    href={`/resources/${index + 1}`}
                    className="resource-read-link"
                  >
                    Read →
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