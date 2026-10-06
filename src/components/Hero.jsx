import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import './Hero.css'

const Hero = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

  const launchDate = new Date('November 17, 2026 00:00:00').getTime()

  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = launchDate - now

      setCountdown({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section id="hero" className="hero" ref={containerRef}>
      <div className="hero-bg">
        <div className="hero-gradient"></div>
        <div className="hero-mesh"></div>
      </div>

      <motion.div className="hero-content" style={{ y, opacity, scale }}>
        <motion.div
          className="hero-badge"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <span className="badge-icon">✦</span>
          <span>November 17-19, 2026</span>
          <span className="badge-icon">✦</span>
        </motion.div>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <span className="title-line">
            <span className="word">Weaving</span>
          </span>
          <span className="title-line">
            <span className="word text-gradient">Memories</span>
          </span>
          <span className="title-line">
            <span className="word text-gradient-secondary">Leaving Footprints</span>
          </span>
        </motion.h1>

        <motion.p
          className="hero-tagline"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          St. Thomas' School, Kidderpore • Annual Cultural Fest
        </motion.p>

        <motion.div
          className="countdown"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          {[
            { value: countdown.days, label: 'Days' },
            { value: countdown.hours, label: 'Hours' },
            { value: countdown.minutes, label: 'Minutes' },
            { value: countdown.seconds, label: 'Seconds' }
          ].map((item, index) => (
            <div key={item.label} className="countdown-item">
              <motion.div
                key={item.value}
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="countdown-value"
              >
                {String(item.value).padStart(2, '0')}
              </motion.div>
              <div className="countdown-label">{item.label}</div>
            </div>
          ))}
        </motion.div>

        <motion.div
          className="hero-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <a href="#registration" className="btn btn-primary btn-glow">
            <span>Register Now</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <a href="#events" className="btn btn-secondary">
            <span>Explore Events</span>
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className="hero-scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          className="scroll-line"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <span>Scroll to explore</span>
      </motion.div>

      <div className="hero-shapes">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className={`shape shape-${i + 1}`}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </section>
  )
}

export default Hero