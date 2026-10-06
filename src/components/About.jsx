import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './About.css'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  })

  const stats = [
    { number: '30+', label: 'Events' },
    { number: '5000+', label: 'Footfalls' },
    { number: '50+', label: 'Colleges & Schools' },
    { number: '₹1L+', label: 'Prize Pool' }
  ]

  const highlights = [
    {
      title: 'Cultural Diversity',
      description: 'Bringing together unique talents and traditions from institutions across the region.',
      icon: '🎭'
    },
    {
      title: 'Creative Excellence',
      description: 'A platform to showcase artistic innovation, musical prowess, and dramatic flair.',
      icon: '✨'
    },
    {
      title: 'Unforgettable Memories',
      description: 'Creating moments and connections that resonate far beyond the three days of the fest.',
      icon: '🌟'
    }
  ]

  return (
    <section id="about" className="about" ref={ref}>
      <div className="container">
        <div className="about-header text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">The Legacy of FestHoma</h2>
            <p className="section-subtitle">St. Thomas' School, Kidderpore</p>
          </motion.div>
        </div>

        <div className="about-grid">
          <motion.div
            className="about-content"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="about-lead">
              A celebration of passion, creativity, and the vibrant spirit of youth.
            </h3>
            <p>
              FestHoma is the flagship annual inter-school and inter-college cultural festival
              organized by St. Thomas' School, Kidderpore. For years, it has served as a premier
              stage for students to express their artistic talents, foster camaraderie, and
              compete in the spirit of healthy rivalry.
            </p>
            <p>
              Spanning over three exhilarating days from November 17 to 19, 2026, FestHoma 2026
              promises an unmatched extravaganza featuring thrilling competitions in dance, music,
              drama, literature, fashion, and digital arts.
            </p>
            <div className="about-quote">
              "Weaving memories and leaving footprints that echo through time."
            </div>
          </motion.div>

          <motion.div
            className="about-stats-container"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="stat-card">
                  <div className="stat-number text-gradient">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="highlights-grid">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              className="highlight-card"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 * index + 0.6 }}
              whileHover={{ y: -10 }}
            >
              <div className="highlight-icon">{item.icon}</div>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About