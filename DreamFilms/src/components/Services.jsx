import { Container, Row, Col } from 'react-bootstrap'
import '../assets/styles/services.css'

const services = [
  {
    id: 1,
    icon: '🎬',
    title: 'Film Production',
    desc: 'From short films to full features, we handle every stage of production with a cinematic eye.',
  },
  {
    id: 2,
    icon: '🎵',
    title: 'Music Videos',
    desc: 'High-energy, visually stunning music videos that match your sound and elevate your brand as an artist.',
  },
  {
    id: 3,
    icon: '✂️',
    title: 'Post Production',
    desc: 'Editing, color grading, and sound design that give your project the final polish it deserves.',
  },
  {
    id: 4,
    icon: '📱',
    title: 'Content Creation',
    desc: 'Engaging short-form content for social media platforms crafted to grow your brand and reach your audience.',
  },
  {
    id: 5,
    icon: '🎥',
    title: 'Live Production',
    desc: 'Professional live recording and coverage of concerts, political events, conferences and more.',
  },
  {
    id: 6,
    icon: '🎥💡🎚️',
    title: 'Equipment Rental',
    desc: 'Professional grade cameras, lighting and grip equipment available for rent with or without crew.',
  },
]

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