'use client'

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-grid">
          {/* Text side */}
          <div className="hero-copy">
            <span className="eyebrow">👋 Hi there, I&apos;m</span>
            <h1>
              Nguyen Minh <span className="text-primary">An</span>
            </h1>
            <p className="tagline">
              I craft clean, friendly web experiences — from first idea to shipped
              product.
            </p>
            <p className="hero-sub">
              Product-minded developer with a designer&apos;s eye. I turn vague
              ideas into focused, well-crafted websites and tools that people
              actually enjoy using.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#contact">
                Get in touch
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
              <a className="btn btn-ghost" href="#projects">
                See my work
              </a>
            </div>
          </div>

          {/* Visual side */}
          <div className="hero-visual" aria-hidden="true">
            <div className="ring ring-1" />
            <div className="ring ring-2" />
            <div className="avatar">An</div>
            <div className="chip chip-1">
              <span className="dot" />
              Open to work
            </div>
            <div className="chip chip-2">3+ years experience</div>
          </div>
        </div>

        {/* Stats row */}
        <div className="hero-stats reveal">
          <div className="stat">
            <strong>3+</strong>
            <span>Years of experience</span>
          </div>
          <div className="stat">
            <strong>15+</strong>
            <span>Projects shipped</span>
          </div>
          <div className="stat">
            <strong>∞</strong>
            <span>Cups of coffee</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero {
          padding: 72px 0 40px;
          position: relative;
          overflow: hidden;
        }

        .hero::before {
          content: '';
          position: absolute;
          inset: 0;
          pointer-events: none;
          background:
            radial-gradient(600px 300px at 85% -10%, rgba(79, 70, 229, 0.10), transparent 60%),
            radial-gradient(500px 260px at 0% 20%, rgba(245, 158, 11, 0.08), transparent 60%);
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 48px;
          align-items: center;
          position: relative;
        }

        .hero-copy h1 {
          font-size: clamp(40px, 6vw, 64px);
          line-height: 1.08;
          letter-spacing: -0.03em;
          font-weight: 800;
          color: var(--color-text);
        }

        .tagline {
          font-size: clamp(18px, 2.4vw, 24px);
          font-weight: 600;
          color: var(--color-text);
          margin-top: 16px;
        }

        .hero-sub {
          color: var(--color-text-muted);
          font-size: 16.5px;
          max-width: 520px;
          margin-top: 12px;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 32px;
        }

        .hero-visual {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 380px;
        }

        .avatar {
          width: 240px;
          height: 240px;
          border-radius: 50%;
          background: linear-gradient(
            135deg,
            #eef2ff 0%,
            #e0e7ff 60%,
            #fef3c7 100%
          );
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-size: 64px;
          color: var(--color-primary);
          box-shadow: var(--shadow-md), inset 0 0 0 8px rgba(255, 255, 255, 0.65);
          animation: float 6s ease-in-out infinite;
          border: 1px solid rgba(79, 70, 229, 0.15);
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-14px); }
        }

        .ring {
          position: absolute;
          border-radius: 50%;
          border: 2px dashed rgba(79, 70, 229, 0.25);
          animation: spin 30s linear infinite;
        }

        .ring-1 {
          width: 320px;
          height: 320px;
        }

        .ring-2 {
          width: 400px;
          height: 400px;
          animation-duration: 44s;
          border-color: rgba(245, 158, 11, 0.25);
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .chip {
          position: absolute;
          display: flex;
          align-items: center;
          gap: 8px;
          background: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: 999px;
          padding: 10px 18px;
          font-size: 14px;
          font-weight: 600;
          box-shadow: var(--shadow-sm);
          animation: float 5s ease-in-out infinite;
        }

        .chip-1 {
          top: 6%;
          right: 2%;
        }

        .chip-2 {
          bottom: 10%;
          left: 0;
          animation-delay: 1.4s;
        }

        .dot {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: #22c55e;
          box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.22);
          flex-shrink: 0;
        }

        .hero-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-top: 64px;
          background: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-card);
          box-shadow: var(--shadow-sm);
          padding: 28px 32px;
        }

        .stat {
          text-align: center;
        }

        .stat strong {
          display: block;
          font-size: 30px;
          letter-spacing: -0.02em;
          color: var(--color-primary);
        }

        .stat span {
          font-size: 14px;
          color: var(--color-text-muted);
          font-weight: 500;
        }

        @media (max-width: 860px) {
          .hero {
            padding: 48px 0 32px;
          }

          .hero-grid {
            grid-template-columns: 1fr;
            gap: 48px;
            text-align: center;
          }

          .hero-sub {
            margin-left: auto;
            margin-right: auto;
          }

          .hero-actions {
            justify-content: center;
          }

          .hero-visual {
            min-height: 340px;
          }

          .hero-stats {
            grid-template-columns: 1fr;
            padding: 22px;
          }

          .stat {
            padding: 6px 0;
          }
        }
      `}</style>
    </section>
  )
}
