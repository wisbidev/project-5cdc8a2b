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
        bg: '#F9FAFB',
        surface: '#FFFFFF',
        ink: '#111827',
        muted: '#6B7280',
        primary: {
          DEFAULT: '#4F46E5',
          strong: '#4338CA',
          soft: '#EEF2FF',
        },
        accent: '#F59E0B',
        border: '#E5E7EB',
        success: '#22C55E',
        'success-bg': '#F0FDF4',
        'success-border': '#BBF7D0',
        danger: '#DC2626',
        'error-bg': '#FEF2F2',
        placeholder: '#9CA3AF',
      },
      borderRadius: {
        sm: '6px',
        md: '12px',
        card: '14px',
        lg: '16px',
        xl: '20px',
        '2xl': '24px',
      },
      boxShadow: {
        sm: '0 10px 30px rgba(17,24,39,.08)',
        md: '0 24px 60px rgba(17,24,39,.14)',
      },
      transitionTimingFunction: {
        ease: 'cubic-bezier(.22,.61,.36,1)',
      },
      transitionDuration: {
        fast: '200ms',
        base: '250ms',
        slow: '300ms',
        panel: '350ms',
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],
      },
      fontSize: {
        xs: ['13px', { lineHeight: '1.5', fontWeight: '700' }],
        sm: ['14px', { lineHeight: '1.5', fontWeight: '500' }],
        base: ['15px', { lineHeight: '1.65', fontWeight: '400' }],
        lg: ['16.5px', { lineHeight: '1.65', fontWeight: '400' }],
        xl: ['18px', { lineHeight: '1.4', fontWeight: '700' }],
        '2xl': ['clamp(26px,3.4vw,34px)', { lineHeight: '1.15', fontWeight: '800' }],
        '3xl': ['clamp(40px,6vw,64px)', { lineHeight: '1.08', fontWeight: '800' }],
        lead: ['22px', { lineHeight: '1.3', fontWeight: '700' }],
      },
      maxWidth: {
        container: '1120px',
      },
      spacing: {
        '1': '4px',
        '2': '8px',
        '3': '12px',
        '4': '16px',
        '6': '24px',
        '7': '28px',
        '8': '32px',
        '10': '40px',
        '12': '48px',
        '14': '56px',
      },
      zIndex: {
        skip: '200',
        sticky: '100',
        modal: '300',
        toast: '400',
      },
    },
  },
  plugins: [],
}

export default config
