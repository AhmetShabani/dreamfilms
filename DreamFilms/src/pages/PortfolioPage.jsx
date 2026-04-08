import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../assets/styles/portfoliopage.css'

const allProjects = [
  {
    id: 1,
    type: 'Film',
    title: 'Into The Shadows',
    image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&q=80',
  },
  {
    id: 2,
    type: 'Music Video',
    title: 'Neon Nights',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80',
  },
  {
    id: 3,
    type: 'Film',
    title: 'The Last Frame',
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80',
  },
  {
    id: 4,
    type: 'Music Video',
    title: 'Pulse',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=80',
  },
  {
    id: 5,
    type: 'Film',
    title: 'Broken Silence',
    image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&q=80',
  },
  {
    id: 6,
    type: 'Music Video',
    title: 'Rise Up',
    image: 'https://images.unsplash.com/photo-1429514513361-8fa32282fd5f?w=800&q=80',
  },
  {
    id: 7,
    type: 'Film',
    title: 'Silent Roads',
    image: 'https://images.unsplash.com/photo-1500099817043-86d46000d58f?w=800&q=80',
  },
  {
    id: 8,
    type: 'Music Video',
    title: 'Dark Hours',
    image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&q=80',
  },
  {
    id: 9,
    type: 'Film',
    title: 'The Return',
    image: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=800&q=80',
  },
]

function PortfolioPage() {
  return (
    <div className="portfolio-page">
      <div className="portfolio-page-hero">
        <Container>
          <Link to="/" className="back-link">← Back to Home</Link>
          <p className="section-tagline">Our Work</p>
          <h1 className="portfolio-page-title">
            ALL <span className="text-accent">PROJECTS</span>
          </h1>
        </Container>
      </div>

      <div className="portfolio-page-filter">
        <Container>
          <div className="filter-buttons">
            <button className="filter-btn active">All</button>
            <button className="filter-btn">Films</button>
            <button className="filter-btn">Music Videos</button>
          </div>
        </Container>
      </div>

      <Container className="portfolio-page-grid">
        <Row className="g-4">
          {allProjects.map((project) => (
            <Col lg={4} md={6} key={project.id}>
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

import Footer from '../components/Footer'
export default PortfolioPage