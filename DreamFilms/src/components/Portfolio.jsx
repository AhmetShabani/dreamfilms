import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../assets/styles/portfolio.css'
import { projects } from '../data/Menu'


function Portfolio() {
  return (
    <section className="portfolio-section" id="portfolio">
      <Container>

        {/* Header */}
        <Row className="justify-content-center text-center mb-5">
          <Col lg={6} md={8} xs={12}>
            <p className="section-tagline">Our Work</p>
            <h2 className="portfolio-title">
              LATEST <span className="text-accent">PROJECTS</span>
            </h2>
          </Col>
        </Row>

        {/* Grid */}
        <Row className="g-3 g-md-4">
          {projects.map((project) => (
            <Col lg={4} md={6} xs={12} key={project.id}>
              <div className="portfolio-card">
                <img
                  src={project.image}
                  alt={project.title}
                  className="portfolio-image"
                />
                <div className="portfolio-overlay">
                  <span className="portfolio-type">{project.type}</span>
                  <h5 className="portfolio-name">{project.title}</h5>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        {/* See More */}
        <Row className="mt-5">
          <Col xs={12} className="text-center">
            <Link to="/portfolio" className="btn-primary-custom" onClick={() => {window.scrollTo(0, 0)}}>
              See More
            </Link>
          </Col>
        </Row>

      </Container>
    </section>
  )
}

export default Portfolio