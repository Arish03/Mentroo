import Link from "next/link";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-container">
        <Link href="/" className="logo">
          <span className="logo-mark">M</span>
          <span>Mentroo</span>
        </Link>

        <nav className="nav-links">
          <Link href="/" className="active">
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

          <Link href="/about">
            About
          </Link>
        </nav>

        <div className="nav-actions">
          <button className="theme-button" aria-label="Theme">
            ◔
          </button>

          <Link href="/login" className="login-link">
            Login
          </Link>

          <Link href="/get-started" className="nav-button">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}