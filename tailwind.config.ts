import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './utils/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      primary: 'rgb(var(--color-primary))',
      secondary: 'rgb(var(--color-secondary))',
      accent: 'rgb(var(--color-accent))',
      background: 'rgb(var(--color-background))',
      text: 'rgb(var(--color-text))',
      neutral: 'rgb(var(--color-neutral))',
      important: 'rgb(var(--color-important))',
      highlight: 'rgb(var(--color-highlight))',
      good: 'rgb(var(--color-good))',
      ok: 'rgb(var(--color-ok))',
      bad: 'rgb(var(--color-bad))',
      border: 'rgb(var(--color-border)/ 0.5)',
      'hovered-border': 'rgb(var(--color-hovered-border)/ 0.5)',
    },
    fontSize: {
      subtitle: ['13px', { lineHeight: '18px', fontWeight: 700 }],
      'out-of': [
        '40px',
        { lineHeight: '76px', letterSpacing: '-0.05em', fontWeight: 300 },
      ],
      superheading: [
        '3.75rem',
        { lineHeight: '5rem', letterSpacing: '-0.02em', fontWeight: 700 },
      ],
      superbody: [
        '1.5rem',
        { lineHeight: '2rem', letterSpacing: '-0.02em', fontWeight: 400 },
      ],
      title: [
        '34px',
        { lineHeight: '41px', letterSpacing: '-0.02em', fontWeight: 700 },
      ],
      heading: [
        '17px',
        { lineHeight: '26px', letterSpacing: '0.02em', fontWeight: 600 },
      ],
      subheading: ['15px', { lineHeight: '20px', fontWeight: 300 }],
      'body-bold': ['17px', { lineHeight: '22px', fontWeight: 700 }],
      body: [
        '17px',
        { lineHeight: '26px', letterSpacing: '0.02em', fontWeight: 400 },
      ],
      button: [
        '16px',
        { letterSpacing: '-0.02em', lineHeight: '19.4px', fontWeight: 500 },
      ],
      tag: ['16px', { lineHeight: '19.4px', fontWeight: 400 }],
      caption: ['12px', { lineHeight: '14.5px', fontWeight: 400 }],
      ascii: [
        '5px',
        { lineHeight: '3px', letterSpacing: '0.02em', fontWeight: 400 },
      ],
    },
    extend: {
      borderRadius: {
        lg: '24px',
        md: '12px',
        sm: '6px',
      },
      boxShadow: {
        sm: '0px 4px 8px rgba(0, 0, 0, 0.015)',
        paper: '0px 4px 16px rgba(0, 0, 0, 0.025)',
      },
      backdropBlur: {
        10: '17px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwindcss-unimportant'),
    plugin(({ addUtilities }) => {
      addUtilities({
        '.animation': {
          '@apply transition-all duration-100 ease-in-out': {},
        },
        '.max-width': {
          '@apply w-full max-w-[1076px]': {},
        },
        '.default-border': {
          '@apply border-2 border-border': {},
        },
        '.default-border-focus': {
          '@apply border-2 border-primary': {},
        },
      });
    }),
  ],
};
export default config;
