import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './About.css'

gsap.registerPlugin(ScrollTrigger)

const About = () => {
  const aboutRef = useRef(null)

  useEffect(() => {
    const el = aboutRef.current
    gsap.fromTo(
      el.querySelector('.about-text'),
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    )
  }, [])

  return (
    <section className="about" ref={aboutRef}>
      <div className="about-text">
        <h2>Immersive Experience</h2>
        <p>
          This section fades in smoothly as you scroll down, enhancing the
          cinematic feel.
        </p>
      </div>
    </section>
  )
}

export default About
