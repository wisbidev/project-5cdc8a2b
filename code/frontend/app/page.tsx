// Page shell — a Server Component that composes section children.
// Every interactive section (mobile menu, form, modal, toast,
// scroll-reveal) is its own client component imported here.

import SkipLink from '@/components/SkipLink'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Toast from '@/components/Toast'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <>
      <SkipLink />
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Toast />
      <Footer />
    </>
  )
}
