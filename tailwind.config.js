/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#ecfdf5', //RichNote: Grey
          100: '#d1fae5',//RichNote: Light green
          200: '#a7f3d0',//RichNote: Light green
          300: '#6ee7b7',//RichNote: Medium green
          400: '#012169',//RichNote: Duke Navy Blue #012169 || Old Medium green #34d399
		  401: '#729ecc',//RichNote: Light Blue #729ecc || Old Medium green #34d399
          500: '#729ecc',//RichNote: Added to fix the website text and graphics color. Old green #059669 || Light Blue #729ecc
		  501: '#012169',//RichNote: Added to fix the banner logo color. Old green #059669 || Duke Navy Blue #012169
          600: '#729ecc',//RichNote: Added to fix the website text and graphics color. Old green #059669 || Light Blue #729ecc
		  601: '#012169',//RichNote: Added to fix the banner logo color. Old green #059669 || Duke Navy Blue #012169
          700: '#047857',//RichNote: Dark green
          800: '#065f46',//RichNote: Dark green
          900: '#064e3b',//RichNote: Very dark green
        },
        dark: {
          50: '#f8fafc',//RichNote: Light grey
          100: '#f1f5f9',//RichNote: Light grey
          200: '#e2e8f0',//RichNote: Light grey
          300: '#cbd5e1',//RichNote: Medium grey
          400: '#94a3b8',//RichNote: Off blue
          500: '#64748b',//RichNote: Dark off blue
          600: '#475569',//RichNote: Darker off blue
          700: '#334155',//RichNote: Dark off blue
          800: '#1e293b',//RichNote: Very dark off blue
          900: '#0f172a',//RichNote: Very dark off blue
          950: '#0a0f1a',//RichNote: Very dark off blue, almost black.
        },
        accent: {
          amber: '#f59e0b',
          indigo: '#6366f1',
          red: '#ef4444',
        },
      },
      fontFamily: {
        sans: ['Outfit', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'grid-pattern': `
          linear-gradient(rgba(16, 185, 129, 0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(16, 185, 129, 0.03) 1px, transparent 1px)
        `,
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, #10b981, #059669)',
      },
      backgroundSize: {
        'grid': '60px 60px',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
};
