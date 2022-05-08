import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { green, grey, orange, red, yellow } from "@mui/material/colors";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { CssBaseline } from "@mui/material";

function App() {
  const [toggleDark, settoggleDark] = useState(true);
  const theme = createTheme({
    palette: {
      primary: {
        main: green[800],
      },
      secondary: {
        main: yellow.A700,
      },
      background: {
        main: grey[800],
      },
      neutral: {
        main: green.A200,
      },
      warning: {
        main: orange[500],
      },
      error: {
        main: red.A400,
      },
      mode: toggleDark ? "dark" : "light",
    },
  });
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <main
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Header toggleDark={toggleDark} settoggleDark={settoggleDark} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
          </Routes>
          <Footer />
        </main>
      </ThemeProvider>
    </BrowserRouter>
  );
}
export default App;
