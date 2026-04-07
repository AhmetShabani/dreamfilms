import { Navbar, Nav, Container } from 'react-bootstrap'
import '../assets/styles/navbar.css'

function NavBar() {
  return (
    <Navbar expand="lg" fixed="top" className="dreamfilms-nav">
      <Container>
        <Navbar.Brand href="#home" className="brand-logo">
          DREAMFILMS<span className="brand-accent">▪</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-nav" className="custom-toggler" />
        <Navbar.Collapse id="main-nav">
          <Nav className="ms-auto align-items-lg-center gap-lg-3">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
            <Nav.Link href="#contact" >Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar