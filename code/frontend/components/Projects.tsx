'use client'

import { useState, useEffect, useCallback } from 'react'

interface Project {
  tag: string
  title: string
  meta: string
  body: string
  cta: string
  href: string
  thumbStyle: string
}

const projects: Project[] = [
  {
    tag: 'Web App',
    title: 'TaskFlow — Project Management Tool',
    meta: 'React · Node.js · PostgreSQL · 2024',
    body: 'TaskFlow is a lightweight project management app built for small teams who find existing tools overwhelming. Features include Kanban boards, real-time collaboration via WebSockets, customisable workflows, and a focused mobile experience. Reduced planning overhead by ~40% for the three teams that piloted it.',
    cta: 'View on GitHub',
    href: '#',
    thumbStyle: '--t1:#4F46E5;--t2:#7C3AED',
  },
  {
    tag: 'E-commerce',
    title: 'Bloom — Handmade Ceramics Store',
    meta: 'Next.js · Stripe · Tailwind · 2024',
    body: 'A complete e-commerce storefront for a local ceramics studio. Includes product galleries, custom glaze variations, a cart with session persistence, Stripe checkout with 3DS support, and an admin dashboard for inventory management. Launched in six weeks and reached 200+ orders in the first month.',
    cta: 'View on GitHub',
    href: '#',
    thumbStyle: '--t1:#059669;--t2:#0D9488',
  },
  {
    tag: 'Dashboard',
    title: 'Pulse — Analytics Dashboard',
    meta: 'TypeScript · D3.js · Go · 2023',
    body: 'Pulse is a business analytics dashboard that turns raw event data into actionable charts. Built with a Go ingestion pipeline, a REST + WebSocket API, and a TypeScript frontend with D3.js for custom visualisations. Supports configurable widgets, date range filters, and CSV export.',
    cta: 'View on GitHub',
    href: '#',
    thumbStyle: '--t1:#DC2626;--t2:#EA580C',
  },
]

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const openModal = (index: number) => setActiveIndex(index)
  const closeModal = () => setActiveIndex(null)

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape' && activeIndex !== null) closeModal()
    },
    [activeIndex],
  )

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <div className="sec-head reveal">
          <span className="sec-tag">Selected work</span>
          <h2>Things I&apos;ve built lately</h2>
          <p>
            Three favourites, with more on{' '}
            <button className="link-btn" id="github-link" type="button">
              GitHub
            </button>
            .
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <article key={i} className="project-card card reveal">
              {/* Thumbnail */}
              <div
                className="project-thumb"
                style={{ background: `linear-gradient(135deg, ${project.thumbStyle.replace('--t1:', '').replace('--t2:', ', ')})` }}
                aria-hidden="true"
              >
                <svg viewBox="0 0 320 180" preserveAspectRatio="xMidYMid slice">
                  <defs>
                    <linearGradient
                      id={`pt${i}`}
                      x1="0"
                      y1="0"
                      x2="1"
                      y2="1"
                    >
                      <stop offset="0" stopColor={project.thumbStyle.split('#')[1].split(';')[0]} />
                      <stop offset="1" stopColor={project.thumbStyle.split('#')[2]} />
                    </linearGradient>
                  </defs>
                  <rect width="320" height="180" fill={`url(#pt${i})`} />
                  <circle cx="250" cy="50" r="60" fill="#fff" opacity="0.12" />
                  <path
                    d="M40 150l60-70 44 50 40-30 56 50"
                    stroke="#fff"
                    strokeWidth="4"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    opacity="0.9"
                  />
                  <circle cx="100" cy="80" r="6" fill="#fff" />
                  <circle cx="184" cy="100" r="6" fill="#fff" />
                  <circle cx="240" cy="60" r="6" fill="#fff" />
                </svg>
              </div>

              {/* Body */}
              <div className="project-body">
                <span className="sec-tag">{project.tag}</span>
                <h3>{project.title}</h3>
                <p className="project-meta">{project.meta}</p>
                <p className="project-desc">
                  {project.body.slice(0, 120)}…
                </p>
                <button
                  className="project-link"
                  type="button"
                  onClick={() => openModal(i)}
                >
                  Read case study
                  <svg
                    width="14"
                    height="14"
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
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Modal */}
      {activeIndex !== null && (
        <div
          className="modal-backdrop"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-heading"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeModal()
          }}
        >
          <div className="modal">
            <button
              className="modal-close"
              type="button"
              aria-label="Close modal"
              onClick={closeModal}
              autoFocus
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            <span className="sec-tag">{projects[activeIndex].tag}</span>
            <h2 id="modal-heading">{projects[activeIndex].title}</h2>
            <p className="modal-meta">{projects[activeIndex].meta}</p>
            <p className="modal-body">{projects[activeIndex].body}</p>

            <a
              className="btn btn-primary"
              href={projects[activeIndex].href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {projects[activeIndex].cta}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
              </svg>
            </a>
          </div>
        </div>
      )}

      <style jsx>{`
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .project-card {
          overflow: hidden;
          padding: 0;
          display: flex;
          flex-direction: column;
        }

        .project-thumb {
          width: 100%;
          aspect-ratio: 16/9;
        }

        .project-thumb svg {
          width: 100%;
          height: 100%;
        }

        .project-body {
          padding: 22px 24px 26px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          flex: 1;
        }

        .project-body h3 {
          font-size: 18px;
          font-weight: 700;
          color: var(--color-text);
          line-height: 1.4;
        }

        .project-meta {
          font-size: 13px;
          color: var(--color-text-muted);
          font-weight: 500;
        }

        .project-desc {
          font-size: 14px;
          color: var(--color-text-muted);
          line-height: 1.6;
          flex: 1;
        }

        .project-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 14px;
          font-weight: 600;
          color: var(--color-primary);
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          margin-top: 4px;
          transition: gap var(--duration-fast);
        }

        .project-link:hover {
          gap: 10px;
        }

        .link-btn {
          background: none;
          border: none;
          cursor: pointer;
          font: inherit;
          color: var(--color-primary);
          font-weight: 600;
          padding: 0;
          text-decoration: underline;
          text-underline-offset: 2px;
        }

        /* Modal */
        .modal-meta {
          font-size: 13px;
          color: var(--color-text-muted);
          font-weight: 500;
          margin: 8px 0 16px;
        }

        .modal-body {
          font-size: 15px;
          color: var(--color-text-muted);
          line-height: 1.7;
          margin-bottom: 24px;
        }

        .modal h2 {
          font-size: clamp(22px, 3vw, 28px);
          font-weight: 800;
          color: var(--color-text);
          letter-spacing: -0.02em;
          margin-top: 8px;
        }

        @media (max-width: 1120px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}
