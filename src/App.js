import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { green, grey, orange, red, yellow } from "@mui/material/colors";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}
export default App;

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
  },
});
