import { useEffect, useRef } from 'react'

export const InteractiveCircle = () => {
  const circleRef = useRef<HTMLDivElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!circleRef.current || !glowRef.current) return

      const circle = circleRef.current
      const glow = glowRef.current
      const rect = circle.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      // Calculate angle from center to mouse
      const deltaX = e.clientX - centerX
      const deltaY = e.clientY - centerY
      const angle = Math.atan2(deltaY, deltaX)
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY)

      // Only activate when mouse is near the circle
      const maxDistance = rect.width / 2 + 200 // 200px threshold

      if (distance < maxDistance) {
        const opacity = Math.max(0, 1 - distance / maxDistance)

        // Position the glow on the circle's edge
        const radius = rect.width / 2
        const glowX = Math.cos(angle) * radius
        const glowY = Math.sin(angle) * radius

        glow.style.opacity = `${opacity * 0.8}`
        glow.style.transform = `translate(${glowX}px, ${glowY}px)`
      } else {
        glow.style.opacity = '0'
      }
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div className="interactive-circle-container">
      <div ref={circleRef} className="interactive-circle">
        <div ref={glowRef} className="circle-glow" />
      </div>
    </div>
  )
}
