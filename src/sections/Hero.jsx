import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Hero.css'

gsap.registerPlugin(ScrollTrigger)

const Hero = () => {
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)

  useEffect(() => {
    gsap.from(titleRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    })

    gsap.from(subtitleRef.current, {
      y: 20,
      opacity: 0,
      duration: 1,
      delay: 0.3,
      ease: 'power3.out',
    })
  }, [])

  return (
    <section className="hero">
      <video
  className="hero-video"
  src="/bg-video.mp4"
  autoPlay
  muted
  loop
  playsInline
/>
      <div className="hero-content">
        <h1 ref={titleRef}>Zero Limits</h1>
        <p ref={subtitleRef}>Scroll to explore</p>

        <div className="scroll-indicator">
          <span>Scroll</span>
          <div className="arrow" />
        </div>
      </div>
    </section>
  )
}

export default Hero
