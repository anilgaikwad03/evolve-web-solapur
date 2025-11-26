/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        accent: {
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        },
        blue: {
        500: '#3b82f6',
        600: '#2563eb',
      },
      purple: {
        500: '#a855f7', 
        600: '#9333ea',
      },
      cyan: {
        500: '#06b6d4',
        600: '#0891b2',
      },
      pink: {
        500: '#ec4899',
        600: '#db2777',
      }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'grotesk': ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
        'float': 'float 6s ease-in-out infinite',
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(to right, #80808012 1px, transparent 1px), linear-gradient(to bottom, #80808012 1px, transparent 1px)',
      }
    },
  },
  plugins: [],
}