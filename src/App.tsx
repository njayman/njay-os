import { Box, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import DateTime from "./components/DateTime";
import AppMenu from "./components/AppMenu";
import SearchBar from "./components/SearchBar";
import "./App.css";
import Desktop from "./components/Desktop";
import { useDarkMode } from "./hooks/useDarkMode";
import ModeSwitcher from "./components/ModeSwitcher";

function App() {
  const { darkMode } = useDarkMode();

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          height: "100vh",
          width: "100vw",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            height: "100%",
          }}
        >
          <Desktop />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "row",
                gap: 2,
              }}
            >
              <AppMenu />
              <SearchBar />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "row",
                gap: 2,
              }}
            >
              <DateTime />
              <ModeSwitcher />
            </Box>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
