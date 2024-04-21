import { Navbar } from "./Components/Navbar/Navbar";
import { Footer } from "./Components/Footer/Footer";
import { Routes } from "./routes";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useSelector } from "react-redux";
import { amber, deepOrange, grey } from "@mui/material/colors";

function App() {
  const mode = useSelector((store) => store.theme.theme);

  const theme = createTheme({
    palette: {
      mode,
      ...(mode === "light"
        ? {
            // palette values for light mode
            primary: amber,
            divider: amber[200],
            background: {
              default: "#FBFBFB",
              paper: "#FBFBFB",
            },
            text: {
              primary: grey[900],
              secondary: grey[800],
            },
          }
        : {
            // palette values for dark mode
            primary: deepOrange,
            divider: deepOrange[700],
            background: {
              default: "#0D0D0D",
              paper: "#0D0D0D",
            },
            text: {
              primary: "#fff",
              secondary: grey[500],
            },
          }),
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      {Routes()}
      <Footer />
    </ThemeProvider>
  );
}

export default App;
