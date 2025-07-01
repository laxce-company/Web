"use client"

import { useEffect, useRef } from 'react'

export function AbstractLines() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Line properties
    const lines: Array<{
      x1: number
      y1: number
      x2: number
      y2: number
      speed: number
      opacity: number
    }> = []

    // Create initial lines
    const createLines = () => {
      lines.length = 0
      const numLines = 8 // Simple and clean
      
      for (let i = 0; i < numLines; i++) {
        lines.push({
          x1: Math.random() * canvas.width,
          y1: Math.random() * canvas.height,
          x2: Math.random() * canvas.width,
          y2: Math.random() * canvas.height,
          speed: 0.2 + Math.random() * 0.3,
          opacity: 0.3 + Math.random() * 0.4
        })
      }
    }

    createLines()

    // Animation variables
    let scrollY = 0
    let animationId: number

    // Handle scroll
    const handleScroll = () => {
      scrollY = window.scrollY
    }
    window.addEventListener('scroll', handleScroll)

    // Animation loop
    const animate = () => {
      // Clear canvas completely for clean animation
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw lines
      lines.forEach((line, index) => {
        // Move lines based on scroll
        const moveX = scrollY * 0.1 * line.speed
        const moveY = scrollY * 0.05 * line.speed

        // Calculate positions with scroll movement
        const x1 = (line.x1 + moveX) % canvas.width
        const y1 = (line.y1 + moveY) % canvas.height
        const x2 = (line.x2 + moveX) % canvas.width
        const y2 = (line.y2 + moveY) % canvas.height

        // Alternate between brand colors
        const colors = ['#0B6BAB', '#0BAB9B']
        const color = colors[index % colors.length]

        // Draw line
        ctx.beginPath()
        ctx.moveTo(x1, y1)
        ctx.lineTo(x2, y2)
        ctx.strokeStyle = `${color}${Math.floor(line.opacity * 255).toString(16).padStart(2, '0')}`
        ctx.lineWidth = 1
        ctx.stroke()

        // Add subtle glow effect
        ctx.shadowColor = color
        ctx.shadowBlur = 3
        ctx.stroke()
        ctx.shadowBlur = 0
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('scroll', handleScroll)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none -z-10"
      style={{ background: 'transparent' }}
    />
  )
} 