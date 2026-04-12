import { useState, useEffect, useRef } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Showreel from './components/Showreel'
import About from './components/About'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'
import PortfolioPage from './pages/PortfolioPage'
import LoadingScreen from './components/LoadingScreen'
import RentPage from './pages/RentPage'
import Rent from './components/Rent'

function App() {
  const [loading, setLoading] = useState(true)
  const [visible, setVisible] = useState(true)
  const navRef = useRef(null)

  useEffect(() => {
    const fadeTimer = setTimeout(() => setLoading(false), 1500)
    const removeTimer = setTimeout(() => setVisible(false), 2000)
    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(removeTimer)
    }
  }, [])

  return (
    <BrowserRouter>
      {visible && <LoadingScreen fadeOut={!loading} navRef={navRef} />}
      <NavBar ref={navRef} />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Showreel />
            <About />
            <Services />
            <Portfolio />
            <Rent />
            <Contact />
            <Footer />
          </>
        } />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/rent" element={<RentPage />} />
        <Route path="/rent/:category" element={<RentPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App