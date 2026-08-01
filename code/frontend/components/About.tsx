/**
 * About section — Server Component.
 * No "use client", no hooks, no event handlers.
 * The .reveal animation is controlled by the shared RevealObserver
 * client component in the page shell.
 */

import styles from './About.module.css'
import { aboutSectionData } from '@/lib/mock/about-section'

const ICONS: Record<string, React.ReactNode> = {
  location: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
  focus: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M3.6 9h16.8M3.6 15h16.8M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
    </svg>
  ),
  heart: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1L12 21l7.7-7.6 1.1-1a5.5 5.5 0 0 0 0-7.8Z" />
    </svg>
  ),
  languages: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 8l6 6M4 14l6-6 2-3M2 5h12M7 2h1M22 22l-5-10-5 10M14 18h6" />
    </svg>
  ),
}

export default function About() {
  const { eyebrow, heading, subCopy, lead, body, facts } = aboutSectionData

  return (
    <section id="about" className="section">
      <div className="container">
        {/* Section header */}
        <div className="sec-head reveal">
          <span className="sec-tag">{eyebrow}</span>
          <h2>{heading}</h2>
          <p>{subCopy}</p>
        </div>

        {/* Two-column grid: illustration left, copy + facts right */}
        <div className={styles.aboutGrid}>
          {/* Decorative illustration */}
          <div className={`${styles.aboutVisual} reveal`} aria-hidden="true">
            <svg viewBox="0 0 480 380" role="img" aria-label="Decorative illustration">
              <defs>
                <linearGradient id="gAbout" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#4F46E5" />
                  <stop offset="1" stopColor="#F59E0B" />
                </linearGradient>
              </defs>
              <rect x="24" y="24" width="432" height="332" rx="24" fill="#EEF2FF" />
              <circle cx="240" cy="170" r="86" fill="url(#gAbout)" opacity="0.92" />
              <circle cx="240" cy="170" r="86" fill="none" stroke="#FFFFFF" strokeWidth="6" />
              <circle cx="196" cy="126" r="14" fill="#FFFFFF" opacity="0.95" />
              <circle cx="284" cy="126" r="14" fill="#FFFFFF" opacity="0.95" />
              <path d="M196 210q44 46 88 0" stroke="#FFFFFF" strokeWidth="7" fill="none" strokeLinecap="round" />
              <circle cx="240" cy="170" r="104" fill="none" stroke="#4F46E5" strokeWidth="3" strokeDasharray="6 10" opacity="0.5" />
              <rect x="74" y="290" width="332" height="18" rx="9" fill="#C7D2FE" />
              <rect x="110" y="318" width="260" height="18" rx="9" fill="#C7D2FE" opacity="0.55" />
            </svg>
          </div>

          {/* Copy + facts */}
          <div className={styles.aboutCopy}>
            <p className={styles.aboutLead}>{lead}</p>
            {body.map((text, i) => (
              <p key={i} className={styles.aboutBody}>{text}</p>
            ))}

            <ul className={styles.facts}>
              {facts.map((fact) => (
                <li key={fact.label} className={styles.fact}>
                  <span className={styles.factIcon}>
                    {ICONS[fact.icon]}
                  </span>
                  <span className={styles.factContent}>
                    <span className={styles.factLabel}>{fact.label}</span>
                    <br />
                    {fact.value}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
