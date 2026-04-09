import { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import { FaArrowLeft, FaHome } from 'react-icons/fa'
import Footer from '../components/Footer'
import '../assets/styles/rentpage.css'

const equipment = [
  // Camera
  {
    id: 1,
    category: 'Camera',
    name: 'Sony FX6',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&q=80',
  },
  {
    id: 2,
    category: 'Camera',
    name: 'Canon EOS C70',
    image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=600&q=80',
  },
  {
    id: 3,
    category: 'Camera',
    name: 'Blackmagic Pocket 6K',
    image: 'https://images.unsplash.com/photo-1598387846148-47e82ee120cc?w=600&q=80',
  },
  {
    id: 4,
    category: 'Camera',
    name: 'DJI Ronin 4D',
    image: 'https://images.unsplash.com/photo-1533425962313-37e15d2e4f87?w=600&q=80',
  },

  // Lighting
  {
    id: 5,
    category: 'Lighting',
    name: 'Aputure 600D',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
  },
  {
    id: 6,
    category: 'Lighting',
    name: 'Nanlite Forza 500',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&q=80',
  },
  {
    id: 7,
    category: 'Lighting',
    name: 'LED Panel RGB',
    image: 'https://images.unsplash.com/photo-1504509546545-e000b4a62425?w=600&q=80',
  },
  {
    id: 8,
    category: 'Lighting',
    name: 'Softbox Kit',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80',
  },

  // Grip
  {
    id: 9,
    category: 'Grip',
    name: 'DJI RS3 Pro Gimbal',
    image: 'https://images.unsplash.com/photo-1617005082133-548c4dd27f35?w=600&q=80',
  },
  {
    id: 10,
    category: 'Grip',
    name: 'Carbon Fiber Tripod',
    image: 'https://images.unsplash.com/photo-1519638399535-1b036603ac77?w=600&q=80',
  },
  {
    id: 11,
    category: 'Grip',
    name: 'Slider 100cm',
    image: 'https://images.unsplash.com/photo-1598387993441-a364f854c3e1?w=600&q=80',
  },
  {
    id: 12,
    category: 'Grip',
    name: 'Dana Dolly Kit',
    image: 'https://images.unsplash.com/photo-1576153192621-7a3be10b356e?w=600&q=80',
  },
]

const filters = ['All', 'Camera', 'Lighting', 'Grip']

function RentPage() {
  const { category } = useParams()
  const [activeFilter, setActiveFilter] = useState('All')

  useEffect(() => {
    if (category) {
      const matched = filters.find(
        (f) => f.toLowerCase() === category.toLowerCase()
      )
      if (matched) setActiveFilter(matched)
    } else {
      setActiveFilter('All')
    }
  }, [category])

  const filtered = activeFilter === 'All'
    ? equipment
    : equipment.filter((e) => e.category === activeFilter)

  return (
    <div className="rent-page">

      {/* Hero */}
      <div className="rent-page-hero">
        <Container>
          <Link to="/" className="back-link">
            <FaArrowLeft /> <FaHome /> Home
          </Link>
          <div className="rent-hero-center">
            <p className="section-tagline">Equipment</p>
            <h1 className="rent-page-title">
              RENT OUR <span className="text-accent">GEAR</span>
            </h1>
            <p className="rent-page-subtitle">
              Professional grade equipment available for your next production.
            </p>
          </div>
        </Container>
      </div>

      {/* Filter */}
      <div className="rent-page-filter">
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
      <Container className="rent-page-grid">
        <Row className="g-3 g-md-4">
          {filtered.map((item) => (
            <Col lg={3} md={4} sm={6} xs={12} key={item.id}>
              <div className="rent-card">
                <div className="rent-card-img-wrapper">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="rent-card-img"
                  />
                  <div className="rent-card-category">{item.category}</div>
                </div>
                <div className="rent-card-info">
                  <h5 className="rent-card-name">{item.name}</h5>
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

export default RentPage