import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './Contact.css'

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  })

  return (
    <section id="contact" className="contact" ref={ref}>
      <div className="container">
        <div className="contact-grid">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title" style={{ fontSize: '3rem' }}>Get in Touch</h2>
            <p className="contact-desc">
              Have questions about events, registration, or sponsorships? Drop us a message or reach out through our official channels.
            </p>

            <div className="contact-details">
              <div className="detail-item">
                <div className="detail-icon">📍</div>
                <div>
                  <h4>Location</h4>
                  <p>St. Thomas' School<br />4, Diamond Harbour Road, Kidderpore<br />Kolkata, West Bengal 700023</p>
                </div>
              </div>

              <div className="detail-item">
                <div className="detail-icon">📧</div>
                <div>
                  <h4>Email Us</h4>
                  <p><a href="mailto:info@festhoma.in">info@festhoma.in</a></p>
                  <p><a href="mailto:registration@festhoma.in">registration@festhoma.in</a></p>
                </div>
              </div>

              <div className="detail-item">
                <div className="detail-icon">📞</div>
                <div>
                  <h4>Call Us</h4>
                  <p>General Enquiry: +91 98765 43210</p>
                  <p>Event Coordinator: +91 98765 43211</p>
                </div>
              </div>
            </div>

            <div className="social-links">
              <a href="#" className="social-icon">Fb</a>
              <a href="#" className="social-icon">Ig</a>
              <a href="#" className="social-icon">X</a>
              <a href="#" className="social-icon">Yt</a>
            </div>
          </motion.div>

          <motion.div
            className="contact-form-container"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label>Your Name</label>
                <input type="text" placeholder="John Doe" required />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" placeholder="john@example.com" required />
              </div>
              <div className="form-group">
                <label>Institution / School Name</label>
                <input type="text" placeholder="e.g. St. Xavier's College" />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea rows="5" placeholder="How can we help you?" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-glow" style={{ width: '100%' }}>
                <span>Send Message</span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact