import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './Updates.css'

const Updates = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const updates = [
    {
      id: 1,
      date: 'Oct 05, 2026',
      badge: 'Important',
      title: 'Official FestHoma 2026 Rulebook Released',
      desc: 'Detailed rules, round breakdowns, evaluation criteria, and coordinator contacts are now live. Download your copy below.',
      link: '#',
      linkText: 'Download PDF (2.4 MB)'
    },
    {
      id: 2,
      date: 'Sep 28, 2026',
      badge: 'Announcements',
      title: 'Early Bird Registrations Opened for All Events',
      desc: 'Colleges and schools can now reserve priority slots across competitive events. Limited slots per institution.',
      link: '#registration',
      linkText: 'Register Now →'
    },
    {
      id: 3,
      date: 'Sep 15, 2026',
      badge: 'Highlights',
      title: 'Grand EDM Headliner Reveal Coming Soon',
      desc: 'Stay tuned to our Instagram handle @festhoma for the official artist lineup reveal for Night 3.',
      link: 'https://instagram.com',
      linkText: 'Follow on Instagram →'
    }
  ]

  return (
    <section id="updates" className="updates" ref={ref}>
      <div className="container">
        <div className="updates-header text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Live Updates & News</h2>
            <p className="section-subtitle">Stay tuned with the latest announcements</p>
          </motion.div>
        </div>

        <div className="updates-grid">
          {updates.map((item, index) => (
            <motion.div
              key={item.id}
              className="update-card"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="update-top">
                <span className="update-badge">{item.badge}</span>
                <span className="update-date">{item.date}</span>
              </div>
              <h3 className="update-title">{item.title}</h3>
              <p className="update-desc">{item.desc}</p>
              <a href={item.link} className="update-link">
                {item.linkText}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Updates