import { Container, Row, Col } from 'react-bootstrap'
import { FaInstagram, FaFacebookF } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import '../assets/styles/footer.css'
import { socials } from '../data/Menu'

function Footer() {
  return (
    <footer className="footer-section">
      <Container>
        <Row className="footer-top g-4">

          <Col lg={4} md={12} xs={12}>
            <div className="footer-logo">
              DREAMFILMS
              <img src="/favicon.png" alt="DreamFilms Logo" className="footer-logo-img" />
            </div>
            <p className="footer-desc">
              A creative production company specializing in films and music
              videos. We turn ideas into visual stories.
            </p>
          </Col>

          <Col lg={2} md={4} xs={6}>
            <h6 className="footer-heading">Navigation</h6>
            <ul className="footer-links">
              <li><Link to="/#home">Home</Link></li>
              <li><Link to="/#about">About</Link></li>
              <li><Link to="/#services">Services</Link></li>
              <li><Link to="/#portfolio">Portfolio</Link></li>
              <li><Link to="/#contact">Contact</Link></li>
              <li><Link to="/rent">Rent</Link></li>
            </ul>
          </Col>

          <Col lg={3} md={4} xs={6}>
            <h6 className="footer-heading">Services</h6>
            <ul className="footer-links">
              <li><Link to="/#services">Film Production</Link></li>
              <li><Link to="/#services">Music Videos</Link></li>
              <li><Link to="/#services">Post Production</Link></li>
              <li><Link to="/#services">Content Creation</Link></li>
              <li><Link to="/#services">Live Production</Link></li>
              <li><Link to="/rent">Equipment Rental</Link></li>
            </ul>
          </Col>

          <Col lg={3} md={4} xs={12}>
            <h6 className="footer-heading">Contact</h6>
            <ul className="footer-links footer-contact">
              <li>📍 Prishtina, Kosovo</li>
              <li>📞 +383 48 222 858</li>
              <li>✉️ info@dreamfilms-ks.com</li>
            </ul>
            <div className="footer-socials">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
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