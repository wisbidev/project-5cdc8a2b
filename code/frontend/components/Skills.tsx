const skills = [
  {
    title: 'Web Development',
    body: 'Clean, accessible front-ends with Next.js, TypeScript and Tailwind — and the Go backends to power them.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    title: 'UI / UX Design',
    body: 'Interface design grounded in real content and real user flows, from wireframe to polished mockup.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 19l7-7 3 3-7 7-3-3z" />
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        <path d="M2 2l7.586 7.586" />
        <circle cx="11" cy="11" r="2" />
      </svg>
    ),
  },
  {
    title: 'Communication',
    body: 'Clear writing and calm explaining — turning technical trade-offs into decisions everyone understands.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
  },
  {
    title: 'Problem Solving',
    body: 'Breaking messy problems into small, testable pieces — then shipping them one at a time.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="4" y="4" width="16" height="16" rx="4" />
        <path d="M9 9h6M9 13h6M9 17h3" />
      </svg>
    ),
  },
  {
    title: 'Team Leadership',
    body: 'Guiding small product teams — scoping work, unblocking people, and keeping the goal in focus.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: 'Continuous Learning',
    body: 'An evening course, a new framework, a side project that goes nowhere — it all feeds the work.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
]

export default function Skills() {
  return (
    <section id="skills" className="skills section">
      <div className="container">
        <div className="sec-head reveal">
          <span className="sec-tag">Skills</span>
          <h2>What I bring to the table</h2>
          <p>
            A mix of craft, process, and the soft skills that keep teams moving.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((skill) => (
            <article key={skill.title} className="skill-card card reveal">
              <span className="skill-icon" aria-hidden="true">
                {skill.icon}
              </span>
              <h3>{skill.title}</h3>
              <p>{skill.body}</p>
            </article>
          ))}
        </div>
      </div>

      <style jsx>{`
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .skill-card {
          padding: 28px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .skill-icon {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--color-primary-soft);
          border-radius: var(--radius-md);
          color: var(--color-primary);
          flex-shrink: 0;
        }

        .skill-card h3 {
          font-size: 18px;
          font-weight: 700;
          color: var(--color-text);
          line-height: 1.4;
        }

        .skill-card p {
          font-size: 15px;
          color: var(--color-text-muted);
          line-height: 1.65;
        }

        @media (max-width: 1120px) {
          .skills-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .skills-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}
