'use client'

import { motion, animate } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

interface StatCardProps {
  number: string
  label: string
  suffix?: string
}

function StatCard({ number, label, suffix = '' }: StatCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (isInView) {
      const numValue = number.includes('+')
        ? parseInt(number.replace(/[+,]/g, ''))
        : number === '<2 min'
        ? 2
        : parseInt(number.replace('%', ''))

      const controls = animate(0, numValue, {
        duration: 2,
        ease: 'easeOut',
        onUpdate: (latest) => {
          setDisplayValue(latest)
        },
      })

      return controls.stop
    }
  }, [isInView, number])

  const formattedValue = suffix === '%'
    ? Math.round(displayValue)
    : Math.round(displayValue).toLocaleString('it-IT')

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <div className="text-5xl md:text-6xl font-bold bg-gradient-payphone bg-clip-text text-transparent mb-3">
        {number === '<2 min' ? (
          '< 2 min'
        ) : (
          <>
            {formattedValue}
            {number.includes('+') && '+'}
            {suffix}
          </>
        )}
      </div>
      <div className="text-lg md:text-xl text-gray-700 font-medium">
        {label}
      </div>
    </motion.div>
  )
}

export default function StatsSection() {
  const stats = [
    { number: '5000+', label: 'Professionisti edili verificati' },
    { number: '50000+', label: 'Consulenze edili completate' },
    { number: '98', label: 'Clienti soddisfatti', suffix: '%' },
    { number: '<2 min', label: 'Tempo medio di risposta' },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              number={stat.number}
              label={stat.label}
              suffix={stat.suffix}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
