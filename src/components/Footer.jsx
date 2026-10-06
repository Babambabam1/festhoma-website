import { motion } from 'framer-motion'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <motion.div
              className="logo-wrapper"
              whileHover={{ scale: 1.05 }}
            >
              <span className="logo-text">FestHoma</span>
              <span className="logo-year" style={{ color: '#ff6b35' }}>2026</span>
            </motion.div>
            <p>Annual Cultural Fest of St. Thomas' School, Kidderpore. Weaving memories and leaving footprints.</p>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#events">Competitions</a></li>
              <li><a href="#schedule">Schedule</a></li>
              <li><a href="#gallery">Gallery</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Support</h4>
            <ul>
              <li><a href="#">Rulebook 2026</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#contact">Contact Support</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 FestHoma. All Rights Reserved.</p>
          <p>Created by St. Thomas' Web Team</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer