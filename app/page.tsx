import Hero from "./components/hero"
import About from "./components/about"
import Skills from "./components/skills"
import Projects from "./components/projects"
import CodewarsServices from "./components/codewars-services"
import ProcessTimeline from "./components/process-timeline"
import Testimonials from "./components/testimonials"
import Contact from "./components/contact"
import Footer from "./components/footer"
import Navigation from "./components/Navigation"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <CodewarsServices />
      <ProcessTimeline />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </main>
  )
}
