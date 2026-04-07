import { Container, Row, Col } from 'react-bootstrap'
import '../styles/contact.css'

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <Container>
        <Row className="justify-content-center text-center mb-5">
          <Col lg={6}>
            <p className="section-tagline">Get In Touch</p>
            <h2 className="contact-title">
              LET'S CREATE <span className="text-accent">TOGETHER</span>
            </h2>
            <p className="contact-subtitle">
              Have a project in mind? We'd love to hear about it.
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col lg={8}>
            <div className="contact-form-wrapper">
              <Row className="g-4">
                <Col md={6}>
                  <input
                    type="text"
                    className="contact-input"
                    placeholder="Your Name"
                  />
                </Col>
                <Col md={6}>
                  <input
                    type="email"
                    className="contact-input"
                    placeholder="Your Email"
                  />
                </Col>
                <Col md={12}>
                  <input
                    type="text"
                    className="contact-input"
                    placeholder="Subject"
                  />
                </Col>
                <Col md={12}>
                  <textarea
                    className="contact-input contact-textarea"
                    placeholder="Tell us about your project..."
                    rows={5}
                  />
                </Col>
                <Col md={12} className="text-center">
                  <button className="btn-primary-custom contact-btn">
                    Send Message
                  </button>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Contact