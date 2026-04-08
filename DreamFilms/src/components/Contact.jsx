import { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import emailjs from '@emailjs/browser'
import { FaPhone, FaEnvelope, FaInstagram, FaFacebookF, FaYoutube } from 'react-icons/fa'
import '../assets/styles/contact.css'

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

const socials = [
  { icon: <FaInstagram />, href: 'https://instagram.com/yourhandle', label: 'Instagram' },
  { icon: <FaFacebookF />, href: 'https://facebook.com/yourpage', label: 'Facebook' },
  { icon: <FaYoutube />, href: 'https://youtube.com/yourchannel', label: 'YouTube' },
]

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState('idle')

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
        SERVICE_ID, TEMPLATE_ID,
        { from_name: name, from_email: email, subject, message },
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
        <Row className="mb-4">
          <Col lg={12}>
            <div className="contact-form-wrapper">
              <Row className="g-4">
                <Col md={6}>
                  <input type="text" name="name" value={formData.name}
                    onChange={handleChange} className="contact-input" placeholder="Your Name" />
                </Col>
                <Col md={6}>
                  <input type="email" name="email" value={formData.email}
                    onChange={handleChange} className="contact-input" placeholder="Your Email" />
                </Col>
                <Col md={12}>
                  <input type="text" name="subject" value={formData.subject}
                    onChange={handleChange} className="contact-input" placeholder="Subject" />
                </Col>
                <Col md={12}>
                  <textarea name="message" value={formData.message}
                    onChange={handleChange} className="contact-input contact-textarea"
                    placeholder="Tell us about your project..." rows={5} />
                </Col>
                <Col md={12} className="text-center">
                  <button className="contact-btn"
                    onClick={handleSubmit} disabled={status === 'sending'}>
                    {status === 'sending' ? 'Sending...' : 'Send Message'}
                  </button>
                  {status === 'success' && (
                    <p className="contact-status success">✅ Message sent successfully!</p>
                  )}
                  {status === 'error' && (
                    <p className="contact-status error">❌ Something went wrong. Please try again.</p>
                  )}
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        <Row className="g-4">
          <Col md={6}>
            <div className="contact-card">
              <h5 className="contact-card-heading">CONTACT INFO</h5>

              <div className="contact-card-item">
                <div className="contact-card-icon"><FaPhone /></div>
                <div>
                  <p className="contact-card-label">Phone</p>
                  <a href="tel:+38344000000" className="contact-card-value">+383 44 000 000</a>
                </div>
              </div>

              <div className="contact-card-item">
                <div className="contact-card-icon"><FaEnvelope /></div>
                <div>
                  <p className="contact-card-label">Email</p>
                  <a href="mailto:info@dreamfilms.com" className="contact-card-value">info@dreamfilms.com</a>
                </div>
              </div>

              <div className="contact-card-divider" />

              <p className="contact-card-label" style={{ marginBottom: '1rem' }}>Follow Us</p>
              <div className="contact-card-socials">
                {socials.map(({ icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="contact-social-icon"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </Col>

          <Col md={6}>
            <div className="contact-card contact-map-card">
              <iframe
                title="DreamFilms Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2934.1!2d21.1693484!3d42.6490009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13549ff5108e0207%3A0x846d58353ba12c8a!2sDreamFilms!5e0!3m2!1sen!2s!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Contact