import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './Schedule.css'

const Schedule = () => {
  const [activeDay, setActiveDay] = useState(1)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const daysData = [
    {
      day: 1,
      date: 'Nov 17, 2026',
      title: 'The Awakening: Inception & Beats',
      schedule: [
        { time: '09:00 AM', title: 'Grand Opening Ceremony', venue: 'Main Auditorium', desc: 'Lighting of the lamp, welcome address & inaugural dance performance.' },
        { time: '10:30 AM', title: 'Canvas Chronicles (Live Art)', venue: 'Art Wing', desc: 'Thematic live sketching and painting competition.' },
        { time: '11:00 AM', title: 'Voice of FestHoma (Solo Vocals)', venue: 'Acoustic Lounge', desc: 'Prelims for the premier solo singing contest.' },
        { time: '01:30 PM', title: 'Lunch Break & Informal Stage Beats', venue: 'Campus Quad', desc: 'Open mic, flash mobs, and food carnival.' },
        { time: '02:30 PM', title: 'Step Up - Street Dance Clash', venue: 'Amphitheatre', desc: 'High-octane crew dance battles.' },
        { time: '05:30 PM', title: 'DJ Night Warmup', venue: 'Main Ground', desc: 'Electrifying electronic beats to wrap up Day 1.' }
      ]
    },
    {
      day: 2,
      date: 'Nov 18, 2026',
      title: 'The Crescendo: Power & Performance',
      schedule: [
        { time: '09:30 AM', title: 'Valorant Tournament (Quarterfinals)', venue: 'Tech Arena', desc: 'E-Sports LAN showdown kicks off.' },
        { time: '11:00 AM', title: 'Nrityanjali (Classical Fusion)', venue: 'Main Auditorium', desc: 'Traditional and semi-classical choreography showcase.' },
        { time: '01:00 PM', title: 'Cosplay & Persona Parade', venue: 'Campus Quad', desc: 'Pop-culture costume walkthrough and skit showcase.' },
        { time: '03:00 PM', title: 'Battle of the Bands', venue: 'Main Stage', desc: 'Headlining band wars featuring top college bands.' },
        { time: '06:30 PM', title: 'Celebrity Guest Artist Performance', venue: 'Open Grounds', desc: 'Star performance under the night sky.' }
      ]
    },
    {
      day: 3,
      date: 'Nov 19, 2026',
      title: 'The Finale: Drama & Glory',
      schedule: [
        { time: '10:00 AM', title: 'Curtain Call (One Act Play)', venue: 'Drama Hall', desc: 'Theatrical drama showdown across multiple genres.' },
        { time: '11:30 AM', title: 'Slam Poetry & Literary Fest', venue: 'Library Amphitheatre', desc: 'Original spoken word and poetry slam.' },
        { time: '01:30 PM', title: 'Fashion Walk - Vogue Runway', venue: 'Main Auditorium', desc: 'Creative theme-based haute couture showcase.' },
        { time: '04:30 PM', title: 'Prize Distribution & Valedictory', venue: 'Main Auditorium', desc: 'Honoring winners and celebration of the spirit of FestHoma.' },
        { time: '06:30 PM', title: 'Grand EDM Mega-Night & Afterparty', venue: 'Main Ground', desc: 'An unforgettable musical conclusion with visual light show.' }
      ]
    }
  ]

  const currentDayData = daysData.find(d => d.day === activeDay)

  return (
    <section id="schedule" className="schedule" ref={ref}>
      <div className="container">
        <div className="schedule-header text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Fest Timeline</h2>
            <p className="section-subtitle">Three days of pure adrenaline and celebration</p>
          </motion.div>

          <div className="day-selector">
            {daysData.map((d) => (
              <button
                key={d.day}
                className={`day-tab ${activeDay === d.day ? 'active' : ''}`}
                onClick={() => setActiveDay(d.day)}
              >
                <span className="day-number">Day 0{d.day}</span>
                <span className="day-date">{d.date}</span>
              </button>
            ))}
          </div>
        </div>

        <motion.div
          className="timeline-wrapper"
          key={activeDay}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <div className="day-theme-banner">
            <span className="theme-tag">Theme of the Day</span>
            <h3>{currentDayData.title}</h3>
          </div>

          <div className="timeline">
            {currentDayData.schedule.map((item, index) => (
              <motion.div
                key={index}
                className="timeline-item"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="timeline-dot" />
                <div className="timeline-content">
                  <div className="timeline-time">{item.time}</div>
                  <h4 className="timeline-title">{item.title}</h4>
                  <p className="timeline-desc">{item.desc}</p>
                  <div className="timeline-venue">
                    <span>📍 {item.venue}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Schedule