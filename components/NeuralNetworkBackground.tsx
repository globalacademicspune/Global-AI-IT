'use client'

import { useEffect, useRef } from 'react'

type Node = {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  baseAlpha: number
  alpha: number
}

type PulseLine = {
  x: number
  y: number
  length: number
  speed: number
  isVertical: boolean
  color: string
}

export default function NeuralNetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const mouseRef = useRef({ x: -1000, y: -1000, radius: 200 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    const nodes: Node[] = []
    const pulses: PulseLine[] = []

    const resizeCanvas = () => {
      if (!canvas) return
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initializeSystem()
    }

    const initializeSystem = () => {
      nodes.length = 0
      pulses.length = 0
      const w = canvas.width
      const h = canvas.height

      // Dense distribution setup
      const nodeCount = 100
      
      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.6, 
          vy: (Math.random() - 0.5) * 0.6,
          radius: 1.5 + Math.random() * 2,
          baseAlpha: 0.3 + Math.random() * 0.4,
          alpha: 0.3
        })
      }

      // 20 High Intensity Neon Matrix Laser Lines
      for (let i = 0; i < 20; i++) {
        pulses.push({
          x: Math.random() * w,
          y: Math.random() * h,
          length: 150 + Math.random() * 250,
          speed: 1.2 + Math.random() * 2,
          isVertical: Math.random() > 0.5,
          color: Math.random() > 0.5 ? '#00d2ff' : '#6366f1'
        })
      }
    }

    window.addEventListener('resize', resizeCanvas)
    resizeCanvas()

    const draw = () => {
      const w = canvas.width
      const h = canvas.height
      
      // Canvas background clean stack frame
      ctx.fillStyle = '#050811'
      ctx.fillRect(0, 0, w, h)

      // Grid Pattern Lines (High Visibility)
      ctx.strokeStyle = 'rgba(0, 210, 255, 0.04)'
      ctx.lineWidth = 1
      ctx.beginPath()
      const gridSpacing = 60
      for (let x = 0; x < w; x += gridSpacing) {
        ctx.moveTo(x, 0)
        ctx.lineTo(x, h)
      }
      for (let y = 0; y < h; y += gridSpacing) {
        ctx.moveTo(0, y)
        ctx.lineTo(w, y)
      }
      ctx.stroke()

      // --- LAYER 1: NEON STREAMS ---
      for (const pulse of pulses) {
        ctx.save()
        ctx.shadowBlur = 12
        ctx.shadowColor = pulse.color
        ctx.strokeStyle = pulse.color
        ctx.globalAlpha = 0.4
        ctx.lineWidth = 2

        ctx.beginPath()
        if (pulse.isVertical) {
          ctx.moveTo(pulse.x, pulse.y)
          ctx.lineTo(pulse.x, pulse.y + pulse.length)
          pulse.y += pulse.speed
          if (pulse.y > h) {
            pulse.y = -pulse.length
            pulse.x = Math.random() * w
          }
        } else {
          ctx.moveTo(pulse.x, pulse.y)
          ctx.lineTo(pulse.x + pulse.length, pulse.y)
          pulse.x += pulse.speed
          if (pulse.x > w) {
            pulse.x = -pulse.length
            pulse.y = Math.random() * h
          }
        }
        ctx.stroke()
        ctx.restore()
      }

      // --- LAYER 2: INTERCONNECTED NEURAL NETWORKS ---
      const maxDistance = 130
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < maxDistance) {
            const alphaFactor = (1 - dist / maxDistance) * 0.25
            ctx.strokeStyle = `rgba(0, 210, 255, ${alphaFactor})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.stroke()
          }
        }
      }

      // --- LAYER 3: INTERACTIVE SYSTEM NODES ---
      const mouse = mouseRef.current
      for (const node of nodes) {
        node.x += node.vx
        node.y += node.vy

        if (node.x < 0 || node.x > w) node.vx *= -1
        if (node.y < 0 || node.y > h) node.vy *= -1

        const mdx = node.x - mouse.x
        const mdy = node.y - mouse.y
        const mDist = Math.sqrt(mdx * mdx + mdy * mdy)

        if (mDist < mouse.radius) {
          const dynamicFactor = (1 - mDist / mouse.radius)
          node.alpha = node.baseAlpha + dynamicFactor * 0.7
          
          ctx.strokeStyle = `rgba(99, 102, 241, ${dynamicFactor * 0.35})`
          ctx.lineWidth = 1.2
          ctx.beginPath()
          ctx.moveTo(node.x, node.y)
          ctx.lineTo(mouse.x, mouse.y)
          ctx.stroke()
        } else {
          node.alpha = node.baseAlpha
        }

        ctx.save()
        ctx.globalAlpha = node.alpha
        ctx.fillStyle = node.alpha > node.baseAlpha ? '#00d2ff' : '#6366f1'
        ctx.shadowBlur = node.alpha > node.baseAlpha ? 10 : 0
        ctx.shadowColor = '#00d2ff'
        
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      }

      animationId = window.requestAnimationFrame(draw)
    }

    draw()

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX
      mouseRef.current.y = e.clientY
    }

    const handleMouseLeave = () => {
      mouseRef.current.x = -1000
      mouseRef.current.y = -1000
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <canvas ref={canvasRef} className="absolute inset-0 w-screen h-screen block" />
    </div>
  )
}