import { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaHome, FaArrowLeft } from 'react-icons/fa'
import Footer from '../components/Footer'
import '../assets/styles/portfoliopage.css'
import {allProjects} from "../data/Menu"

const filters = ['All', 'Film', 'Music Video']

function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = activeFilter === 'All'
    ? allProjects
    : allProjects.filter((p) => p.type === activeFilter)

  return (
    <div className="portfolio-page">

      {/* Hero */}
      <div className="portfolio-page-hero">
        <Container>
          <Link to="/" className="back-link">
            <FaArrowLeft /> <FaHome /> Home
          </Link>
          <div className="portfolio-hero-center">
            <p className="section-tagline">Our Work</p>
            <h1 className="portfolio-page-title">
              SOME OF OUR <span className="text-accent">PROJECTS</span>
            </h1>
          </div>
        </Container>
      </div>

      {/* Filter */}
      <div className="portfolio-page-filter">
        <Container>
          <div className="filter-buttons">
            {filters.map((f) => (
              <button
                key={f}
                className={`filter-btn ${activeFilter === f ? 'active' : ''}`}
                onClick={() => setActiveFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>
        </Container>
      </div>

      {/* Grid */}
      <Container className="portfolio-page-grid">
        <Row className="g-3 g-md-4">
          {filtered.map((project) => (
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
      </Container>

      <Footer />
    </div>
  )
}

export default PortfolioPage