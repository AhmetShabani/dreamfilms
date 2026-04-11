import { useRef, useState } from 'react'
import { Modal, Row, Col } from 'react-bootstrap'
import emailjs from '@emailjs/browser'
import '../assets/styles/rentmodal.css'

function RentModal({ show, onHide, selectedItems , onSuccess , onRemove}) {
  const formRef = useRef()
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    setError(false)

    const groupedByCategory = selectedItems.reduce((acc, item) => {
      if (!acc[item.category]) acc[item.category] = []
      acc[item.category].push(item.name)
      return acc
    }, {})

    const selectedList = Object.entries(groupedByCategory)
      .map(([cat, items]) =>
        `[ ${cat.toUpperCase()} ]\n${items.map(name => `  • ${name}`).join('\n')}`
      )
      .join('\n\n')

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formRef.current.from_name.value,
          from_email: formRef.current.from_email.value,
          phone: formRef.current.phone.value,
          message: formRef.current.message.value,
          selected_items: selectedList,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      setSent(true)
      onSuccess()
    } catch (err) {
      setError(true)
    } finally {
      setSending(false)
    }

  }

  const handleClose = () => {
    setSent(false)
    setError(false)
    onHide()
  }

  return (
    <Modal show={show} onHide={handleClose} centered size="lg" className="rent-modal">
      <Modal.Body className="rent-modal-body">

        <button className="rent-modal-close" onClick={handleClose}>✕</button>

        {sent ? (
          <div className="rent-modal-success">
            <div className="success-icon">✓</div>
            <h4>Request Sent!</h4>
            <p>We'll get back to you as soon as possible.</p>
            <button className="btn-primary-custom" onClick={handleClose}>Close</button>
          </div>
        ) : (
          <>
            <p className="section-tagline">Rental Request</p>
            <h4 className="rent-modal-title">YOUR SELECTED <span className="text-accent">GEAR</span></h4>

            <div className="rent-modal-selected">
                {selectedItems.map((item) => (
                    <div key={item.id} className="rent-modal-item">
                    <img src={item.image} alt={item.name} className="rent-modal-item-img" />
                    <div className="rent-modal-item-info">
                        <span className="rent-modal-item-category">{item.category}</span>
                        <span className="rent-modal-item-name">{item.name}</span>
                    </div>
                    <button
                        className="rent-modal-remove"
                        onClick={() => onRemove(item.id)}
                        type="button"
                    >
                        ✕
                    </button>
                    </div>
                ))}
                </div>

            <form ref={formRef} onSubmit={handleSubmit} className="rent-modal-form">
              <Row className="g-3">
                <Col md={6}>
                  <input
                    type="text"
                    name="from_name"
                    className="contact-input"
                    placeholder="Your Name"
                    required
                  />
                </Col>
                <Col md={6}>
                  <input
                    type="email"
                    name="from_email"
                    className="contact-input"
                    placeholder="Your Email"
                    required
                  />
                </Col>
                <Col md={12}>
                  <input
                    type="tel"
                    name="phone"
                    className="contact-input"
                    placeholder="Your Phone Number"
                  />
                </Col>
                <Col md={12}>
                  <textarea
                    name="message"
                    className="contact-input contact-textarea"
                    placeholder="Additional details, dates, questions..."
                    rows={4}
                  />
                </Col>
                <Col md={12}>
                  {error && (
                    <p className="rent-modal-error">
                      Something went wrong. Please try again.
                    </p>
                  )}
                    {selectedItems.length === 0 && (
                    <p className="rent-modal-error">
                        Please select at least one item to rent.
                    </p>
                    )}
                  <button
                    type="submit"
                    className="btn-primary-custom rent-modal-submit"
                    disabled={sending || selectedItems.length === 0}
                    >
                    {sending ? 'Sending...' : 'Send Rental Request'}
                    </button>
                </Col>
              </Row>
            </form>
          </>
        )}

      </Modal.Body>
    </Modal>
  )
}

export default RentModal