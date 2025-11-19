export const theme = {
  colors: {
    primary: '#6366F1',
    primaryDark: '#4F46E5',
    primaryLight: '#818CF8',
    secondary: '#818CF8',
    accent: '#A5B4FC',

    text: {
      primary: '#ffffff',
      secondary: '#94a3b8',
      light: '#64748b',
    },

    background: {
      dark: '#0a0f1e',
      darker: '#050810',
      card: 'rgba(15, 23, 42, 0.6)',
    },

    border: 'rgba(148, 163, 184, 0.1)',

    glow: {
      primary: 'rgba(99, 102, 241, 0.4)',
      secondary: 'rgba(129, 140, 248, 0.3)',
    },

    shadow: {
      sm: '0 1px 2px 0 rgb(0 0 0 / 0.3)',
      md: '0 4px 6px -1px rgb(0 0 0 / 0.4)',
      lg: '0 10px 15px -3px rgb(0 0 0 / 0.5)',
      xl: '0 20px 25px -5px rgb(0 0 0 / 0.6)',
    },
  },

  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '4rem',
  },

  borderRadius: {
    sm: '0.5rem',
    md: '0.75rem',
    lg: '1rem',
    xl: '1.5rem',
    full: '9999px',
  },

  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '2rem',
    '4xl': '2.5rem',
    '5xl': '3.5rem',
    '6xl': '4.5rem',
  },
}

export type Theme = typeof theme
