import { Menu, X } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false)
  const menuRef = useRef(null)
  const xRef = useRef(null)
  const mobileMenuRef = useRef(null)
  const headingRef = useRef(null)
  const headerRef = useRef(null)

  useEffect(() => {
    const navTl = gsap.timeline()

    if (openNav) {
      gsap.fromTo(
        xRef.current,
        { rotate: -90, opacity: 0 },
        { rotate: 0, opacity: 1, duration: 0.4, ease: "power2.out" }
      )

      navTl.fromTo(
        mobileMenuRef.current,
        {
          transformOrigin: "top center",
          rotateX: -90,
          scaleY: 0,
          opacity: 0,
          pointerEvents: "none"
        },
        {
          rotateX: 0,
          scaleY: 1,
          opacity: 1,
          pointerEvents: "auto",
          duration: 0.8,
          ease: "power4.inOut",
        }
      ).fromTo(
        '.mobile-nav-li',
        { x: 15, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.4, stagger: 0.08 },
        "-=0.3"
      )
    } else {
      gsap.fromTo(
        menuRef.current,
        { rotate: 90, opacity: 0 },
        { rotate: 0, opacity: 1, duration: 0.4, ease: "power2.out" }
      )

      navTl.to('.mobile-nav-li', {
        x: 15,
        opacity: 0,
        duration: 0.3,
        stagger: 0.05
      }).to(
        mobileMenuRef.current,
        {
          transformOrigin: "top center",
          rotateX: -90,
          scaleY: 0,
          opacity: 0,
          pointerEvents: "none",
          duration: 0.8,
          ease: "power4.inOut",
        },
        "-=0.2"
      )
    }
  }, [openNav])
  // for Pc
  useEffect(() => {
  const tl = gsap.timeline()
  tl.from(headerRef.current, {
    y: -30,
    opacity: 0,
    duration: 0.5,
    delay: 1
  })
  tl.from(headingRef.current, {
    y: 10,
    opacity: 0,
    duration: 0.6,
    delay: 1,
    ease: "power2.out"
  })
  tl.from('.list-items-li', {
    y: 0,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
      stagger: {
        each: 0.08
      },
      clearProps: 'all'
  })
}, [])

  return (
    <header ref={headerRef} className='w-full py-4 md:py-6 px-6 md:px-20 flex justify-between items-center border-b-2 border-black fixed bg-white z-40 '>
      <div className="left cursor-pointer ">
        <h1 ref={headingRef} className='navHeading font-medium uppercase text-3xl md:text-5xl tracking-tight italic'><a href="#hero">Vish<span className='not-italic'>a</span>l</a></h1>
      </div>

      <div className='right'>
        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setOpenNav(!openNav)}
          className='list-items-li md:hidden block cursor-pointer focus:outline-none'
          aria-label="Toggle Navigation"
        >
          {openNav ? (
            <span ref={xRef} className="inline-block">
              <X size={32} />
            </span>
          ) : (
            <span ref={menuRef} className="inline-block">
              <Menu size={32} />
            </span>
          )}
        </button>

        {/* Desktop Navigation */}
        <ul className='hidden md:flex uppercase font-mono items-center gap-8 text-base font-semibold'>
          <li className='list-items-li hover:text-black hover:scale-105 transition-transform cursor-pointer'><a href="#about">About</a></li>
          <li className='list-items-li hover:text-black hover:scale-105 transition-transform cursor-pointer'><a href="#work">Work</a></li>
          <li className='list-items-li hover:text-black hover:scale-105 transition-transform cursor-pointer'><a href="#journey">Journey</a></li>
          <li className='list-items-li hover:text-black hover:scale-105 transition-transform cursor-pointer'><a href="#contact">Contact</a></li>
        </ul>

        {/* Mobile Fullscreen Menu */}
        <ul
          ref={mobileMenuRef}
          className='mobile-menu fixed top-18 left-0 w-full h-screen flex flex-col items-center justify-center gap-8 text-4xl font-mono bg-white opacity-0 pointer-events-none z-30 md:hidden'
        >
          <li className='mobile-nav-li cursor-pointer hover:scale-105 transition-transform'><a href="#about">About</a></li>
          <li className='mobile-nav-li cursor-pointer hover:scale-105 transition-transform'><a href="#work">Work</a></li>
          <li className='mobile-nav-li cursor-pointer hover:scale-105 transition-transform'><a href="#journey">Journey</a></li>
          <li className='mobile-nav-li cursor-pointer hover:scale-105 transition-transform'><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </header>
  )
}

export default Navbar
