import { forwardRef, useState, useRef } from 'react'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { FaInstagram, FaFacebookF, FaYoutube } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import useScrollToSection from '../hooks/useScrollToSection'
import '../assets/styles/navbar.css'

const socials = [
  { icon: <FaInstagram />, href: 'https://instagram.com/dreamfilms.ks', label: 'Instagram' },
  { icon: <FaFacebookF />, href: 'https://www.facebook.com/DreamFilms.ks', label: 'Facebook' },
  { icon: <FaYoutube />, href: 'https://youtube.com/', label: 'YouTube' },
]

const navLinks = [
  { label: 'About', id: 'about' },
  { label: 'Services', id: 'services' },
  { label: 'Portfolio', id: 'portfolio' },
  { label: 'Contact Us', id: 'contact' },
]

const rentItems = [
  { label: 'Camera', path: '/rent/camera' },
  { label: 'Lighting', path: '/rent/lighting' },
  { label: 'Grip', path: '/rent/grip' },
]

const NavBar = forwardRef((props, ref) => {
  const scrollToSection = useScrollToSection()
  const navigate = useNavigate()
  const [rentOpen, setRentOpen] = useState(false)
  const timeoutRef = useRef(null)

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setRentOpen(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setRentOpen(false)
    }, 200)
  }

  return (
    <Navbar expand="lg" fixed="top" className="dreamfilms-nav">
      <Container>
        <Navbar.Brand
          ref={ref}
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
            <div
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <NavDropdown
                title="Rent"
                id="rent-dropdown"
                className="rent-dropdown"
                show={rentOpen}
                onClick={() => navigate('/rent')}
              >
                {rentItems.map(({ label, path }) => (
                  <NavDropdown.Item
                    key={label}
                    as={Link}
                    to={path}
                    className="rent-dropdown-item"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {label}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
            </div>
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
})

export default NavBar