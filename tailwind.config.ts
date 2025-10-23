import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF6A00',
        secondary: '#00B7FF',
        accent: '#A03478',
        background: '#FAFBFC',
        textPrimary: '#1A202C',
      },
      backgroundImage: {
        'gradient-payphone': 'linear-gradient(135deg, #00B7FF 0%, #A03478 50%, #FF6A00 100%)',
        'gradient-hero': 'linear-gradient(to right, rgba(15, 23, 42, 0.75) 0%, rgba(15, 23, 42, 0.6) 50%, rgba(15, 23, 42, 0.5) 100%)',
      },
      boxShadow: {
        'construction-soft': '0 4px 20px rgba(160, 52, 120, 0.15)',
        'construction-strong': '0 8px 30px rgba(160, 52, 120, 0.25)',
      },
    },
  },
  plugins: [],
}

export default config
