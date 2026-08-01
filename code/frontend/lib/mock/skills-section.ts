export interface Skill {
  title: string
  description: string
  /** Inline SVG JSX element string — stored as string for JSON serialisability */
  iconPath: string
}

const skills: Skill[] = [
  {
    title: 'Web Development',
    description:
      'Clean, accessible front-ends with Next.js, TypeScript and Tailwind — and the Go backends to power them.',
    iconPath:
      'M16 18l6-6-6-6M8 6l-6 6 6 6',
  },
  {
    title: 'UI / UX Design',
    description:
      'Interface design grounded in real content and real user flows, from wireframe to polished mockup.',
    iconPath:
      'M12 19l7-7 3 3-7 7-3-3zM18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5zM2 2l7.586 7.586M11 11a2 2 0 1 1 0-4 2 2 0 0 1 0 4z',
  },
  {
    title: 'Communication',
    description:
      'Clear writing and calm explaining — turning technical trade-offs into decisions everyone understands.',
    iconPath:
      'M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z',
  },
  {
    title: 'Problem Solving',
    description:
      'Breaking messy problems into small, testable pieces — then shipping them one at a time.',
    iconPath: 'M4 4h16v16H4zM9 9h6M9 13h6M9 17h3',
  },
  {
    title: 'Team Leadership',
    description:
      'Guiding small product teams — scoping work, unblocking people, and keeping the goal in focus.',
    iconPath:
      'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75',
  },
  {
    title: 'Continuous Learning',
    description:
      'An evening course, a new framework, a side project that goes nowhere — it all feeds the work.',
    iconPath: 'M22 12h-4l-3 9L9 3l-3 9H2',
  },
]

export async function fetchSkills(): Promise<Skill[]> {
  // Simulate network latency in dev; replace with real fetch() in BE stage
  return new Promise((resolve) => setTimeout(() => resolve(skills), 0))
}

export type { Skill }
