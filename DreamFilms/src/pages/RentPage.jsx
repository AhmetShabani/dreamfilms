import { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import { FaArrowLeft, FaHome, FaSearch } from 'react-icons/fa'
import Footer from '../components/Footer'
import '../assets/styles/rentpage.css'
import { equipment, filters } from '../data/Menu'

function RentPage() {
  const { category } = useParams()
  const [activeFilter, setActiveFilter] = useState('All')
  const [search, setSearch] = useState('')
  const [expandedCategories, setExpandedCategories] = useState({})

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

  const toggleExpand = (cat) => {
    setExpandedCategories((prev) => ({ ...prev, [cat]: !prev[cat] }))
  }

  const handleCategoryClick = (cat) => {
    setActiveFilter(cat)
    setSearch('')
    setExpandedCategories({})
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const baseFiltered = activeFilter === 'All'
    ? equipment
    : equipment.filter((e) => e.category === activeFilter)

  const searched = search.trim() === ''
    ? baseFiltered
    : baseFiltered.filter((e) =>
        e.name.toLowerCase().includes(search.toLowerCase()) ||
        e.category.toLowerCase().includes(search.toLowerCase())
      )

  const grouped = filters
    .filter((f) => f !== 'All')
    .map((cat) => ({
      category: cat,
      items: searched.filter((e) => e.category === cat),
    }))
    .filter((g) => g.items.length > 0)

  const isAllView = activeFilter === 'All'

  const renderCard = (item) => (
    <Col lg={3} md={4} sm={6} xs={12} key={item.id} className="d-flex">
      <div className="rent-card w-100">
        <div className="rent-card-img-wrapper">
          <img src={item.image} alt={item.name} className="rent-card-img" />
          <div className="rent-card-category">{item.category}</div>
        </div>
        <div className="rent-card-info">
          <h5 className="rent-card-name">{item.name}</h5>
        </div>
      </div>
    </Col>
  )

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

      {/* Filter + Search */}
      <div className="rent-page-filter">
        <Container>
          <div className="filter-search-row">
            <div className="filter-buttons">
              {filters.map((f) => (
                <button
                  key={f}
                  className={`filter-btn ${activeFilter === f ? 'active' : ''}`}
                  onClick={() => { setActiveFilter(f); setSearch(''); setExpandedCategories({}) }}
                >
                  {f}
                </button>
              ))}
            </div>
            <div className="rent-search-wrapper">
              <FaSearch className="rent-search-icon" />
              <input
                type="text"
                className="rent-search-input"
                placeholder="Search equipment..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
        </Container>
      </div>

      {/* Grid */}
      <Container className="rent-page-grid">

        {/* Search results — flat list, no limit */}
        {search.trim() !== '' && (
          <>
            <p className="rent-results-count">
              {searched.length} result{searched.length !== 1 ? 's' : ''} for "{search}"
            </p>
            <Row className="g-3 g-md-4">
              {searched.length > 0
                ? searched.map(renderCard)
                : <Col xs={12}><p className="rent-no-results">No equipment found.</p></Col>
              }
            </Row>
          </>
        )}

        {/* All view — grouped, max 4 per category */}
        {search.trim() === '' && isAllView && grouped.map(({ category, items }) => {
          const isExpanded = expandedCategories[category]
          const visibleItems = isExpanded ? items : items.slice(0, 4)
          const hasMore = items.length > 4

          return (
            <div key={category} className="rent-category-section">
              <div className="rent-category-header">
                <h4 className="rent-category-title">{category}</h4>
                <button
                  className="rent-category-filter-link"
                  onClick={() => handleCategoryClick(category)}
                >
                  View All ({items.length}) →
                </button>
              </div>
              <Row className="g-3 g-md-4">
                {visibleItems.map(renderCard)}
              </Row>
              {hasMore && (
                <div className="rent-show-more">
                  <button
                    className="rent-show-more-btn"
                    onClick={() => toggleExpand(category)}
                  >
                    {isExpanded
                      ? 'Show Less ↑'
                      : `Show More (${items.length - 4} more) ↓`
                    }
                  </button>
                </div>
              )}
            </div>
          )
        })}

        {/* Single category view — show all */}
        {search.trim() === '' && !isAllView && (
          <Row className="g-3 g-md-4">
            {searched.map(renderCard)}
          </Row>
        )}

      </Container>

      <Footer />
    </div>
  )
}

export default RentPage