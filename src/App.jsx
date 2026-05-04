import { LangProvider } from './context/LangContext'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Education from './components/Education'
import Footer from './components/Footer'

export default function App() {
  return (
    <LangProvider>
      <Nav />
      <Hero />
      <Experience />
      <Skills />
      <Education />
      <Footer />
    </LangProvider>
  )
}
