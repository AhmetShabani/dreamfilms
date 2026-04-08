import { Navbar, Nav, Container } from 'react-bootstrap'
import { FaInstagram, FaFacebookF, FaYoutube } from 'react-icons/fa'
import useScrollToSection from '../hooks/useScrollToSection'
import '../assets/styles/navbar.css'

const socials = [
  { icon: <FaInstagram />, href: 'https://instagram.com/yourhandle', label: 'Instagram' },
  { icon: <FaFacebookF />, href: 'https://facebook.com/yourpage', label: 'Facebook' },
  { icon: <FaYoutube />, href: 'https://youtube.com/yourchannel', label: 'YouTube' },
]

const navLinks = [
  { label: 'About', id: 'about' },
  { label: 'Services', id: 'services' },
  { label: 'Portfolio', id: 'portfolio' },
  { label: 'Contact Us', id: 'contact' },
]

function NavBar() {
  const scrollToSection = useScrollToSection()

  return (
    <Navbar expand="lg" fixed="top" className="dreamfilms-nav">
      <Container>
        <Navbar.Brand
          onClick={() => scrollToSection('home')}
          className="brand-logo"
          style={{ cursor: 'pointer' }}
        >
          DREAMFILMS
          <img
            src="/favicon.png"
            alt="DreamFilms Logo"
            className="brand-logo-img"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-nav" className="custom-toggler" />
        <Navbar.Collapse id="main-nav">
          <Nav className="ms-auto align-items-lg-center gap-lg-3">
            {navLinks.map(({ label, id }) => (
              <Nav.Link
                key={id}
                onClick={() => scrollToSection(id)}
                style={{ cursor: 'pointer' }}
              >
                {label}
              </Nav.Link>
            ))}
          </Nav>

          <div className="nav-socials">
            {socials.map(({ icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="nav-social-icon"
              >
                {icon}
              </a>
            ))}
          </div>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar