import Link from "next/link";

export default function CTASection() {
  return (
    <section className="cta-section">
      <div className="cta-content">
        <div className="section-tag cta-tag">
          YOUR FUTURE STARTS NOW
        </div>

        <h2>
          Join thousands of students and professionals
          <br />
          who have discovered a clearer career path.
        </h2>

        <p>
          Start exploring your strengths, discovering opportunities,
          and building a future you can be proud of.
        </p>

        <Link
          href="/get-started"
          className="cta-button"
        >
          Start Your Career Journey
          <span>→</span>
        </Link>
      </div>
    </section>
  );
}