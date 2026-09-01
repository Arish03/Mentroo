const consultants = [
  {
    name: "Dr. Sarah Johnson",
    role: "Career Development Specialist",
    experience: "10+ Years Experience",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=85",
  },
  {
    name: "Michael Anderson",
    role: "Technology Career Consultant",
    experience: "8+ Years Experience",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=85",
  },
  {
    name: "Emily Williams",
    role: "Business & Management Expert",
    experience: "9+ Years Experience",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=85",
  },
  {
    name: "Marcus Cole",
    role: "Leadership Career Mentor",
    experience: "12+ Years Experience",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=85",
  },
];

export default function ConsultantsSection() {
  return (
    <section className="consultants-section">
      <div className="container">
        <div className="consultants-heading">
          <div className="consultants-heading-left">
            <div className="section-tag">
              EXPERT GUIDANCE
            </div>

            <h2>
              Learn from experienced professionals.
            </h2>

            <p className="section-description">
              Connect with experienced consultants who help you make confident
              decisions about your future.
            </p>
          </div>

          <button className="consultants-view-button">
            View All Consultants →
          </button>
        </div>

        <div className="consultants-grid">
          {consultants.map((consultant) => (
            <div
              className="consultant-card"
              key={consultant.name}
            >
              <div className="consultant-image">
                <img
                  src={consultant.image}
                  alt={consultant.name}
                />
              </div>

              <div className="consultant-info">
                <div className="consultant-top">
                  <h3>{consultant.name}</h3>

                  <span>★ 4.9</span>
                </div>

                <div className="consultant-role">
                  {consultant.role}
                </div>

                <p>{consultant.experience}</p>

                <div className="consultant-bottom">
                  <span>120+ Reviews</span>

                  <button>
                    Book Session →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}