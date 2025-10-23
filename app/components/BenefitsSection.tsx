'use client'

import { motion } from 'framer-motion'
import { BoltIcon, ShieldCheckIcon, CurrencyEuroIcon } from '@heroicons/react/24/outline'

const features = [
  {
    icon: BoltIcon,
    title: 'Urgenze risolte in 60 secondi',
    description: 'Perdita d\'acqua improvvisa? Infiltrazione dal tetto? Quadro elettrico saltato? Trova subito l\'esperto disponibile e ottieni assistenza immediata per ogni emergenza edile. Niente code, niente attese: basta un tocco.',
    delay: 0.1,
  },
  {
    icon: ShieldCheckIcon,
    title: 'Solo professionisti certificati',
    description: 'Tutti i professionisti su Payphone sono verificati con titoli, abilitazioni e iscrizioni agli albi professionali. Architetti, ingegneri strutturali, geometri, impiantisti DM 37/08, coordinatori sicurezza: trovi solo chi è davvero qualificato.',
    delay: 0.2,
  },
  {
    icon: CurrencyEuroIcon,
    title: 'Trasparenza totale sui costi',
    description: 'Vedi subito la tariffa al minuto di ogni professionista prima di chiamare. Paghi solo se risponde e solo per i minuti effettivi di consulenza. Nessun costo nascosto, nessun impegno, nessuna sorpresa in fattura.',
    delay: 0.3,
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
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

export default function BenefitsSection() {
  return (
    <section className="pt-16 md:pt-24 pb-0 bg-white">
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
            PAYPHONE PER L&apos;EDILIZIA
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-textPrimary mb-6">
            Risolvi ogni problema edilizio in tempo reale
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Non perdere tempo con appuntamenti impossibili o preventivi che non arrivano mai. Su Payphone trovi migliaia di professionisti verificati pronti a darti risposte immediate: dall&apos;emergenza idraulica al calcolo strutturale, dalla pratica CILA al problema elettrico.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                y: -5,
                boxShadow: '0 20px 40px rgba(139, 92, 246, 0.3)',
              }}
              className="bg-background p-8 rounded-2xl shadow-lg transition-all duration-300 group"
            >
              <div className="mb-6">
                <feature.icon className="w-16 h-16 text-accent group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-2xl font-bold text-textPrimary mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
