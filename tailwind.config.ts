import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0B3142',
        'primary-dark': '#082A33',
        secondary: '#176978',
        'secondary-hover': '#105261',
        accent: '#648349',
        sage: '#DCE9DF',
        'sage-light': '#EDF3EE',
        background: '#F6F8F6',
        surface: '#FFFFFF',
        text: '#172C34',
        'text-muted': '#586B70',
        border: '#DCE5E1',
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        sans: ['var(--font-sans)', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 18px 36px rgba(11,49,66,0.08)',
      },
    },
  },
  plugins: [],
};

export default config;
