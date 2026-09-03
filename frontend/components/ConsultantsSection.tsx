const consultants = [
  {
    name: "Dr. Priya Sharma",
    role: "Education Specialist",
    experience: "10+ years experience in student guidance & career planning.",
    rating: "4.9",
    reviews: "120+ reviews",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=90",
  },
  {
    name: "Arjun Mehta",
    role: "Business Consultant",
    experience: "8+ years in business strategy & entrepreneurship guidance.",
    rating: "4.8",
    reviews: "98+ reviews",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=90",
  },
  {
    name: "Sarah Johnson",
    role: "Career Development Expert",
    experience: "12+ years in career development & mentoring students.",
    rating: "4.9",
    reviews: "150+ reviews",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=90",
  },
  {
    name: "Marcus Cole",
    role: "Leadership Mentor",
    experience: "15+ years leadership & career coaching expert.",
    rating: "4.9",
    reviews: "110+ reviews",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=90",
  },
];

export default function ConsultantsSection() {
  return (
    <section className="consultants-section">
      <div className="container">
        <div className="consultants-top">
          <div>
            <div className="section-tag">
              EXPERT GUIDANCE
            </div>

            <p className="consultants-intro">
              Connect with experienced professionals who have
              navigated the path you want to take.
            </p>
          </div>

          <button className="section-link-button">
            View All Consultants →
          </button>
        </div>

        <div className="consultants-grid">
          {consultants.map((consultant) => (
            <article
              className="consultant-card"
              key={consultant.name}
            >
              <div className="consultant-image">
                <img
                  src={consultant.image}
                  alt={consultant.name}
                />

                <span className="online-badge">
                  <i />
                  Online
                </span>
              </div>

              <div className="consultant-info">
                <h3>
                  {consultant.name}
                </h3>

                <div className="consultant-role">
                  {consultant.role}
                </div>

                <p>
                  {consultant.experience}
                </p>

                <div className="consultant-meta">
                  <span>
                    ★ {consultant.rating}
                  </span>

                  <span>
                    ({consultant.reviews})
                  </span>
                </div>

                <button className="book-button">
                  Book Now →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}