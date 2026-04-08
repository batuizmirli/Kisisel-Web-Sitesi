import { Suspense, lazy } from 'react'
import './App.css'
import { ToastContainer } from 'react-toastify'

const Header = lazy(() => import('./components/Header'))
const HeroSection = lazy(() => import('./components/HeroSection'))
const AboutSection = lazy(() => import('./components/AboutSection'))
const SkillsSection = lazy(() => import('./components/SkillsSection'))
const ProjectsSection = lazy(() => import('./components/ProjectsSection'))
const Footer = lazy(() => import('./components/Footer'))

function SectionLoader() {
  return <div className="section-loader" role="status" aria-live="polite">Loading...</div>
}

function App() {
  return (
    <>
      <Suspense fallback={<SectionLoader />}>
        <Header />
      </Suspense>
      <main>
        <Suspense fallback={<SectionLoader />}>
          <HeroSection />
          <SkillsSection />
          <AboutSection />
          <ProjectsSection />
        </Suspense>
      </main>
      <Suspense fallback={<SectionLoader />}>
        <Footer />
      </Suspense>
      <ToastContainer position="bottom-right" autoClose={2500} theme="colored" />
    </>
  )
}

export default App
