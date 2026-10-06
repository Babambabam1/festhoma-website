import { motion } from 'framer-motion'
import './LoadingScreen.css'

const LoadingScreen = () => {
  return (
    <motion.div
      className="loading-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="loader-content">
        <motion.div
          className="loader-logo"
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{
            rotate: { duration: 2, repeat: Infinity, ease: "linear" },
            scale: { duration: 1, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <span className="loader-text">F</span>
        </motion.div>
        <motion.div
          className="loader-bar"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          <div className="loader-progress" />
        </motion.div>
        <motion.p
          className="loader-tagline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Weaving Memories • Leaving Footprints
        </motion.p>
      </div>
      <div className="loader-shapes">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="shape"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: 0
            }}
            animate={{
              scale: [0, 1, 0],
              y: [null, y => y - 100],
              x: [null, x => x + (Math.random() - 0.5) * 50]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
    </motion.div>
  )
}

export default LoadingScreen