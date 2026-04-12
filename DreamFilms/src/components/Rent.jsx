import { Container, Row, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { equipment, filters } from '../data/Menu'
import '../assets/styles/rent.css'

function Rent() {
  const navigate = useNavigate()

  const categories = filters.filter((f) => f !== 'All')

  const getCategoryItem = (cat) =>
    equipment.find((e) => e.category === cat)

  return (
    <section className="rent-section" id="rent">
      <Container>

        {/* Header */}
        <Row className="justify-content-center text-center mb-5">
          <Col lg={6} md={8} xs={12}>
            <p className="section-tagline">Equipment Rental</p>
            <h2 className="rent-section-title">
              RENT OUR <span className="text-accent">GEAR</span>
            </h2>
            <p className="rent-section-subtitle">
              Professional grade equipment available for your next production.
            </p>
          </Col>
        </Row>

        {/* One card per category */}
        <Row className="g-3 g-md-4 mb-5">
          {categories.map((cat) => {
            const item = getCategoryItem(cat)
            if (!item) return null

            return (
              <Col lg={3} md={4} sm={6} xs={6} key={cat}>
                <div
                  className="rent-teaser-card"
                  onClick={() => {
                    navigate('/rent');
                    window.scrollTo(0, 0);
                }}
                >
                  <div className="rent-teaser-badge">View More</div>
                  <div className="rent-teaser-img-wrapper">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="rent-teaser-img"
                    />
                  </div>
                  <div className="rent-teaser-info">
                    <h5 className="rent-teaser-name">{cat}</h5>
                  </div>
                </div>
              </Col>
            )
          })}
        </Row>

        {/* Single CTA */}
        <Row>
          <Col xs={12} className="text-center">
            <button
              className="btn-primary-custom"
              onClick={() => {
                navigate('/rent')
                window.scrollTo(0, 0)
            }}
            >
              View All Equipment
            </button>
          </Col>
        </Row>

      </Container>
    </section>
  )
}

export default Rent