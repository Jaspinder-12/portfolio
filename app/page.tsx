import Hero from '@/app/components/Hero'
import About from '@/app/components/About'
import Skills from '@/app/components/Skills'
import Experience from '@/app/components/Experience'
import Projects from '@/app/components/Projects'
import GitHubStats from '@/app/components/GitHubStats'
import Resume from '@/app/components/Resume'
import Testimonials from '@/app/components/Testimonials'
import Contact from '@/app/components/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <GitHubStats />
      <Resume />
      <Testimonials />
      <Contact />
    </>
  )
}
