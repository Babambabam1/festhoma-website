import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './Events.css'

const Events = () => {
  const [activeTab, setActiveTab] = useState('all')
  const [selectedEvent, setSelectedEvent] = useState(null)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const categories = [
    { id: 'all', name: 'All Events' },
    { id: 'music', name: 'Music' },
    { id: 'dance', name: 'Dance' },
    { id: 'drama', name: 'Drama & Literary' },
    { id: 'art', name: 'Art & Design' },
    { id: 'gaming', name: 'E-Sports' }
  ]

  const eventsData = [
    {
      id: 1,
      title: 'Battle of the Bands',
      category: 'music',
      tag: 'Western Music',
      prize: '₹15,000',
      time: 'Day 2 • 4:00 PM',
      venue: 'Main Auditorium',
      teamSize: '3-8 Members',
      description: 'Plug in and unleash the raw sound! The premier rock/fusion band competition where talent meets thunderous applause.',
      rules: ['Time limit: 12 minutes (including setup)', 'At least one original composition or creative medley recommended', 'Standard drum kit provided; bring personal instruments']
    },
    {
      id: 2,
      title: 'Step Up - Street Dance',
      category: 'dance',
      tag: 'Western Dance',
      prize: '₹12,000',
      time: 'Day 1 • 2:30 PM',
      venue: 'Open Air Amphitheatre',
      teamSize: '6-15 Members',
      description: 'A fierce dance crew battle showcasing synchronization, breaking, popping, and sheer energy on the center stage.',
      rules: ['Time limit: 6-8 minutes', 'Props are allowed with prior clearance', 'Any style: Hip-hop, Locking, Popping, Krumping, Waacking']
    },
    {
      id: 3,
      title: 'Voice of FestHoma',
      category: 'music',
      tag: 'Solo Singing',
      prize: '₹8,000',
      time: 'Day 1 • 11:00 AM',
      venue: 'Acoustic Lounge',
      teamSize: 'Solo',
      description: 'Showcase your vocal range, emotion, and stage presence in this prestigious solo singing showdown.',
      rules: ['Time limit: 4 minutes', 'Karaoke track or one acoustic instrument permitted', 'Languages: English, Hindi, Bengali']
    },
    {
      id: 4,
      title: 'Nrityanjali',
      category: 'dance',
      tag: 'Classical/Semi-Classical',
      prize: '₹10,000',
      time: 'Day 2 • 11:30 AM',
      venue: 'Main Auditorium',
      teamSize: 'Solo / Duet',
      description: 'Grace, rhythm, and storytelling combined in this ode to traditional Indian dance forms.',
      rules: ['Time limit: 5 minutes', 'Costume and expressive storytelling carry weightage', 'Semi-classical or pure classical fusion accepted']
    },
    {
      id: 5,
      title: 'Curtain Call',
      category: 'drama',
      tag: 'One Act Play',
      prize: '₹14,000',
      time: 'Day 3 • 1:00 PM',
      venue: 'Drama Hall',
      teamSize: '4-12 Members',
      description: 'Evoke emotions and spark thoughts through dynamic storytelling, stagecraft, and dialogue delivery.',
      rules: ['Time limit: 15 minutes', 'Minimal set changes; background sound cues permitted', 'Original scripts or adaptations accepted']
    },
    {
      id: 6,
      title: 'Canvas Chronicles',
      category: 'art',
      tag: 'Live Painting',
      prize: '₹6,000',
      time: 'Day 1 • 10:00 AM',
      venue: 'Art Wing',
      teamSize: 'Solo',
      description: 'Express a theme through colors, strokes, and imagination within a ticking clock.',
      rules: ['Time limit: 2 hours', 'Theme announced on the spot', 'Canvas provided; bring your own colors and brushes']
    },
    {
      id: 7,
      title: 'Valorant Showdown',
      category: 'gaming',
      tag: 'E-Sports Tournament',
      prize: '₹10,000',
      time: 'Day 2 & 3 • 10:00 AM',
      venue: 'Tech Arena',
      teamSize: '5 Players',
      description: 'Tactical gunplay, agent utility, and high-intensity clutching in the ultimate competitive shooter tournament.',
      rules: ['Format: Single Elimination / Best of 1 until Finals (BO3)', 'Standard tournament competitive settings', 'BYOD (Bring Your Own Peripherals encouraged)']
    },
    {
      id: 8,
      title: 'Slam Poetry & Word Play',
      category: 'drama',
      tag: 'Literary Event',
      prize: '₹5,000',
      time: 'Day 3 • 11:00 AM',
      venue: 'Library Amphitheatre',
      teamSize: 'Solo',
      description: 'Words that stir souls. Deliver your rhythm, your truth, and your poetry with unmatched passion.',
      rules: ['Time limit: 3 minutes', 'Original works only', 'No props allowed, purely performance-driven']
    }
  ]

  const filteredEvents = activeTab === 'all'
    ? eventsData
    : eventsData.filter(event => event.category === activeTab)

  return (
    <section id="events" className="events" ref={ref}>
      <div className="container">
        <div className="events-header text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Events & Competitions</h2>
            <p className="section-subtitle">Showcase your prowess across disciplines</p>
          </motion.div>

          <div className="category-filters">
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`filter-btn ${activeTab === cat.id ? 'active' : ''}`}
                onClick={() => setActiveTab(cat.id)}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          className="events-grid"
          layout
        >
          <AnimatePresence>
            {filteredEvents.map((event) => (
              <motion.div
                key={event.id}
                className="event-card"
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -8 }}
              >
                <div className="event-card-top">
                  <span className="event-tag">{event.tag}</span>
                  <span className="event-prize text-gradient">{event.prize}</span>
                </div>

                <h3 className="event-title">{event.title}</h3>
                <p className="event-desc">{event.description}</p>

                <div className="event-meta">
                  <div className="meta-item">
                    <span className="meta-icon">🕒</span>
                    <span>{event.time}</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-icon">📍</span>
                    <span>{event.venue}</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-icon">👥</span>
                    <span>{event.teamSize}</span>
                  </div>
                </div>

                <div className="event-actions">
                  <button
                    className="btn-details"
                    onClick={() => setSelectedEvent(event)}
                  >
                    View Rulebook & Details →
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Event Detail Modal */}
        <AnimatePresence>
          {selectedEvent && (
            <div className="modal-overlay" onClick={() => setSelectedEvent(null)}>
              <motion.div
                className="modal-content"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button className="modal-close" onClick={() => setSelectedEvent(null)}>✕</button>
                <span className="event-tag">{selectedEvent.tag}</span>
                <h3 className="modal-title">{selectedEvent.title}</h3>
                <p className="modal-desc">{selectedEvent.description}</p>

                <div className="modal-stats">
                  <div>
                    <strong>Prize:</strong> <span className="text-gradient">{selectedEvent.prize}</span>
                  </div>
                  <div>
                    <strong>Team:</strong> {selectedEvent.teamSize}
                  </div>
                  <div>
                    <strong>Venue:</strong> {selectedEvent.venue}
                  </div>
                  <div>
                    <strong>Schedule:</strong> {selectedEvent.time}
                  </div>
                </div>

                <div className="modal-rules">
                  <h4>Rules & Guidelines</h4>
                  <ul>
                    {selectedEvent.rules.map((rule, idx) => (
                      <li key={idx}>{rule}</li>
                    ))}
                  </ul>
                </div>

                <div className="modal-footer">
                  <a href="#registration" className="btn btn-primary" onClick={() => setSelectedEvent(null)}>
                    Register For This Event
                  </a>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Events