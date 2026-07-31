'use client'

import { useState } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <nav className="nav container" aria-label="Primary">
        <a className="brand" href="#hero">
          <span className="brand-dot" />
          Giới thiệu bản thân
        </a>

        {/* Desktop nav */}
        <ul className="nav-links">
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <a className="btn btn-primary btn-sm nav-cta" href="#contact">
          Let&apos;s talk
        </a>

        {/* Mobile hamburger */}
        <button
          className={`menu-toggle${menuOpen ? ' open' : ''}`}
          id="menu-toggle"
          aria-label="Open menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`} id="mobile-menu">
        <a href="#hero" onClick={() => setMenuOpen(false)}>Home</a>
        <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
        <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        <a className="btn btn-primary" href="#contact" onClick={() => setMenuOpen(false)}>
          Let&apos;s talk
        </a>
      </div>

      <style jsx>{`
        .site-header {
          position: sticky;
          top: 0;
          z-index: 100;
          background: rgba(249, 250, 251, 0.85);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--color-border);
        }

        .nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 70px;
          gap: 16px;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 800;
          font-size: 17px;
          letter-spacing: -0.01em;
          color: var(--color-text);
        }

        .brand-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
          box-shadow: 0 0 0 4px var(--color-primary-soft);
          flex-shrink: 0;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .nav-links a {
          font-size: 15px;
          font-weight: 500;
          color: var(--color-text-muted);
          padding: 8px 14px;
          border-radius: 999px;
          transition: color var(--duration-fast), background var(--duration-fast);
        }

        .nav-links a:hover {
          color: var(--color-text);
          background: var(--color-primary-soft);
        }

        .nav-links a.active {
          color: var(--color-primary);
          font-weight: 700;
        }

        .nav-cta {
          margin-left: 6px;
        }

        .menu-toggle {
          display: none;
          width: 44px;
          height: 44px;
          border-radius: 10px;
          border: 1px solid var(--color-border);
          background: var(--color-surface);
          cursor: pointer;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 5px;
        }

        .menu-toggle span {
          width: 20px;
          height: 2px;
          background: var(--color-text);
          border-radius: 2px;
          transition: transform var(--duration-slow) var(--easing),
                      opacity var(--duration-slow);
        }

        .menu-toggle.open span:nth-child(1) {
          transform: translateY(7px) rotate(45deg);
        }

        .menu-toggle.open span:nth-child(2) {
          opacity: 0;
        }

        .menu-toggle.open span:nth-child(3) {
          transform: translateY(-7px) rotate(-45deg);
        }

        .mobile-menu {
          display: none;
          flex-direction: column;
          padding: 8px 24px 20px;
          gap: 4px;
          border-top: 1px solid var(--color-border);
          background: var(--color-bg);
        }

        .mobile-menu.open {
          display: flex;
        }

        .mobile-menu a {
          padding: 13px 12px;
          border-radius: 12px;
          font-weight: 600;
          font-size: 16px;
          color: var(--color-text);
        }

        .mobile-menu a:hover {
          background: var(--color-primary-soft);
          color: var(--color-primary);
        }

        .mobile-menu .btn {
          margin-top: 10px;
        }

        @media (max-width: 860px) {
          .nav-links,
          .nav-cta {
            display: none;
          }
          .menu-toggle {
            display: flex;
          }
        }
      `}</style>
    </header>
  )
}
