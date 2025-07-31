import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Outro.css'

gsap.registerPlugin(ScrollTrigger)

const Outro = () => {
  const outroRef = useRef(null)

  useEffect(() => {
    const el = outroRef.current

    gsap.fromTo(
      el,
      { autoAlpha: 0, y: 100 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 90%',
          toggleActions: 'play none none reverse',
        },
      }
    )
  }, [])

  return (
    <section className="outro" ref={outroRef}>
      <h2>Thank you for scrolling!</h2>
      <p>We hope you enjoyed this immersive experience.</p>
    </section>
  )
}

export default Outro
