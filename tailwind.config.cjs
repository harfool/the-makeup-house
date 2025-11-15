/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Premium beauty brand palette
        cream: '#FFF9F5',
        'cream-dark': '#FFF5EF',
        blush: {
          50: '#FFF5F7',
          100: '#FFE8ED',
          200: '#FFD1DC',
          300: '#FFB3C6',
          400: '#FF8FA8',
          500: '#FF6B8A',
          600: '#E85577',
        },
        rose: {
          50: '#FFF1F3',
          100: '#FFE4E9',
          200: '#FFCCD5',
          300: '#FF9DB2',
          400: '#FF6B8A',
          500: '#E8527D',
        },
        nude: {
          50: '#FAF8F6',
          100: '#F5F1ED',
          200: '#EAE3DC',
          300: '#D9CEC3',
          400: '#C4B5A7',
        },
        gold: {
          50: '#FFFBF0',
          100: '#FFF6DC',
          200: '#FFEDB3',
          300: '#FFE08A',
          400: '#FFD666',
          500: '#F4C430',
        },
        brand: {
          50: '#FDF4F8',
          100: '#FAE8F0',
          200: '#F4C5DC',
          300: '#E899BA',
          400: '#D66D98',
          500: '#C44176',
          600: '#8B2E54',
          700: '#6B1B4D',
          800: '#4A1335',
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        'display-lg': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display': ['3.5rem', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        'hero': ['2.75rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-in-up': 'fadeInUp 0.7s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.4s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'glow': 'glow 2s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255, 107, 138, 0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(255, 107, 138, 0.5), 0 0 40px rgba(255, 107, 138, 0.3)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backdropBlur: {
        'xs': '2px',
      },
      boxShadow: {
        'luxury': '0 10px 40px rgba(107, 27, 77, 0.12)',
        'luxury-lg': '0 20px 60px rgba(107, 27, 77, 0.18)',
        'glow': '0 0 30px rgba(255, 107, 138, 0.3)',
        'glow-lg': '0 0 50px rgba(255, 107, 138, 0.4)',
      },
    },
  },
  plugins: [],
}
