import { Container, Row, Col } from 'react-bootstrap'
import { FaInstagram, FaFacebookF, FaYoutube } from 'react-icons/fa'
import '../assets/styles/footer.css'

function Footer() {
  const socials = [
    { icon: <FaInstagram />, href: 'https://instagram.com/dreamfilms.ks', label: 'Instagram' },
    { icon: <FaFacebookF />, href: 'https://www.facebook.com/DreamFilms.ks', label: 'Facebook' },
    { icon: <FaYoutube />, href: 'https://youtube.com/', label: 'YouTube' },
  ]

  return (
    <footer className="footer-section">
      <Container>
        <Row className="footer-top g-4">

          {/* Brand */}
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

          {/* Navigation */}
          <Col lg={2} md={4} xs={6}>
            <h6 className="footer-heading">Navigation</h6>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </Col>

          {/* Services */}
          <Col lg={3} md={4} xs={6}>
            <h6 className="footer-heading">Services</h6>
            <ul className="footer-links">
              <li><a href="#services">Film Production</a></li>
              <li><a href="#services">Music Videos</a></li>
              <li><a href="#services">Post Production</a></li>
            </ul>
          </Col>

          {/* Contact */}
          <Col lg={3} md={4} xs={12}>
            <h6 className="footer-heading">Contact</h6>
            <ul className="footer-links footer-contact">
              <li>📍 Prishtina, Kosovo</li>
              <li>📞 +383 00 000 000</li>
              <li>✉️ hello@dreamfilms.com</li>
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