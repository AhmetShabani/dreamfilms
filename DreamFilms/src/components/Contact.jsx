import { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import emailjs from '@emailjs/browser'
import '../assets/styles/contact.css'

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async () => {
    const { name, email, subject, message } = formData
    if (!name || !email || !subject || !message) {
      alert('Please fill in all fields.')
      return
    }

    setStatus('sending')
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: name,
          from_email: email,
          subject: subject,
          message: message,
        },
        PUBLIC_KEY
      )
      setStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <section className="contact-section" id="contact">
      <Container>
        <Row className="justify-content-center text-center mb-5">
          <Col lg={6}>
            <p className="section-tagline">Get In Touch</p>
            <h2 className="contact-title">
              LET'S CREATE <span className="text-accent">TOGETHER</span>
            </h2>
            <p className="contact-subtitle">
              Have a project in mind? We'd love to hear about it.
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col lg={8}>
            <div className="contact-form-wrapper">
              <Row className="g-4">
                <Col md={6}>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="contact-input"
                    placeholder="Your Name"
                  />
                </Col>
                <Col md={6}>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="contact-input"
                    placeholder="Your Email"
                  />
                </Col>
                <Col md={12}>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="contact-input"
                    placeholder="Subject"
                  />
                </Col>
                <Col md={12}>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="contact-input contact-textarea"
                    placeholder="Tell us about your project..."
                    rows={5}
                  />
                </Col>
                <Col md={12} className="text-center">
                  <button
                    className="btn-primary-custom contact-btn"
                    onClick={handleSubmit}
                    disabled={status === 'sending'}
                  >
                    {status === 'sending' ? 'Sending...' : 'Send Message'}
                  </button>

                  {status === 'success' && (
                    <p style={{ color: 'green', marginTop: '1rem' }}>
                      ✅ Message sent successfully!
                    </p>
                  )}
                  {status === 'error' && (
                    <p style={{ color: 'red', marginTop: '1rem' }}>
                      ❌ Something went wrong. Please try again.
                    </p>
                  )}
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Contact