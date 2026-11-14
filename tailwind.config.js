/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0B0B0F',
        'ink-soft': '#111117',
        'ink-line': '#1D1D25',
        gold: '#C9A84C',
        'gold-deep': '#A6873A',
        cream: '#F5F0E6',
      },
      fontFamily: {
        display: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        shell: '1240px',
      },
      letterSpacing: {
        eyebrow: '0.32em',
      },
      boxShadow: {
        card: '0 24px 60px -32px rgba(0,0,0,0.85)',
        lift: '0 32px 80px -40px rgba(0,0,0,0.9)',
        gold: '0 20px 50px -24px rgba(201,168,76,0.45)',
      },
      transitionTimingFunction: {
        out: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        'float-soft': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'draw-line': {
          from: { transform: 'scaleX(0)' },
          to: { transform: 'scaleX(1)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.8s ease-out both',
        'spin-slow': 'spin-slow 120s linear infinite',
        'float-soft': 'float-soft 9s ease-in-out infinite',
        'draw-line': 'draw-line 1.4s cubic-bezier(0.22, 1, 0.36, 1) both',
      },
    },
  },
  plugins: [],
};
