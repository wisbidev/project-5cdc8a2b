/**
 * Mock data for the Contact section.
 * Shape matches what the BE API would return (static project — no API).
 * Replace the owner and social values before launch.
 */

export interface ContactData {
  section: {
    eyebrow: string
    heading: string
    subheading: string
  }
  owner: {
    email: string
  }
  socials: SocialLink[]
  form: {
    fields: FormField[]
    submitLabel: string
    successMessage: string
  }
}

export interface SocialLink {
  id: string
  label: string
  href: string
  /** Icon key — rendered as inline SVG in the component. */
  icon: 'github' | 'linkedin' | 'twitter'
}

export interface FormField {
  id: string
  label: string
  type: 'text' | 'email' | 'textarea'
  placeholder: string
  required: boolean
  autocomplete?: string
}

export const contactData: ContactData = {
  section: {
    eyebrow: 'Contact',
    heading: "Let's talk",
    subheading:
      'Have an idea, a project, or just want to say hello? My inbox is always open.',
  },
  owner: {
    email: 'hello@example.com',
  },
  socials: [
    {
      id: 'github',
      label: 'GitHub',
      href: '#',
      icon: 'github',
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      href: '#',
      icon: 'linkedin',
    },
    {
      id: 'twitter',
      label: 'Twitter / X',
      href: '#',
      icon: 'twitter',
    },
  ],
  form: {
    fields: [
      {
        id: 'contact-name',
        label: 'Name',
        type: 'text',
        placeholder: 'Your name',
        required: true,
        autocomplete: 'name',
      },
      {
        id: 'contact-email',
        label: 'Email',
        type: 'email',
        placeholder: 'your@email.com',
        required: true,
        autocomplete: 'email',
      },
      {
        id: 'contact-message',
        label: 'Message',
        type: 'textarea',
        placeholder: 'What would you like to talk about?',
        required: true,
      },
    ],
    submitLabel: 'Send message',
    successMessage:
      'Your email app should have opened. If not, email me directly at',
  },
}
