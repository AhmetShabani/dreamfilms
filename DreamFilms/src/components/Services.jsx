import { Container, Row, Col } from 'react-bootstrap'
import '../assets/styles/services.css'
import { services } from '../data/Menu'

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
          {services.map(({ id, icon, title, desc }) => (
            <Col lg={4} md={6} key={id}>
              <div className="service-card">
                <div className="service-icon">{icon}</div>
                <h4 className="service-name">{title}</h4>
                <p className="service-desc">{desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Services