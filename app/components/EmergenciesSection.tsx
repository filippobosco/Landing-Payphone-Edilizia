'use client'

import { motion } from 'framer-motion'
import {
  ExclamationTriangleIcon,
  BoltSlashIcon,
  FireIcon,
  HomeModernIcon,
  DocumentTextIcon,
  WrenchScrewdriverIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/outline'
import { useRef } from 'react'

const emergencies = [
  {
    icon: ExclamationTriangleIcon,
    title: 'Perdite e infiltrazioni',
    description: 'Perdita d\'acqua improvvisa, infiltrazioni dal tetto, umidità sui muri. Collegati subito con un idraulico o un impermeabilizzatore e blocca il danno prima che peggiori.',
  },
  {
    icon: BoltSlashIcon,
    title: 'Guasti elettrici',
    description: 'Quadro saltato, prese che non funzionano, problemi all\'impianto elettrico. Trova subito un elettricista certificato DM 37/08 per un intervento in sicurezza.',
  },
  {
    icon: FireIcon,
    title: 'Caldaia e riscaldamento',
    description: 'Caldaia in blocco, termosifoni freddi, problemi al condizionamento. Parla immediatamente con un tecnico termoidraulico specializzato e risolvi il disagio.',
  },
  {
    icon: HomeModernIcon,
    title: 'Crepe e problemi strutturali',
    description: 'Crepe sui muri, cedimenti, dubbi sulla staticità dell\'edificio. Consulta subito un ingegnere strutturale per una valutazione professionale.',
  },
  {
    icon: DocumentTextIcon,
    title: 'Pratiche edilizie urgenti',
    description: 'Scadenze CILA/SCIA, problemi con il comune, documenti catastali. Un geometra o architetto ti guida subito per non perdere tempo prezioso.',
  },
  {
    icon: WrenchScrewdriverIcon,
    title: 'Interventi d\'emergenza',
    description: 'Serramenti rotti, vetri da sostituire, riparazioni urgenti. Trova subito fabbri, serramentisti e artigiani disponibili nella tua zona.',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export default function EmergenciesSection() {
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
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-semibold text-sm uppercase tracking-wide mb-3">
            LE EMERGENZE PIÙ FREQUENTI
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-textPrimary mb-6">
            Quando hai bisogno di aiuto immediato
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Queste sono le situazioni urgenti più comuni che Payphone risolve ogni giorno. Non aspettare che il problema si aggravi: trova subito l&apos;esperto giusto.
          </p>
        </motion.div>

        {/* Emergencies Grid - Carousel on mobile */}
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

          <motion.div
            ref={scrollContainerRef}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory flex md:block gap-8 pb-4 -mx-6 px-6 sm:-mx-8 sm:px-8 lg:-mx-12 lg:px-12 md:mx-0 md:px-0 scrollbar-hide"
          >
          {emergencies.map((emergency, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                y: -5,
                boxShadow: '0 20px 40px rgba(139, 92, 246, 0.3)',
              }}
              className="bg-background p-8 rounded-2xl shadow-lg transition-all duration-300 group snap-center flex-shrink-0 w-[85vw] sm:w-[70vw] md:w-auto"
            >
              <div className="mb-6">
                <emergency.icon className="w-16 h-16 text-accent group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-2xl font-bold text-textPrimary mb-4">
                {emergency.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {emergency.description}
              </p>
            </motion.div>
          ))}
          </motion.div>
        </div>

        {/* Scroll Indicator - Only visible on mobile */}
        <div className="flex justify-center gap-2 mt-6 md:hidden">
          {emergencies.map((_, index) => (
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
