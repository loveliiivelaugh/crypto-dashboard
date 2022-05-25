import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import * as colors from "@mui/material/colors";

const theme = createTheme({
  palette: {
    mode: 'dark',
    type: "dark",
      primary: {
        // Same as in light but we could
        // adjust color hue if needed
        main: colors.indigo["500"],
      },
      secondary: {
        main: colors.pink["500"],
      },
      background: {
        default: colors.grey["900"],
        paper: colors.grey["800"],
      },
      text: {
        primary: colors.grey["200"],
      },
    },
    common: {
      typography: {
        fontSize: 14,
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        // Uncomment to make button lowercase
        // button: { textTransform: "none" },
      },
      breakpoints: {
        values: {
          xs: 0,
          sm: 600,
          md: 960,
          lg: 1200,
          xl: 1920,
        },
      },
      // Override component styles
      overrides: {
        // Global styles
        MuiCssBaseline: {
          "@global": {
            "#root": {
              // Flex column that is height
              // of viewport so that footer
              // can push self to bottom by
              // with auto margin-top
              minHeight: "100vh",
              display: "flex",
              flexDirection: "column",
              // Prevent child elements from
              // shrinking when content
              // is taller than the screen
              // (quirk of flex parent)
              "& > *": {
                flexShrink: 0,
              },
            },
          },
        },
      },
    },
});

export const ThemeProvider = ({ children }) => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </MuiThemeProvider>
);
