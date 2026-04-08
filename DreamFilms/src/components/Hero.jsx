import { Container, Row, Col } from 'react-bootstrap'
import '../assets/styles/hero.css'

function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-overlay" />
      <Container className="hero-content">
        <Row className="min-vh-100 align-items-center">
          <Col lg={8} md={10} xs={12}>
            <p className="hero-tagline">Film & Music Production</p>
            <h1 className="hero-title">
              WE BRING YOUR <br />
              <span className="hero-accent">VISION</span> TO LIFE
            </h1>
            <p className="hero-description">
              From cinematic films to high-energy music videos, we craft
              visual stories that leave a lasting impression.
            </p>
            <div className="hero-buttons">
              <a href="#portfolio" className="btn-primary-custom">
                View Our Work
              </a>
              <a href="#contact" className="btn-outline-custom">
                Get In Touch
              </a>
            </div>
          </Col>
        </Row>

        <div className="hero-stats">
          <div className="stat-item">
            <h3>50<span className="stat-accent">+</span></h3>
            <p>Films Produced</p>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <h3>120<span className="stat-accent">+</span></h3>
            <p>Music Videos</p>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <h3>8<span className="stat-accent">+</span></h3>
            <p>Years of Experience</p>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <h3>200<span className="stat-accent">+</span></h3>
            <p>Happy Clients</p>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Hero