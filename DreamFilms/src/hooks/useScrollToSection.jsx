import { useNavigate, useLocation } from 'react-router-dom'

function useScrollToSection() {
  const navigate = useNavigate()
  const location = useLocation()

  const scrollToSection = (id) => {
    if (location.pathname === '/') {
      // Already on home, just scroll
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      // Go home first, then scroll after page loads
      navigate('/')
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }

  return scrollToSection
}

export default useScrollToSection