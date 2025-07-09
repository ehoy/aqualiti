import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#0288d1', // Ocean blue
      light: '#5eb8ff',
      dark: '#005b9f',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#00acc1', // Cyan/teal
      light: '#5ddef4',
      dark: '#007c91',
      contrastText: '#ffffff',
    },
    info: {
      main: '#29b6f6', // Light blue
      light: '#73e8ff',
      dark: '#0086c3',
    },
    success: {
      main: '#26a69a', // Teal green
      light: '#64d8cb',
      dark: '#00766c',
    },
    warning: {
      main: '#ff7043', // Coral orange
      light: '#ff9e80',
      dark: '#c63f17',
    },
    error: {
      main: '#ef5350', // Red
      light: '#ff867f',
      dark: '#b61827',
    },
    background: {
      default: '#f8fcff', // Very light blue-white
      paper: '#ffffff',
    },
    text: {
      primary: '#263238', // Dark blue-gray
      secondary: '#546e7a', // Medium blue-gray
    },
    divider: '#e0f2f1', // Light teal
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    
    // Mobile-first approach - base styles are for mobile
    h1: {
      fontSize: '2rem', // 32px mobile
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: '-0.02em',
      '@media (min-width:600px)': {
        fontSize: '2.5rem', // 40px tablet
      },
      '@media (min-width:960px)': {
        fontSize: '3rem', // 48px desktop
      },
    },
    h2: {
      fontSize: '1.75rem', // 28px mobile
      fontWeight: 600,
      lineHeight: 1.3,
      letterSpacing: '-0.01em',
      '@media (min-width:600px)': {
        fontSize: '2rem', // 32px tablet
      },
      '@media (min-width:960px)': {
        fontSize: '2.25rem', // 36px desktop
      },
    },
    h3: {
      fontSize: '1.5rem', // 24px mobile
      fontWeight: 600,
      lineHeight: 1.4,
      '@media (min-width:600px)': {
        fontSize: '1.75rem', // 28px tablet+
      },
    },
    h4: {
      fontSize: '1.25rem', // 20px mobile
      fontWeight: 500,
      lineHeight: 1.4,
      '@media (min-width:600px)': {
        fontSize: '1.5rem', // 24px tablet+
      },
    },
    h5: {
      fontSize: '1.125rem', // 18px mobile
      fontWeight: 500,
      lineHeight: 1.4,
      '@media (min-width:600px)': {
        fontSize: '1.25rem', // 20px tablet+
      },
    },
    h6: {
      fontSize: '1rem', // 16px mobile
      fontWeight: 500,
      lineHeight: 1.4,
      '@media (min-width:600px)': {
        fontSize: '1.125rem', // 18px tablet+
      },
    },
    body1: {
      fontSize: '1rem', // 16px
      lineHeight: 1.6,
      '@media (min-width:600px)': {
        fontSize: '1.125rem', // 18px tablet+
      },
    },
    body2: {
      fontSize: '0.875rem', // 14px
      lineHeight: 1.5,
      '@media (min-width:600px)': {
        fontSize: '1rem', // 16px tablet+
      },
    },
    button: {
      fontSize: '0.875rem', // 14px
      fontWeight: 500,
      textTransform: 'none', // Modern approach - no ALL CAPS
      letterSpacing: '0.02em',
      '@media (min-width:600px)': {
        fontSize: '1rem', // 16px tablet+
      },
    },
    caption: {
      fontSize: '0.75rem', // 12px
      lineHeight: 1.4,
      '@media (min-width:600px)': {
        fontSize: '0.875rem', // 14px tablet+
      },
    },
  },
  spacing: 8, // 8px base spacing unit
  shape: {
    borderRadius: 12, // Modern rounded corners
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: '12px 24px',
          '@media (max-width:599px)': {
            padding: '10px 20px',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

export default theme; 