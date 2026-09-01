import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-logo">
              Mentro
            </div>

            <p className="footer-description">
              Helping students and professionals discover the right career path
              with personalized guidance, AI-powered insights, and expert
              support.
            </p>
          </div>

          <div className="footer-column">
            <h4>Platform</h4>

            <Link href="/">
              Home
            </Link>

            <Link href="/career-domains">
              Career Domains
            </Link>

            <Link href="/consultants">
              Consultants
            </Link>

            <Link href="/ai-guide">
              AI Career Guide
            </Link>
          </div>

          <div className="footer-column">
            <h4>Company</h4>

            <Link href="/about">
              About Us
            </Link>

            <Link href="/contact">
              Contact Us
            </Link>

            <Link href="/resources">
              Resources
            </Link>
          </div>

          <div className="footer-column">
            <h4>Support</h4>

            <Link href="/contact">
              Contact Us
            </Link>

            <Link href="/privacy">
              Privacy Policy
            </Link>

            <Link href="/terms">
              Terms of Service
            </Link>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © 2026 Mentro. All rights reserved.
          </p>

          <div className="footer-bottom-links">
            <Link href="/privacy">
              Privacy
            </Link>

            <Link href="/terms">
              Terms
            </Link>

            <Link href="/cookies">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}