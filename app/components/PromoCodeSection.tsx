'use client'

import { motion } from 'framer-motion'
import { GiftIcon, ClipboardDocumentIcon, CheckIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

export default function PromoCodeSection() {
  const [copied, setCopied] = useState(false)
  const promoCode = 'CHIAMAMI20'

  const handleCopy = () => {
    navigator.clipboard.writeText(promoCode)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="py-24 bg-gradient-payphone relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Gift Icon */}
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="inline-flex items-center justify-center w-24 h-24 bg-white rounded-full shadow-2xl mb-8"
          >
            <GiftIcon className="w-12 h-12 text-accent" />
          </motion.div>

          {/* Overline */}
          <p className="text-white font-semibold text-sm uppercase tracking-wide mb-4">
            OFFERTA LANCIO
          </p>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            20 minuti gratis sulla tua prima consulenza edile
          </h2>

          {/* Description */}
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            Prova Payphone senza rischi. Scarica l&apos;app, inserisci il codice promozionale e ricevi 20 minuti di consulenza gratuita con il professionista edile che scegli tu. Nessun vincolo, nessuna carta richiesta.
          </p>

          {/* Promo Code Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative inline-block mb-6"
          >
            <motion.div
              animate={{
                boxShadow: [
                  '0 0 20px rgba(255, 255, 255, 0.3)',
                  '0 0 40px rgba(255, 255, 255, 0.6)',
                  '0 0 20px rgba(255, 255, 255, 0.3)',
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="bg-white rounded-2xl p-8 border-4 border-white/20"
            >
              <div className="flex items-center gap-4">
                <code className="text-4xl md:text-5xl font-bold font-mono text-accent tracking-wider">
                  {promoCode}
                </code>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleCopy}
                  className="p-3 bg-accent hover:bg-purple-700 text-white rounded-lg transition-colors"
                  aria-label="Copia codice"
                >
                  {copied ? (
                    <CheckIcon className="w-6 h-6" />
                  ) : (
                    <ClipboardDocumentIcon className="w-6 h-6" />
                  )}
                </motion.button>
              </div>
            </motion.div>
          </motion.div>

          {/* Subtext */}
          <p className="text-white/80 text-sm mb-8 italic">
            Valido per nuovi utenti. Inserisci il codice prima della tua prima chiamata.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-textPrimary px-6 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-4 min-w-[200px]"
            >
              <svg className="w-10 h-10 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
              </svg>
              <div className="flex flex-col items-start">
                <span className="text-xs text-gray-600">Scarica su</span>
                <span className="text-xl font-bold leading-tight">App Store</span>
              </div>
            </motion.a>

            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-textPrimary px-6 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-4 min-w-[200px]"
            >
              <svg className="w-10 h-10 flex-shrink-0" viewBox="0 0 512 512" fill="currentColor">
                <path d="M48 59.49v393a4.33 4.33 0 007.37 3.07L260 256 55.37 56.42A4.33 4.33 0 0048 59.49zM345.8 174L89.22 32.64l-.16-.09c-4.42-2.4-8.62 3.58-5 7.06l201.13 192.32zM84.08 472.39c-3.64 3.48.56 9.46 5 7.06l.16-.09L345.8 338l-60.61-57.95zM449.38 231l-71.65-39.46L310.36 256l67.37 64.43L449.38 281c19.49-10.77 19.49-39.23 0-50z"/>
              </svg>
              <div className="flex flex-col items-start">
                <span className="text-xs text-gray-600">Scarica su</span>
                <span className="text-xl font-bold leading-tight">Google Play</span>
              </div>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
