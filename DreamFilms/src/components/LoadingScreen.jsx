import { useEffect, useState } from 'react'
import '../assets/styles/loadingscreen.css'

function LoadingScreen({ navRef, fadeOut }) {
  const [moveUp, setMoveUp] = useState(false)
  const [targetPos, setTargetPos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    if (navRef?.current) {
      const rect = navRef.current.getBoundingClientRect()
      const centerX = window.innerWidth / 2
      const centerY = window.innerHeight / 2
      setTargetPos({
        x: rect.left + rect.width / 2 - centerX,
        y: rect.top + rect.height / 2 - centerY,
      })
    }
    const moveTimer = setTimeout(() => setMoveUp(true), 1000)
    return () => clearTimeout(moveTimer)
  }, [navRef])

  return (
    <div className={`loading-screen ${fadeOut ? 'fade-out' : ''}`}>
      <div
        className={`loading-logo-wrapper ${moveUp ? 'move-up' : ''}`}
        style={moveUp ? {
          transform: `translateX(${targetPos.x}px) translateY(${targetPos.y}px)`,
          opacity: 0,
        } : {}}
      >
        <h1 className="loading-logo-text">DREAMFILMS</h1>
        <img src="/favicon.png" alt="DreamFilms" className="loading-logo-img" />
      </div>
    </div>
  )
}

export default LoadingScreen