import { Container, Row, Col } from 'react-bootstrap'
import '../assets/styles/services.css'

function Services() {
  return (
    <section className="services-section" id="services">
      <Container>
        <Row className="justify-content-center text-center mb-5">
          <Col lg={6}>
            <p className="section-tagline">What We Do</p>
            <h2 className="services-title">
              OUR <span className="text-accent">SERVICES</span>
            </h2>
          </Col>
        </Row>
        <Row className="g-4">
          <Col lg={4} md={6}>
            <div className="service-card">
              <div className="service-icon">🎬</div>
              <h4 className="service-name">Film Production</h4>
              <p className="service-desc">
                From short films to full features, we handle every stage
                of production with a cinematic eye.
              </p>
            </div>
          </Col>
          <Col lg={4} md={6}>
            <div className="service-card">
              <div className="service-icon">🎵</div>
              <h4 className="service-name">Music Videos</h4>
              <p className="service-desc">
                High-energy, visually stunning music videos that match
                your sound and elevate your brand as an artist.
              </p>
            </div>
          </Col>
          <Col lg={4} md={6}>
            <div className="service-card">
              <div className="service-icon">✂️</div>
              <h4 className="service-name">Post Production</h4>
              <p className="service-desc">
                Editing, color grading, and sound design that give your
                project the final polish it deserves.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Services