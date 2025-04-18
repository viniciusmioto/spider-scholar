import { createTheme } from '@mui/material/styles';

// Spider Scholar brand colors
const WHITE = '#ffffff';
const LIGHT_BLUE = '#38b6ff';
const DARK_BLUE = '#242659';

const theme = createTheme({
  palette: {
    primary: {
      main: LIGHT_BLUE,
      dark: DARK_BLUE,
      contrastText: WHITE,
    },
    secondary: {
      main: DARK_BLUE,
      light: LIGHT_BLUE,
      contrastText: WHITE,
    },
    background: {
      default: WHITE,
      paper: WHITE,
    },
    text: {
      primary: DARK_BLUE,
      secondary: LIGHT_BLUE,
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      color: DARK_BLUE,
    },
    h2: {
      fontWeight: 600,
      color: DARK_BLUE,
    },
    h3: {
      fontWeight: 600,
      color: DARK_BLUE,
    },
    h4: {
      fontWeight: 500,
      color: DARK_BLUE,
    },
    h5: {
      fontWeight: 500,
      color: DARK_BLUE,
    },
    h6: {
      fontWeight: 500,
      color: DARK_BLUE,
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: LIGHT_BLUE,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 600,
        },
        containedPrimary: {
          backgroundColor: LIGHT_BLUE,
          '&:hover': {
            backgroundColor: DARK_BLUE,
          },
        },
        outlinedPrimary: {
          borderColor: LIGHT_BLUE,
          color: LIGHT_BLUE,
          '&:hover': {
            borderColor: DARK_BLUE,
            color: DARK_BLUE,
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
        },
      },
    },
  },
});

export default theme;
