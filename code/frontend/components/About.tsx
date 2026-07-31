'use client'

export default function About() {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="sec-head reveal">
          <span className="sec-tag">About me</span>
          <h2>A little bit about who I am</h2>
          <p>The short version — and the slightly longer one.</p>
        </div>

        <div className="about-grid">
          {/* Decorative illustration */}
          <div className="about-visual reveal" aria-hidden="true">
            <svg viewBox="0 0 480 380" role="img" aria-label="Decorative illustration">
              <defs>
                <linearGradient id="gA" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#4F46E5" />
                  <stop offset="1" stopColor="#F59E0B" />
                </linearGradient>
              </defs>
              <rect x="24" y="24" width="432" height="332" rx="24" fill="#EEF2FF" />
              <circle cx="240" cy="170" r="86" fill="url(#gA)" opacity="0.92" />
              <circle cx="240" cy="170" r="86" fill="none" stroke="#FFFFFF" strokeWidth="6" />
              <circle cx="196" cy="126" r="14" fill="#FFFFFF" opacity="0.95" />
              <circle cx="284" cy="126" r="14" fill="#FFFFFF" opacity="0.95" />
              <path d="M196 210q44 46 88 0" stroke="#FFFFFF" strokeWidth="7" fill="none" strokeLinecap="round" />
              <circle cx="240" cy="170" r="104" fill="none" stroke="#4F46E5" strokeWidth="3" strokeDasharray="6 10" opacity="0.5" />
              <rect x="74" y="290" width="332" height="18" rx="9" fill="#C7D2FE" />
              <rect x="110" y="318" width="260" height="18" rx="9" fill="#C7D2FE" opacity="0.55" />
            </svg>
          </div>

          {/* Copy */}
          <div className="about-copy reveal">
            <p className="about-lead">
              I&apos;m Minh An — a web developer and designer based in Ho Chi
              Minh City.
            </p>
            <p className="about-body">
              For the past three years I&apos;ve helped startups and small teams
              shape their ideas into products: mapping out what to build,
              designing the screens, and shipping the code. I care about the
              details most people never notice — the half-second animation, the
              error message that explains itself, the button that feels right to
              click.
            </p>
            <p className="about-body">
              When I&apos;m not at the keyboard, you&apos;ll find me with a
              camera in hand, exploring the city&apos;s backstreets, or hunting
              down the best coffee in town.
            </p>

            <ul className="facts">
              <li className="fact">
                <span className="fact-icon" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <span>
                  <strong>Location</strong>
                  <br />
                  Ho Chi Minh City, Vietnam
                </span>
              </li>
              <li className="fact">
                <span className="fact-icon" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M3.6 9h16.8M3.6 15h16.8M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
                  </svg>
                </span>
                <span>
                  <strong>Focus</strong>
                  <br />
                  Web development &amp; product design
                </span>
              </li>
              <li className="fact">
                <span className="fact-icon" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1L12 21l7.7-7.6 1.1-1a5.5 5.5 0 0 0 0-7.8Z" />
                  </svg>
                </span>
                <span>
                  <strong>Currently</strong>
                  <br />
                  Open to new opportunities
                </span>
              </li>
              <li className="fact">
                <span className="fact-icon" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 8l6 6M4 14l6-6 2-3M2 5h12M7 2h1M22 22l-5-10-5 10M14 18h6" />
                  </svg>
                </span>
                <span>
                  <strong>Languages</strong>
                  <br />
                  Vietnamese, English
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          gap: 48px;
          align-items: start;
        }

        .about-visual svg {
          width: 100%;
          height: auto;
        }

        .about-lead {
          font-size: 22px;
          font-weight: 700;
          line-height: 1.3;
          color: var(--color-text);
          margin-bottom: 20px;
        }

        .about-body {
          font-size: 15px;
          line-height: 1.65;
          color: var(--color-text-muted);
          margin-bottom: 16px;
        }

        .facts {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin-top: 24px;
        }

        .fact {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          background: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-card);
          padding: 14px 16px;
          box-shadow: var(--shadow-sm);
          transition:
            transform var(--duration-base) var(--easing),
            box-shadow var(--duration-base) var(--easing),
            border-color var(--duration-fast);
        }

        .fact:hover {
          transform: translateY(-3px);
          box-shadow: var(--shadow-md);
          border-color: rgba(79, 70, 229, 0.35);
        }

        .fact-icon {
          color: var(--color-primary);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .fact span {
          font-size: 14px;
          color: var(--color-text-muted);
          line-height: 1.5;
        }

        .fact strong {
          font-weight: 700;
          color: var(--color-text);
        }

        @media (max-width: 960px) {
          .about-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .facts {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}
