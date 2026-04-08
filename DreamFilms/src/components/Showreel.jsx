import '../assets/styles/showreel.css'

function Showreel() {
  return (
    <section className="showreel-section" id="showreel">
      <video
        className="showreel-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/showreel.mp4" type="video/mp4" />
      </video>
      <div className="showreel-overlay">
        <div className="showreel-content">
          <p className="section-tagline">Our Showreel</p>
          <h2 className="showreel-title">
            SEE THE <span className="text-accent">WORK</span>
          </h2>
        </div>
      </div>
    </section>
  )
}

export default Showreel