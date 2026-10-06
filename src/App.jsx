import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Lenis from 'lenis'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Events from './components/Events'
import Schedule from './components/Schedule'
import Gallery from './components/Gallery'
import Updates from './components/Updates'
import Registration from './components/Registration'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import ParticleBackground from './components/ParticleBackground'
import LoadingScreen from './components/LoadingScreen'
import './App.css'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    const timer = setTimeout(() => setIsLoading(false), 2500)
    return () => {
      lenis.destroy()
      clearTimeout(timer)
    }
  }, [])

  return (
    <Router>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen key="loader" />}
      </AnimatePresence>

      {!isLoading && (
        <div className="app">
          <ParticleBackground />
          <ScrollToTop />
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={
                <>
                  <Hero />
                  <About />
                  <Events />
                  <Schedule />
                  <Gallery />
                  <Updates />
                  <Registration />
                  <Contact />
                </>
              } />
            </Routes>
          </main>
          <Footer />
        </div>
      )}
    </Router>
  )
}

export default App