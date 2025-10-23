'use client'

import { motion } from 'framer-motion'
import { DevicePhoneMobileIcon, MagnifyingGlassIcon, PhoneIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import { useRef } from 'react'

const steps = [
  {
    number: '01',
    icon: DevicePhoneMobileIcon,
    title: 'Scarica e registrati',
    description: 'Scarica gratuitamente l\'app Payphone per iOS o Android. La registrazione richiede meno di 2 minuti e non hai alcun obbligo di abbonamento.',
    delay: 0,
  },
  {
    number: '02',
    icon: MagnifyingGlassIcon,
    title: 'Cerca il professionista',
    description: 'Sfoglia le categorie edili o usa la ricerca per trovare l\'esperto che ti serve: architetto, ingegnere, geometra, elettricista, idraulico, muratore e molti altri. Leggi le recensioni e scegli in base a tariffa e disponibilità.',
    delay: 0.15,
  },
  {
    number: '03',
    icon: PhoneIcon,
    title: 'Chiama e risolvi',
    description: 'Un tocco per chiamare. Ricevi la tua consulenza in tempo reale, paghi solo i minuti effettivi di conversazione. Se il professionista non risponde, non paghi nulla.',
    delay: 0.3,
  },
]

export default function HowItWorksSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.offsetWidth * 0.8
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-accent font-semibold text-sm uppercase tracking-wide mb-3">
            SEMPLICE E VELOCE
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-textPrimary mb-6">
            3 passaggi per risolvere il tuo problema edilizio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Niente burocrazia, niente attese infinite. Con Payphone ottieni assistenza professionale in meno di 2 minuti.
          </p>
        </motion.div>

        {/* Steps - Carousel on mobile, Grid on desktop */}
        <div className="relative">
          {/* Navigation Arrows - Only visible on mobile */}
          <button
            onClick={() => scroll('left')}
            className="md:hidden absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Scorri a sinistra"
          >
            <ChevronLeftIcon className="w-6 h-6 text-textPrimary" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="md:hidden absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Scorri a destra"
          >
            <ChevronRightIcon className="w-6 h-6 text-textPrimary" />
          </button>

          <div
            ref={scrollContainerRef}
            className="md:grid md:grid-cols-3 md:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory flex md:block gap-8 pb-4 pt-8 -mx-6 px-6 sm:-mx-8 sm:px-8 lg:-mx-12 lg:px-12 md:mx-0 md:px-0 md:pt-0 scrollbar-hide"
          >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: step.delay }}
              className="relative flex snap-center flex-shrink-0 w-[85vw] sm:w-[70vw] md:w-auto first:ml-4 md:first:ml-0"
            >
              {/* Step Number Badge */}
              <div className="absolute -top-4 left-2 md:-left-4 w-16 h-16 bg-gradient-payphone rounded-full flex items-center justify-center text-white font-bold text-xl shadow-construction-strong z-10">
                {step.number}
              </div>

              {/* Card */}
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white p-8 pt-12 rounded-2xl shadow-lg hover:shadow-construction-strong transition-all duration-300 w-full flex flex-col"
              >
                <div className="w-20 h-20 bg-gray-100 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <step.icon className="w-10 h-10 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-textPrimary mb-4 text-center">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-center flex-grow">
                  {step.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
          </div>
        </div>

        {/* Scroll Indicator - Only visible on mobile */}
        <div className="flex justify-center gap-2 mt-6 md:hidden">
          {steps.map((_, index) => (
            <div
              key={index}
              className="w-2 h-2 rounded-full bg-gray-300"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
