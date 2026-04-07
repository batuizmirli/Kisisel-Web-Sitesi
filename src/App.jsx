import './App.css'
import { ToastContainer } from 'react-toastify'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import SkillsSection from './components/SkillsSection'
import ProjectsSection from './components/ProjectsSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <SkillsSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
      <ToastContainer position="bottom-right" autoClose={2500} theme="colored" />
    </>
  )
}

export default App
