'use client'

import { useState, useRef } from 'react'
import styles from './Contact.module.css'
import { contactData } from '@/lib/mock/contact-section'
import { showToast } from './Toast'

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

function validateEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

const SOCIAL_TOAST_MESSAGES: Record<string, string> = {
  github:
    'GitHub link is a placeholder — paste your profile URL here or in the design.',
  linkedin:
    'LinkedIn link is a placeholder — paste your profile URL here or in the design.',
  twitter:
    'Twitter / X link is a placeholder — paste your profile URL here or in the design.',
}

function IconGithub() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  )
}

function IconLinkedIn() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  )
}

function IconTwitter() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function IconMail() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  )
}

function IconArrow() {
  return (
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
  )
}

export default function Contact() {
  const { section, owner, socials, form } = contactData

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)

  const nameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const messageRef = useRef<HTMLTextAreaElement>(null)

  const validate = (): FormErrors => {
    const errs: FormErrors = {}
    if (!name.trim()) errs.name = 'Please tell me your name.'
    if (!email.trim()) {
      errs.email = 'Please enter a valid email address.'
    } else if (!validateEmail(email.trim())) {
      errs.email = 'Please enter a valid email address.'
    }
    if (!message.trim()) errs.message = 'Please write a short message.'
    return errs
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    setErrors(errs)

    if (Object.keys(errs).length > 0) {
      if (errs.name) {
        nameRef.current?.focus()
      } else if (errs.email) {
        emailRef.current?.focus()
      } else if (errs.message) {
        messageRef.current?.focus()
      }
      return
    }

    // Compose mailto link
    const subject = encodeURIComponent(`Hello from ${name.trim()}`)
    const body = encodeURIComponent(
      `Hi An,\n\n${message.trim()}\n\nBest,\n${name.trim()} (${email.trim()})`,
    )
    window.location.href = `mailto:${owner.email}?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  const handleSocialClick = (id: string) => {
    const msg = SOCIAL_TOAST_MESSAGES[id]
    if (msg) showToast(msg)
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        {/* Section header */}
        <div className="sec-head reveal">
          <span className="sec-tag">{section.eyebrow}</span>
          <h2>{section.heading}</h2>
          <p>{section.subheading}</p>
        </div>

        {/* Two-column grid */}
        <div className={`${styles.grid} reveal`}>
          {/* Form column */}
          <div className={styles.formWrap}>
            <form
              className={styles.form}
              noValidate
              onSubmit={handleSubmit}
              aria-label="Contact form"
            >
              {/* Name */}
              <div className={`field${errors.name ? ' invalid' : ''} ${styles.fieldGroup}`}>
                <label className={styles.fieldLabel} htmlFor="contact-name">
                  {form.fields[0].label}{' '}
                  <span className={styles.fieldRequired} aria-label="required">*</span>
                </label>
                <input
                  id="contact-name"
                  type="text"
                  className="field-input"
                  placeholder={form.fields[0].placeholder}
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value)
                    if (errors.name) setErrors((p) => ({ ...p, name: undefined }))
                  }}
                  required
                  autoComplete="name"
                  ref={nameRef}
                />
                {errors.name && (
                  <p className="field-error" role="alert">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div className={`field${errors.email ? ' invalid' : ''} ${styles.fieldGroup}`}>
                <label className={styles.fieldLabel} htmlFor="contact-email">
                  {form.fields[1].label}{' '}
                  <span className={styles.fieldRequired} aria-label="required">*</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  className="field-input"
                  placeholder={form.fields[1].placeholder}
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    if (errors.email) setErrors((p) => ({ ...p, email: undefined }))
                  }}
                  required
                  autoComplete="email"
                  ref={emailRef}
                />
                {errors.email && (
                  <p className="field-error" role="alert">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Message */}
              <div className={`field${errors.message ? ' invalid' : ''} ${styles.fieldGroup}`}>
                <label className={styles.fieldLabel} htmlFor="contact-message">
                  {form.fields[2].label}{' '}
                  <span className={styles.fieldRequired} aria-label="required">*</span>
                </label>
                <textarea
                  id="contact-message"
                  className="field-input"
                  rows={5}
                  placeholder={form.fields[2].placeholder}
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value)
                    if (errors.message) setErrors((p) => ({ ...p, message: undefined }))
                  }}
                  required
                  ref={messageRef}
                />
                {errors.message && (
                  <p className="field-error" role="alert">
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className={`btn btn-primary ${styles.submitBtn}`}
                disabled={submitted}
              >
                {submitted ? 'Sent!' : form.submitLabel}
                {!submitted && <IconArrow />}
              </button>

              {submitted && (
                <div className={styles.success} role="status">
                  {form.successMessage}{' '}
                  <a
                    href={`mailto:${owner.email}`}
                    className={styles.successLink}
                  >
                    {owner.email}
                  </a>
                  .
                </div>
              )}
            </form>
          </div>

          {/* Info column */}
          <div className={styles.info}>
            {/* Email card */}
            <div className={styles.infoCard}>
              <h3 className={styles.infoCardHeading}>Direct contact</h3>
              <a href={`mailto:${owner.email}`} className={styles.emailLink}>
                <IconMail />
                {owner.email}
              </a>
            </div>

            {/* Social links card */}
            <div className={styles.infoCard}>
              <h3 className={styles.infoCardHeading}>Find me online</h3>
              <div className={styles.socials}>
                {socials.map((social) => (
                  <button
                    key={social.id}
                    type="button"
                    className={styles.socialLink}
                    onClick={() => handleSocialClick(social.id)}
                    aria-label={`${social.label} profile (placeholder)`}
                  >
                    {social.icon === 'github' && <IconGithub />}
                    {social.icon === 'linkedin' && <IconLinkedIn />}
                    {social.icon === 'twitter' && <IconTwitter />}
                    {social.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
