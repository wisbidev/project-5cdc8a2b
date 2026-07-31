'use client'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-brand">
            <a className="brand" href="#hero">
              <span className="brand-dot" />
              Giới thiệu bản thân
            </a>
            <p className="footer-copy">
              Crafted with care in Ho Chi Minh City.
            </p>
          </div>

          <nav className="footer-nav" aria-label="Footer">
            <a href="#hero">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>

          <a href="#hero" className="back-to-top" aria-label="Back to top">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
            Back to top
          </a>
        </div>

        <div className="footer-bottom">
          <p>© {year} Nguyen Minh An. All rights reserved.</p>
        </div>
      </div>

      <style jsx>{`
        .site-footer {
          border-top: 1px solid var(--color-border);
          padding: 40px 0 32px;
          background: var(--color-surface);
        }

        .footer-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          flex-wrap: wrap;
        }

        .brand {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-weight: 800;
          font-size: 16px;
          letter-spacing: -0.01em;
          color: var(--color-text);
        }

        .brand-dot {
          width: 11px;
          height: 11px;
          border-radius: 50%;
          background: linear-gradient(
            135deg,
            var(--color-primary),
            var(--color-accent)
          );
          box-shadow: 0 0 0 3px var(--color-primary-soft);
          flex-shrink: 0;
        }

        .footer-copy {
          font-size: 13px;
          color: var(--color-text-muted);
          margin-top: 4px;
        }

        .footer-nav {
          display: flex;
          align-items: center;
          gap: 4px;
          flex-wrap: wrap;
        }

        .footer-nav a {
          font-size: 14px;
          font-weight: 500;
          color: var(--color-text-muted);
          padding: 6px 12px;
          border-radius: 999px;
          transition: color var(--duration-fast), background var(--duration-fast);
        }

        .footer-nav a:hover {
          color: var(--color-primary);
          background: var(--color-primary-soft);
        }

        .footer-bottom {
          margin-top: 28px;
          padding-top: 20px;
          border-top: 1px solid var(--color-border);
        }

        .footer-bottom p {
          font-size: 13px;
          color: var(--color-text-muted);
        }

        @media (max-width: 768px) {
          .footer-inner {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </footer>
  )
}
