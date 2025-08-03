import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './About.css'

gsap.registerPlugin(ScrollTrigger)

const About = () => {
  const aboutRef = useRef(null)

  useEffect(() => {
    gsap.from(aboutRef.current, {
      scrollTrigger: {
        trigger: aboutRef.current,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
      y: 100,
      opacity: 0,
      duration: 1.2,
      ease: 'power3.out',
    })
  }, [])

  return (
    <section className="about" ref={aboutRef}>
      <h2>About This Experience</h2>
      <p>
        This cinematic UI demonstrates scroll-driven animation, rich typography, and immersive layout. It is inspired by the zero limits of creativity in modern web design.
      </p>
    </section>
  )
}

export default About