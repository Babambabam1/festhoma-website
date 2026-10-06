import { useEffect, useRef, useState } from 'react'
import './ParticleBackground.css'

const ParticleBackground = () => {
  const canvasRef = useRef(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      })
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    updateDimensions()
    window.addEventListener('resize', updateDimensions)

    const particles = []
    const particleCount = 80

    class Particle {
      constructor() {
        this.reset()
      }

      reset() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.vx = (Math.random() - 0.5) * 0.5
        this.vy = (Math.random() - 0.5) * 0.5
        this.size = Math.random() * 2 + 0.5
        this.alpha = Math.random() * 0.5 + 0.2
        this.hue = Math.random() * 30 + 15 // Orange to yellow range
      }

      update() {
        this.x += this.vx
        this.y += this.vy

        if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
          this.reset()
        }
      }

      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = `hsla(${this.hue}, 100%, 60%, ${this.alpha})`
        ctx.fill()

        // Glow effect
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size * 3, 0, Math.PI * 2)
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size * 3)
        gradient.addColorStop(0, `hsla(${this.hue}, 100%, 60%, 0.2)`)
        gradient.addColorStop(1, 'transparent')
        ctx.fillStyle = gradient
        ctx.fill()
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    const connectParticles = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            const opacity = (1 - distance / 150) * 0.3
            ctx.beginPath()
            ctx.strokeStyle = `hsla(${particles[i].hue}, 100%, 60%, ${opacity})`
            ctx.lineWidth = 0.5
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach(particle => {
        particle.update()
        particle.draw()
      })

      connectParticles()
      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', updateDimensions)
    }
  }, [])

  return <canvas ref={canvasRef} className="particle-canvas" />
}

export default ParticleBackground