/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#FF6A00',
          50: '#FFF3E9',
          100: '#FFE2CC',
          200: '#FFC599',
          300: '#FFA866',
          400: '#FF8B33',
          500: '#FF6A00',
          600: '#E55F00',
          700: '#CC5500',
          800: '#993F00',
          900: '#662A00',
        },
        ink: {
          DEFAULT: '#0A0A0A',
          soft: '#1A1A1A',
          muted: '#6B6B6B',
          line: '#E8E8E8',
        },
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        premium: '0 20px 60px -15px rgba(0,0,0,0.12)',
        'premium-lg': '0 40px 100px -20px rgba(0,0,0,0.18)',
        glow: '0 0 40px rgba(255,106,0,0.45)',
        'glow-lg': '0 0 70px rgba(255,106,0,0.55)',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        float: 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2.8s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        pulseGlow: {
          '0%,100%': { boxShadow: '0 0 30px rgba(255,106,0,0.4)' },
          '50%': { boxShadow: '0 0 60px rgba(255,106,0,0.65)' },
        },
      },
      borderRadius: {
        '2xl': '1.25rem',
        '3xl': '1.75rem',
        '4xl': '2.25rem',
      },
    },
  },
  plugins: [],
};
