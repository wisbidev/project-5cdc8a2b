/**
 * Mock data contract for the About section.
 * Shape matches the API response expected by the UI layer.
 * The BE stage must satisfy this contract exactly.
 */

export interface Fact {
  label: string
  value: string
  icon: 'location' | 'focus' | 'heart' | 'languages'
}

export interface AboutSectionData {
  eyebrow: string
  heading: string
  subCopy: string
  lead: string
  body: [string, string]
  facts: Fact[]
}

export const aboutSectionData: AboutSectionData = {
  eyebrow: 'About me',
  heading: 'A little bit about who I am',
  subCopy: 'The short version — and the slightly longer one.',
  lead: "I'm Minh An — a web developer and designer based in Ho Chi Minh City.",
  body: [
    "For the past three years I've helped startups and small teams shape their ideas into products: mapping out what to build, designing the screens, and shipping the code. I care about the details most people never notice — the half-second animation, the error message that explains itself, the button that feels right to click.",
    "When I'm not at the keyboard, you'll find me with a camera in hand, exploring the city's backstreets, or hunting down the best coffee in town.",
  ],
  facts: [
    { label: 'Location', value: 'Ho Chi Minh City, Vietnam', icon: 'location' },
    { label: 'Focus', value: 'Web development & product design', icon: 'focus' },
    { label: 'Currently', value: 'Open to new opportunities', icon: 'heart' },
    { label: 'Languages', value: 'Vietnamese, English', icon: 'languages' },
  ],
}
