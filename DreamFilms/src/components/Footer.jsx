import { Container, Row, Col } from 'react-bootstrap'
import '../styles/footer.css'

function Footer() {
  return (
    <footer className="footer-section">
      <Container>
        <Row className="footer-top">
          <Col lg={4} md={6} className="mb-4 mb-lg-0">
            <h4 className="footer-logo">
              DREAMFILMS<span className="footer-accent">▪</span>
            </h4>
            <p className="footer-desc">
              A creative production company specializing in films and music
              videos. We turn ideas into visual stories.
            </p>
          </Col>
          <Col lg={2} md={6} className="mb-4 mb-lg-0">
            <h6 className="footer-heading">Navigation</h6>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </Col>
          <Col lg={3} md={6} className="mb-4 mb-lg-0">
            <h6 className="footer-heading">Services</h6>
            <ul className="footer-links">
              <li><a href="#services">Film Production</a></li>
              <li><a href="#services">Music Videos</a></li>
              <li><a href="#services">Post Production</a></li>
            </ul>
          </Col>
          <Col lg={3} md={6}>
            <h6 className="footer-heading">Contact</h6>
            <ul className="footer-links footer-contact">
              <li>📍 Prishtina, Kosovo</li>
              <li>📞 +383 00 000 000</li>
              <li>✉️ hello@dreamfilms.com</li>
            </ul>
            <div className="footer-socials">
              <a href="#">IG</a>
              <a href="#">YT</a>
              <a href="#">FB</a>
            </div>
          </Col>
        </Row>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} DreamFilms. All Rights Reserved.</p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer