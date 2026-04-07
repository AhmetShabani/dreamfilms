import { Container, Row, Col } from 'react-bootstrap'
import '../styles/about.css'

function About() {
  return (
    <section className="about-section" id="about">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="about-image-col">
            <div className="about-image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1524712245354-2c4e5e7121c0?w=800&q=80"
                alt="DreamFilms behind the scenes"
                className="about-image"
              />
              <div className="about-image-accent" />
            </div>
          </Col>
          <Col lg={6} className="about-text-col">
            <p className="section-tagline">Who We Are</p>
            <h2 className="about-title">
              STORYTELLING <br />THROUGH THE <br />
              <span className="text-accent">LENS</span>
            </h2>
            <p className="about-description">
              DreamFilms is a creative production company specializing in
              films and music videos. We combine technical expertise with
              artistic vision to deliver content that moves people.
            </p>
            <a href="#services" className="btn-primary-custom">
              What We Do
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default About