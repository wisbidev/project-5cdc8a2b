/**
 * Hero section — Server Component.
 * No "use client" directive: scroll uses CSS scroll-behavior: smooth,
 * which the design system handles via prefers-reduced-motion in globals.css.
 * All styling is in Hero.module.css (scoped) and globals.css (tokens).
 */
import styles from './Hero.module.css'
import { mockHeroData } from '@/lib/mock/hero-section'

export default function Hero() {
  const data = mockHeroData

  return (
    <section id="hero" className={styles.hero}>
      <div className="container">
        <div className={styles.heroGrid}>
          {/* Copy — left / top */}
          <div className={styles.copy}>
            <p className={styles.eyebrow}>👋 {data.eyebrow}</p>
            <h1 className={styles.heading}>
              {data.name.split(' ').slice(0, -1).join(' ')}{' '}
              <span className="text-primary">{data.name.split(' ').at(-1)}</span>
            </h1>
            <p className={styles.tagline}>{data.tagline}</p>
            <p className={styles.description}>{data.description}</p>

            <div className={styles.actions}>
              <a
                className="btn btn-primary"
                href={data.ctaPrimary.href}
                aria-label={data.ctaPrimary.ariaLabel}
              >
                {data.ctaPrimary.label}
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
              <a
                className="btn btn-ghost"
                href={data.ctaSecondary.href}
                aria-label={data.ctaSecondary.ariaLabel}
              >
                {data.ctaSecondary.label}
              </a>
            </div>
          </div>

          {/* Visual — right / bottom */}
          <div className={styles.visual} aria-hidden="true">
            <div className={`${styles.ring} ${styles.ring1}`} />
            <div className={`${styles.ring} ${styles.ring2}`} />
            <div className={styles.avatar}>{data.avatar.initials}</div>
            <div className={`${styles.chip} ${styles.chip1}`}>
              <span className={styles.dot} />
              {data.avatar.status}
            </div>
            <div className={`${styles.chip} ${styles.chip2}`}>
              {data.avatar.yearsExperience}
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className={styles.stats}>
          {data.stats.map((stat) => (
            <div key={stat.label} className={styles.stat}>
              <strong className={styles.statValue}>{stat.value}</strong>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
