# Payphone Edilizia - Landing Page

Landing page moderna e animata per Payphone Edilizia, sviluppata con Next.js 14, Tailwind CSS 4.1+ e Framer Motion 12.

## Stack Tecnologico

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS 4.1+
- **Animations:** Framer Motion 12
- **Icons:** Heroicons
- **Language:** TypeScript

## Caratteristiche

- Hero section con overlay gradient e animazioni
- Sezione benefits con 3 feature cards animate
- Counter animations per le statistiche
- How it works con 3 steps sequenziali
- Sezione codice promo speciale con effetto glow
- Grid di urgenze edili con hover effects
- CTA finale con pattern background animato
- Footer con links e branding
- Completamente responsive (mobile-first)
- Ottimizzato per performance e accessibilità

## Setup del Progetto

### Prerequisiti

- Node.js 18+ installato
- npm o yarn

### Installazione

1. Installa le dipendenze:

```bash
npm install
# oppure
yarn install
```

2. Avvia il server di sviluppo:

```bash
npm run dev
# oppure
yarn dev
```

3. Apri il browser su [http://localhost:3000](http://localhost:3000)

### Build per Produzione

```bash
npm run build
npm start
```

## Struttura del Progetto

```
payphone-edilizia-landing/
├── app/
│   ├── components/
│   │   ├── HeroSection.tsx
│   │   ├── BenefitsSection.tsx
│   │   ├── StatsSection.tsx
│   │   ├── HowItWorksSection.tsx
│   │   ├── PromoCodeSection.tsx
│   │   ├── EmergenciesSection.tsx
│   │   ├── FinalCTASection.tsx
│   │   └── Footer.tsx
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── public/
│   └── images/
│       └── hero-construction-team.jpg (da aggiungere)
├── tailwind.config.ts
├── tsconfig.json
├── next.config.mjs
└── package.json
```

## Personalizzazioni

### Colori

I colori del brand sono definiti in `tailwind.config.ts`:

- **Primary:** #F76a00 (arancione costruzione)
- **Secondary:** #00b7ff (blu professionale)
- **Accent:** #a03478 (viola/magenta)

### Immagine Hero

Aggiungi un'immagine di un team di professionisti edili in `/public/images/hero-construction-team.jpg`

Specifiche consigliate:
- Aspect ratio: 16:9
- Risoluzione minima: 1920x1080
- Formato: WebP (con fallback JPEG)
- Soggetto: Team di 4-5 professionisti in cantiere o ufficio tecnico

### Animazioni

Tutte le animazioni sono configurate con Framer Motion. Puoi personalizzarle modificando:
- `initial`, `animate`, `whileInView` props nei componenti
- `transition` durations e easing
- `variants` per animazioni complesse

## Performance

- Lazy loading automatico per le immagini
- Intersection Observer per animazioni viewport-triggered
- Ottimizzazione bundle con Next.js
- CSS Transform per animazioni performanti

## Accessibilità

- Contrasti WCAG AA per tutti i testi
- Focus states chiari per navigazione da tastiera
- Aria-labels descrittivi
- Alt text per le immagini

## Deploy

Il progetto può essere deployato su:

- **Vercel** (consigliato per Next.js)
- **Netlify**
- **AWS Amplify**
- Altri provider con supporto Next.js

## Codice Promo

Il codice promozionale **CHIAMAMI20** è configurato nella sezione PromoCodeSection con:
- Copia automatica negli appunti
- Animazioni glow e pulse
- Feedback visivo al click

## Links Store

I bottoni di download iOS/Android sono configurati in FinalCTASection. Aggiorna gli href con i link reali agli store:

```tsx
// iOS
href="https://apps.apple.com/..."

// Android
href="https://play.google.com/..."
```

## Sviluppo

Ogni sezione è un componente separato in `/app/components/` per facilitare:
- Manutenzione
- Riutilizzo
- Testing
- Modifiche future

## Licenza

© 2025 Payphone. Tutti i diritti riservati.

Developed by **meravigliàLab**
