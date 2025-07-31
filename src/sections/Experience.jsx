import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Experience.css'

gsap.registerPlugin(ScrollTrigger)

const Experience = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    const items = containerRef.current.querySelectorAll('.exp-item')

    gsap.from(items, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
      y: 60,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out',
    })
  }, [])

  return (
    <section className="experience">
      <h2>Experience</h2>
      <div className="exp-container" ref={containerRef}>
        <div className="exp-item">
          <h3>Animation</h3>
          <p>Scroll-driven animations built with GSAP ScrollTrigger.</p>
        </div>
        <div className="exp-item">
          <h3>Design</h3>
          <p>Inspired by cinematic and immersive web aesthetics.</p>
        </div>
        <div className="exp-item">
          <h3>Performance</h3>
          <p>Optimized layout with smooth transitions and lightweight assets.</p>
        </div>
      </div>
    </section>
  )
}

export default Experience
