import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Outro.css'

gsap.registerPlugin(ScrollTrigger)

const Outro = () => {
  const outroRef = useRef(null)

  useEffect(() => {
    gsap.from(outroRef.current, {
      scrollTrigger: {
        trigger: outroRef.current,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
      opacity: 0,
      y: 50,
      duration: 1.2,
      ease: 'power2.out',
    })
  }, [])

  return (
    <section className="outro" ref={outroRef}>
      <h2>Thank You for Scrolling</h2>
      <p>
        This demo was built to showcase scroll-driven animation, immersive design,
        and modern front-end techniques. Hope you enjoyed the experience!
      </p>
      <a href="#top" className="outro-btn">Back to Top</a>
    </section>
  )
}

export default Outro