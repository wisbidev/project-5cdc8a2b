import RevealObserver from './RevealObserver'
import { fetchSkills } from '../lib/mock/skills-section'
import styles from './Skills.module.css'

export default async function Skills() {
  const skills = await fetchSkills()

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="sec-head reveal">
          <span className="sec-tag">Skills</span>
          <h2>What I bring to the table</h2>
          <p>
            A mix of craft, process, and the soft skills that keep teams moving.
          </p>
        </div>

        <RevealObserver>
          <div className={styles.grid}>
            {skills.map((skill) => (
              <article key={skill.title} className="card skill-card reveal">
                <span className={styles.icon} aria-hidden="true">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {/* Each icon's path is stored as a space-separated polyline/path string */}
                    {skill.iconPath.split('M').filter(Boolean).map((segment, i) => (
                      <path
                        key={i}
                        d={i === 0 ? `M${segment}` : `M${segment}`}
                      />
                    ))}
                  </svg>
                </span>
                <h3>{skill.title}</h3>
                <p>{skill.description}</p>
              </article>
            ))}
          </div>
        </RevealObserver>
      </div>
    </section>
  )
}
