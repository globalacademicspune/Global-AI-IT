'use client'

import { useEffect, useRef } from 'react'

type Particle = {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  alpha: number
}

type StreamLine = {
  x: number
  y: number
  length: number
  speed: number
  vertical: boolean
  alpha: number
}

export default function CyberBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const mouseRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resize()
    window.addEventListener('resize', resize)

    const particles: Particle[] = []
    const lines: StreamLine[] = []

    const createScene = () => {
      particles.length = 0
      lines.length = 0

      const { width, height } = canvas

      // Slow floating particles
      for (let i = 0; i < 70; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.15,
          vy: (Math.random() - 0.5) * 0.15,
          radius: 1 + Math.random() * 2,
          alpha: 0.2 + Math.random() * 0.6,
        })
      }

      // Cyberpunk streaming lines
      for (let i = 0; i < 30; i++) {
        const vertical = Math.random() > 0.5
        lines.push({
          x: vertical ? Math.random() * width : Math.random() * width,
          y: vertical ? Math.random() * height : Math.random() * height,
          length: 80 + Math.random() * 180,
          speed: 0.5 + Math.random() * 1.2,
          vertical,
          alpha: 0.2 + Math.random() * 0.6,
        })
      }
    }

    createScene()

    const draw = () => {
      const { width, height } = canvas

      const parallaxX = (mouseRef.current.x - width / 2) * 0.02
      const parallaxY = (mouseRef.current.y - height / 2) * 0.02

      // Dark base overlay
      ctx.fillStyle = 'rgba(1, 8, 20, 0.9)'
      ctx.fillRect(0, 0, width, height)

      ctx.save()
      ctx.translate(parallaxX, parallaxY)

      // Glowing grid
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.12)'
      ctx.lineWidth = 1
      ctx.beginPath()
      const spacing = 80
      for (let x = 0; x < width; x += spacing) {
        ctx.moveTo(x, 0)
        ctx.lineTo(x, height)
      }
      for (let y = 0; y < height; y += spacing) {
        ctx.moveTo(0, y)
        ctx.lineTo(width, y)
      }
      ctx.stroke()

      // Streaming neon lines
      for (const line of lines) {
        ctx.save()
        ctx.globalAlpha = line.alpha
        ctx.shadowBlur = 12
        ctx.shadowColor = 'rgba(0, 255, 255, 0.9)'
        ctx.strokeStyle = 'rgba(0, 255, 255, 0.9)'
        ctx.lineWidth = 2

        ctx.beginPath()
        if (line.vertical) {
          ctx.moveTo(line.x, line.y)
          ctx.lineTo(line.x, line.y + line.length)
          line.y += line.speed
          if (line.y > height) line.y = -line.length
        } else {
          ctx.moveTo(line.x, line.y)
          ctx.lineTo(line.x + line.length, line.y)
          line.x += line.speed
          if (line.x > width) line.x = -line.length
        }
        ctx.stroke()
        ctx.restore()
      }

      // Floating particles
      for (const p of particles) {
        ctx.save()
        ctx.globalAlpha = p.alpha
        ctx.fillStyle = 'rgba(0, 255, 255, 1)'
        ctx.shadowBlur = 8
        ctx.shadowColor = 'rgba(0, 255, 255, 1)'

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()

        p.x += p.vx
        p.y += p.vy

        if (p.x < 0) p.x = width
        if (p.x > width) p.x = 0
        if (p.y < 0) p.y = height
        if (p.y > height) p.y = 0
      }

      ctx.restore()

      animationId = window.requestAnimationFrame(draw)
    }

    draw()

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div className="absolute inset-0 -z-50 overflow-hidden">
      {/* Parallax base image */}
      <div className="absolute inset-0 bg-[url('/bg-tech.jpg')] bg-cover bg-center bg-fixed opacity-80" />
      {/* Canvas cyberpunk overlay */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  )
}
