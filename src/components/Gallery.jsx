import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './Gallery.css'

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState(null)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  // Visual placeholders highlighting past fest memories
  const galleryItems = [
    { id: 1, title: 'Rock Concert Madness', tag: 'Concert', color: 'linear-gradient(135deg, #ff416c, #ff4b2b)', year: '2025' },
    { id: 2, title: 'Street Dance Finals', tag: 'Dance', color: 'linear-gradient(135deg, #8a2387, #e94057, #f27121)', year: '2025' },
    { id: 3, title: 'Inaugural Lamp Lighting', tag: 'Ceremony', color: 'linear-gradient(135deg, #11998e, #38ef7d)', year: '2024' },
    { id: 4, title: 'Fashion Walk - Haute Couture', tag: 'Fashion', color: 'linear-gradient(135deg, #fc4a1a, #f7b733)', year: '2025' },
    { id: 5, title: 'Theatrical Intensity', tag: 'Drama', color: 'linear-gradient(135deg, #1f4037, #99f2c8)', year: '2024' },
    { id: 6, title: 'Crowd Cheering Moments', tag: 'Vibes', color: 'linear-gradient(135deg, #654ea3, #eaafc8)', year: '2025' }
  ]

  return (
    <section id="gallery" className="gallery" ref={ref}>
      <div className="container">
        <div className="gallery-header text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Memories & Footprints</h2>
            <p className="section-subtitle">Glimpses of raw energy, passion, and triumph</p>
          </motion.div>
        </div>

        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              className={`gallery-card card-${index + 1}`}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setSelectedImg(item)}
            >
              <div
                className="gallery-image-placeholder"
                style={{ background: item.color }}
              >
                <div className="gallery-card-overlay">
                  <span className="gallery-tag">{item.tag}</span>
                  <h3 className="gallery-title">{item.title}</h3>
                  <span className="gallery-year">FestHoma {item.year}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImg && (
            <div className="gallery-modal" onClick={() => setSelectedImg(null)}>
              <motion.div
                className="gallery-modal-content"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button className="modal-close" onClick={() => setSelectedImg(null)}>✕</button>
                <div
                  className="modal-image-display"
                  style={{ background: selectedImg.color }}
                >
                  <div className="modal-info">
                    <span className="gallery-tag">{selectedImg.tag}</span>
                    <h2>{selectedImg.title}</h2>
                    <p>Capturing the vibrant energy of FestHoma {selectedImg.year}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Gallery