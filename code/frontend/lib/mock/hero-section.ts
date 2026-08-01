/**
 * Mock data for the Hero section.
 * Shape mirrors the API contract the backend must satisfy.
 * Replace this module with real API calls in the backend story.
 */

export interface HeroData {
  name: string
  eyebrow: string
  tagline: string
  description: string
  ctaPrimary: {
    label: string
    href: string
    ariaLabel: string
  }
  ctaSecondary: {
    label: string
    href: string
    ariaLabel: string
  }
  avatar: {
    initials: string
    status: string
    yearsExperience: string
  }
  stats: Array<{
    value: string
    label: string
  }>
}

export const mockHeroData: HeroData = {
  name: 'Nguyen Minh An',
  eyebrow: "Hi there, I'm",
  tagline:
    'I craft clean, friendly web experiences — from first idea to shipped product.',
  description:
    "Product-minded developer with a designer's eye. I turn vague ideas into focused, well-crafted websites and tools that people actually enjoy using.",
  ctaPrimary: {
    label: 'Get in touch',
    href: '#contact',
    ariaLabel: 'Scroll to the contact section',
  },
  ctaSecondary: {
    label: 'See my work',
    href: '#projects',
    ariaLabel: 'Scroll to the projects section',
  },
  avatar: {
    initials: 'An',
    status: 'Open to work',
    yearsExperience: '3+ years experience',
  },
  stats: [
    { value: '3+', label: 'Years of experience' },
    { value: '15+', label: 'Projects shipped' },
    { value: '∞', label: 'Cups of coffee' },
  ],
}
