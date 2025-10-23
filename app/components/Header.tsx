'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Considera fuori dalla sezione hero quando scroll > 70% dell'altezza viewport
      const threshold = window.innerHeight * 0.7
      setIsScrolled(window.scrollY > threshold)
    }

    // Controlla la posizione iniziale
    handleScroll()

    // Aggiungi listener per lo scroll
    window.addEventListener('scroll', handleScroll, { passive: true })

    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className={`hidden md:flex items-center relative -mt-8 transition-all duration-300 ${isScrolled ? '-mb-8' : ''}`}>
          {/* Logo bianco - visibile nella sezione hero */}
          <div className={`transition-opacity duration-300 ${isScrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
            <Image
              src="/images/Logo-Payphone-Bianco-OK.svg"
              alt="Payphone Logo"
              width={600}
              height={180}
              priority
              className="h-32 w-auto sm:h-40 md:h-48 lg:h-56 xl:h-64"
            />
          </div>

          {/* Logo dark - visibile fuori dalla sezione hero */}
          <div className={`absolute top-0 left-0 transition-opacity duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <Image
              src="/images/Logo-Payphone-Nero.svg"
              alt="Payphone Logo"
              width={600}
              height={180}
              priority
              className="h-32 w-auto sm:h-40 md:h-48 lg:h-56 xl:h-64"
            />
          </div>
        </div>
      </div>
    </motion.header>
  )
}
