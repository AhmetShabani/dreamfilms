import { useRef, useState } from 'react'
import { Modal, Row, Col } from 'react-bootstrap'
import emailjs from '@emailjs/browser'
import '../assets/styles/rentmodal.css'

const validateName = (name) =>
  name.trim().length >= 2 && /^[a-zA-Z\s'-]+$/.test(name.trim())

const validateEmail = (email) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())

const validatePhone = (phone) =>
  phone.trim() === '' || /^[+\d\s\-()]{7,20}$/.test(phone.trim())

function RentModal({ show, onHide, selectedItems, onSuccess, onRemove }) {
  const formRef = useRef()
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [validationErrors, setValidationErrors] = useState([])

  const validate = () => {
    const errors = []
    const form = formRef.current

    if (!form.from_name.value.trim()) {
      errors.push('Name is required.')
    } else if (!validateName(form.from_name.value)) {
      errors.push('Name must be at least 2 characters and contain only letters.')
    }

    if (!form.from_email.value.trim()) {
      errors.push('Email is required.')
    } else if (!validateEmail(form.from_email.value)) {
      errors.push('Please enter a valid email address (e.g. name@example.com).')
    }

    if (!validatePhone(form.phone.value)) {
      errors.push('Phone number must be between 7 and 20 digits.')
    }

    if (selectedItems.length === 0) {
      errors.push('Please select at least one item to rent.')
    }

    return errors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setValidationErrors([])

    const errors = validate()
    if (errors.length > 0) {
      setValidationErrors(errors)
      return
    }

    setSending(true)

    const groupedByCategory = selectedItems.reduce((acc, item) => {
      if (!acc[item.category]) acc[item.category] = []
      acc[item.category].push(item.name)
      return acc
    }, {})

    const selectedList = Object.entries(groupedByCategory)
      .map(([cat, items]) =>
        `[ ${cat.toUpperCase()} ]\n${items.map((name) => `  • ${name}`).join('\n')}`
      )
      .join('\n\n')

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formRef.current.from_name.value.trim(),
          from_email: formRef.current.from_email.value.trim(),
          phone: formRef.current.phone.value.trim() || 'Not provided',
          message: formRef.current.message.value.trim() || 'No additional details.',
          selected_items: selectedList,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      setSent(true)
      onSuccess()
    } catch (err) {
      setValidationErrors(['Something went wrong while sending. Please try again.'])
    } finally {
      setSending(false)
    }
  }

  const handleClose = () => {
    setSent(false)
    setValidationErrors([])
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
            <h4 className="rent-modal-title">
              YOUR SELECTED <span className="text-accent">GEAR</span>
            </h4>

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
                  />
                </Col>
                <Col md={6}>
                  <input
                    type="email"
                    name="from_email"
                    className="contact-input"
                    placeholder="Your Email"
                  />
                </Col>
                <Col md={12}>
                  <input
                    type="tel"
                    name="phone"
                    className="contact-input"
                    placeholder="Your Phone Number (optional)"
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

                  {/* Validation Errors */}
                  {validationErrors.length > 0 && (
                    <div className="rent-modal-errors">
                      <p className="rent-modal-errors-title">Please fix the following:</p>
                      <ul className="rent-modal-errors-list">
                        {validationErrors.map((err, i) => (
                          <li key={i} className="rent-modal-errors-item">{err}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <button
                    type="submit"
                    className="btn-primary-custom rent-modal-submit"
                    disabled={sending}
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