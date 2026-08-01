'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { showToast } from './Toast'

interface Project {
  tag: string
  title: string
  meta: string
  problem: string
  approach: string
  result: string
  cta: string
  thumbStyle: string
}

const projects: Project[] = [
  {
    tag: 'Web App',
    title: 'TaskFlow — Project Management Tool',
    meta: 'React · Node.js · PostgreSQL · 2024',
    problem:
      'Small teams struggle with existing project management tools that are either too complex or lack the features they actually need day-to-day.',
    approach:
      'Built a lightweight Kanban board with real-time collaboration via WebSockets, customisable workflows, and a focused mobile-first experience.',
    result:
      'Reduced planning overhead by ~40% for the three teams that piloted it, and the app has been in active use since launch.',
    cta: 'Discuss a project',
    thumbStyle: '--t1:#4F46E5;--t2:#7C3AED',
  },
  {
    tag: 'E-commerce',
    title: 'Bloom — Handmade Ceramics Store',
    meta: 'Next.js · Stripe · Tailwind · 2024',
    problem:
      'A local ceramics studio had no online presence and relied entirely on in-person sales, limiting reach to foot traffic only.',
    approach:
      'Designed and shipped a full storefront with product galleries, custom glaze variation selectors, session-persisted cart, and Stripe checkout with 3DS support.',
    result:
      'Reached 200+ orders in the first month and enabled the studio to reach customers well beyond their neighbourhood.',
    cta: 'Discuss a project',
    thumbStyle: '--t1:#059669;--t2:#0D9488',
  },
  {
    tag: 'Dashboard',
    title: 'Pulse — Analytics Dashboard',
    meta: 'TypeScript · D3.js · Go · 2023',
    problem:
      'Business stakeholders were making decisions from raw event logs with no easy way to visualise trends or export data for reporting.',
    approach:
      'Delivered a Go ingestion pipeline feeding a REST + WebSocket API, backed by a TypeScript frontend using D3.js for custom interactive charts with configurable widgets.',
    result:
      'Teams can now explore data by date range, add widgets to taste, and export CSVs — decision cycles shortened measurably.',
    cta: 'Discuss a project',
    thumbStyle: '--t1:#DC2626;--t2:#EA580C',
  },
]

const TRAP_TAGS = ['BUTTON', 'ANCHOR', 'INPUT', 'TEXTAREA', 'SELECT', 'SUMMARY']

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const triggerRef = useRef<HTMLButtonElement | null>(null)
  const modalRef = useRef<HTMLDivElement>(null)

  const openModal = (index: number) => {
    triggerRef.current = document.activeElement as HTMLButtonElement | null
    setActiveIndex(index)
  }

  const closeModal = () => {
    setActiveIndex(null)
    // Restore focus to the card button that opened the modal
    setTimeout(() => {
      triggerRef.current?.focus()
    }, 0)
  }

  // Escape key closes the modal
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape' && activeIndex !== null) {
        e.preventDefault()
        closeModal()
      }
    },
    [activeIndex],
  )

  // Focus trap: cycle Tab within the modal
  const handleModalKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key !== 'Tab' || !modalRef.current) return
      const focusable = Array.from(
        modalRef.current.querySelectorAll<HTMLElement>(
          TRAP_TAGS.map((t) => t.toLowerCase()).join(','),
        ),
      ).filter((el) => !el.hasAttribute('disabled'))

      if (focusable.length === 0) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault()
          last.focus()
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    },
    [],
  )

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  // Auto-focus the close button when modal opens
  useEffect(() => {
    if (activeIndex !== null) {
      const closeBtn = modalRef.current?.querySelector<HTMLButtonElement>('.modal-close')
      closeBtn?.focus()
    }
  }, [activeIndex])

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <div className="sec-head reveal">
          <span className="sec-tag">Selected work</span>
          <h2>Things I&apos;ve built lately</h2>
          <p>
            Three favourites, with more on{' '}
            <button
              className="link-btn"
              id="github-link"
              type="button"
              onClick={() => showToast('GitHub profile coming soon!')}
            >
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
                style={{
                  background: `linear-gradient(135deg, ${project.thumbStyle
                    .replace('--t1:', '')
                    .replace('--t2:', ', ')})`,
                }}
                aria-hidden="true"
              >
                <svg viewBox="0 0 320 180" preserveAspectRatio="xMidYMid slice">
                  <defs>
                    <linearGradient id={`pt${i}`} x1="0" y1="0" x2="1" y2="1">
                      <stop
                        offset="0"
                        stopColor={project.thumbStyle.split('#')[1]?.split(';')[0]}
                      />
                      <stop
                        offset="1"
                        stopColor={project.thumbStyle.split('#')[2]}
                      />
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
                  {project.problem.slice(0, 120)}…
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
          <div
            className="modal"
            ref={modalRef}
            onKeyDown={handleModalKeyDown}
          >
            <button
              className="modal-close"
              type="button"
              aria-label="Close modal"
              onClick={closeModal}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            <span className="sec-tag">{projects[activeIndex].tag}</span>
            <h2 id="modal-heading">{projects[activeIndex].title}</h2>
            <p className="modal-meta">{projects[activeIndex].meta}</p>

            <p>
              <strong>Problem: </strong>
              {projects[activeIndex].problem}
            </p>
            <p>
              <strong>Approach: </strong>
              {projects[activeIndex].approach}
            </p>
            <p>
              <strong>Result: </strong>
              {projects[activeIndex].result}
            </p>

            <a
              className="btn btn-primary"
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                closeModal()
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              {projects[activeIndex].cta}
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

        .modal > :global(p) {
          font-size: 15px;
          color: var(--color-text-muted);
          line-height: 1.7;
          margin-bottom: 14px;
        }

        .modal > :global(p:last-of-type) {
          margin-bottom: 24px;
        }

        .modal > :global(p strong) {
          color: var(--color-text);
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
