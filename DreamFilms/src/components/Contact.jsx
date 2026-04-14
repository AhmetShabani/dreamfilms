import { useState } from 'react'
import { Container, Row, Col, Modal } from 'react-bootstrap'
import emailjs from '@emailjs/browser'
import { FaPhone, FaEnvelope, FaInstagram, FaFacebookF } from 'react-icons/fa'
import '../assets/styles/contact.css'
import { socials } from '../data/Menu' 

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY



const validateEmail = (email) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())

const validateName = (name) =>
  name.trim().length >= 2 && /^[a-zA-Z\s'-]+$/.test(name.trim())

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState('idle')
  const [modal, setModal] = useState({ show: false, title: '', messages: [], type: 'error' })

  const showModal = (title, messages, type = 'error') =>
    setModal({ show: true, title, messages, type })

  const hideModal = () =>
    setModal({ show: false, title: '', messages: [] })

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const validate = () => {
    const errors = []

    if (!formData.name.trim()) {
      errors.push('Name is required.')
    } else if (!validateName(formData.name)) {
      errors.push('Name must be at least 2 characters and contain only letters.')
    }

    if (!formData.email.trim()) {
      errors.push('Email is required.')
    } else if (!validateEmail(formData.email)) {
      errors.push('Please enter a valid email address (e.g. name@example.com).')
    }

    if (!formData.subject.trim()) {
      errors.push('Subject is required.')
    } else if (formData.subject.trim().length < 3) {
      errors.push('Subject must be at least 3 characters.')
    }

    if (!formData.message.trim()) {
      errors.push('Message is required.')
    } else if (formData.message.trim().length < 10) {
      errors.push('Message must be at least 10 characters.')
    }

    return errors
  }

  const handleSubmit = async () => {
    const errors = validate()

    if (errors.length > 0) {
      showModal('Please fix the following', errors)
      return
    }

    setStatus('sending')
    try {
      await emailjs.send(
        SERVICE_ID, TEMPLATE_ID,
        {
          from_name: formData.name.trim(),
          from_email: formData.email.trim(),
          subject: formData.subject.trim(),
          message: formData.message.trim(),
        },
        PUBLIC_KEY
      )
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      showModal('Message Sent!', ['Your message has been sent successfully. We will get back to you soon!'], 'success');
    } catch (err) {
      console.error(err)
      setStatus('error')
      showModal('Message Failed', [
        'Something went wrong while sending your message.',
        'Please try again or contact us directly at info@dreamfilms-ks.com',
      ])
    }
  }

  return (
    <section className="contact-section" id="contact">
      <Container>

        {/* Header */}
        <Row className="justify-content-center text-center mb-5">
          <Col lg={6} md={10} xs={12}>
            <p className="section-tagline">Get In Touch</p>
            <h2 className="contact-title">
              LET'S CREATE <span className="text-accent">TOGETHER</span>
            </h2>
            <p className="contact-subtitle">
              Have a project in mind? We'd love to hear about it.
            </p>
          </Col>
        </Row>

        {/* Form */}
        <Row className="mb-4">
          <Col xs={12}>
            <div className="contact-form-wrapper">
              <Row className="g-3">
                <Col md={6} xs={12}>
                  <input type="text" name="name" value={formData.name}
                    onChange={handleChange} className="contact-input" placeholder="Your Name" />
                </Col>
                <Col md={6} xs={12}>
                  <input type="email" name="email" value={formData.email}
                    onChange={handleChange} className="contact-input" placeholder="Your Email" />
                </Col>
                <Col xs={12}>
                  <input type="text" name="subject" value={formData.subject}
                    onChange={handleChange} className="contact-input" placeholder="Subject" />
                </Col>
                <Col xs={12}>
                  <textarea name="message" value={formData.message}
                    onChange={handleChange} className="contact-input contact-textarea"
                    placeholder="Tell us about your project..." rows={5} />
                </Col>
                <Col xs={12} className="text-center">
                  <button className="contact-btn"
                    onClick={handleSubmit} disabled={status === 'sending'}>
                    {status === 'sending' ? 'Sending...' : 'Send Message'}
                  </button>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>

        {/* Info + Map */}
        <Row className="g-4">
          <Col md={6} xs={12}>
            <div className="contact-card">
              <h5 className="contact-card-heading">CONTACT INFO</h5>

              <div className="contact-card-item">
                <div className="contact-card-icon"><FaPhone /></div>
                <div>
                  <p className="contact-card-label">Phone</p>
                  <a href="tel:+38348222858" className="contact-card-value">+383 48 222 858</a>
                </div>
              </div>

              <div className="contact-card-item">
                <div className="contact-card-icon"><FaEnvelope /></div>
                <div>
                  <p className="contact-card-label">Email</p>
                  <a href="mailto:info@dreamfilms-ks.com" className="contact-card-value">info@dreamfilms-ks.com</a>
                </div>
              </div>

              <div className="contact-card-divider" />

              <p className="contact-card-label" style={{ marginBottom: '1rem' }}>Follow Us</p>
              <div className="contact-card-socials">
                {socials.map(({ icon, href, label }) => (
                  <a key={label} href={href} target="_blank"
                    rel="noopener noreferrer" aria-label={label}
                    className="contact-social-icon">
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </Col>

          <Col md={6} xs={12}>
            <div className="contact-card contact-map-card">
              <iframe
                title="DreamFilms Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2934.1!2d21.1693484!3d42.6490009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13549ff5108e0207%3A0x846d58353ba12c8a!2sDreamFilms!5e0!3m2!1sen!2s!4v1"
                width="100%" height="100%"
                style={{ border: 0 }} allowFullScreen="" loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Col>
        </Row>

      </Container>

      {/* Validation / Error Modal */}
      <Modal
        show={modal.show}
        onHide={hideModal}
        centered
        contentClassName={`contact-modal-content ${modal.type}`}
      >
        <Modal.Header className="contact-modal-header">
          <Modal.Title className="contact-modal-title">
            {modal.title}
          </Modal.Title>
          <button className="contact-modal-close" onClick={hideModal}>✕</button>
        </Modal.Header>
        <Modal.Body className="contact-modal-body">
          <ul className="contact-modal-list">
            {modal.messages.map((msg, i) => (
              <li key={i} className="contact-modal-item">
                {msg}
              </li>
            ))}
          </ul>
        </Modal.Body>
        <Modal.Footer className="contact-modal-footer">
          <button className={modal.type === 'success' ? 'contact-btn-success' : 'contact-btn'} onClick={hideModal}>
            Got It
          </button>
        </Modal.Footer>
      </Modal>

    </section>
  )
}

export default Contact