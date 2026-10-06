import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './Registration.css'

const Registration = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  })

  return (
    <section id="registration" className="registration" ref={ref}>
      <div className="container">
        <div className="registration-wrapper">
          <motion.div
            className="registration-content"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">Claim Your Spotlight</h2>
            <p className="reg-desc">
              Whether you're fighting for the trophy, the cash prize, or simply for the thrill
              of the stage—your journey starts here. Fill out the official registration form to
              secure your slot before they run out.
            </p>

            <ul className="reg-points">
              <li>
                <span className="point-icon">📋</span>
                <span>Ensure you've read the official rulebook before registering.</span>
              </li>
              <li>
                <span className="point-icon">🆔</span>
                <span>Keep your institutional ID cards ready for upload.</span>
              </li>
              <li>
                <span className="point-icon">⚠️</span>
                <span>Late entries will not be entertained past the deadline.</span>
              </li>
            </ul>

            <div className="reg-actions">
              <a href="#" className="btn btn-primary btn-glow" onClick={(e) => e.preventDefault()}>
                <span>Open Registration Form</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
                </svg>
              </a>
              <a href="#" className="btn btn-secondary">
                Download Rulebook (PDF)
              </a>
            </div>

            <p className="reg-note">
              *Registrations are routed securely via Google Forms.
            </p>
          </motion.div>

          <motion.div
            className="registration-visual"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="ticket-graphic">
              <div className="ticket-header">
                <h3>VIP PASS</h3>
                <span>FESTHOMA 2026</span>
              </div>
              <div className="ticket-body">
                <div className="barcode"></div>
                <div className="ticket-details">
                  <div>
                    <small>Admit</small>
                    <p>ONE</p>
                  </div>
                  <div>
                    <small>Date</small>
                    <p>NOV 17-19</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="floating-elements">
              <div className="float-item item-1">🎤</div>
              <div className="float-item item-2">🎸</div>
              <div className="float-item item-3">🎭</div>
              <div className="float-item item-4">🎨</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Registration