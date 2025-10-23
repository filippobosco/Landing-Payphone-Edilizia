# Hero Image - Specifiche e Note

## Posizione
`/public/images/hero-construction-team.jpg`

## Specifiche Tecniche

### Dimensioni e Formato
- **Aspect Ratio:** 16:9
- **Risoluzione minima:** 1920 x 1080 px
- **Formato preferito:** WebP (con fallback JPEG)
- **Dimensione file:** < 500KB (ottimizzata per web)

### Soggetto Fotografico

#### Persone (4-5 professionisti)
- Architetto con progetti/tablet
- Ingegnere con casco e gilet
- Geometra con strumenti di misura
- Elettricista/Impiantista in abbigliamento tecnico
- Mix di età e genere per rappresentatività

#### Ambiente
- Cantiere moderno luminoso OPPURE
- Ufficio tecnico con tavoli da disegno/computer
- Sfondo con elementi edilizi (strutture, materiali, progetti)
- Luce naturale preferibile

#### Stile
- Professionale ma approachable
- Dinamico (non pose statiche formali)
- Team che collabora o guarda verso la camera
- Espressioni positive e sicure

### Mood e Colori
- Palette luminosa
- Contrasti moderati
- Colori complementari a: arancione (#F76a00), blu (#00b7ff)
- Evitare toni troppo caldi/freddi che contrastano con brand

## Overlay CSS
L'immagine avrà un overlay gradient applicato via CSS:
```css
background: linear-gradient(to right,
  rgba(15, 23, 42, 0.75) 0%,
  rgba(15, 23, 42, 0.6) 50%,
  rgba(15, 23, 42, 0.5) 100%
)
```

Quindi l'immagine deve essere abbastanza luminosa da rimanere visibile sotto l'overlay.

## Dove Trovare Immagini

### Stock Photos (gratis)
- Unsplash.com - cerca "construction team", "architect team", "engineers"
- Pexels.com - cerca "construction professionals", "building team"
- Pixabay.com - simili chiavi di ricerca

### Stock Photos (a pagamento)
- Shutterstock
- iStock
- Adobe Stock

### Keywords di Ricerca
- "construction team professionals"
- "architect engineer team"
- "building site workers"
- "construction professionals portrait"
- "engineering team modern office"

## Ottimizzazione

### Prima del Deploy
1. Ridimensiona a 1920x1080 se più grande
2. Converti in WebP usando tool come:
   - Squoosh.app
   - CloudConvert
   - ImageMagick
3. Mantieni una versione JPEG come fallback
4. Target: 300-500KB per WebP, 500-800KB per JPEG

### Next.js Image Optimization
Il componente usa già l'ottimizzazione automatica di Next.js, ma fornire l'immagine già ottimizzata migliora ulteriormente le performance.

## Fallback Temporaneo

Se non hai ancora l'immagine, puoi usare un gradient temporaneo modificando HeroSection.tsx:

```tsx
// Sostituisci la riga:
style={{ backgroundImage: "url('/images/hero-construction-team.jpg')" }}

// Con:
style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}
```
