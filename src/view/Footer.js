import { Box, Container, CssBaseline, Typography } from "@mui/material";
import React from "react";
import Copyright from "../components/Copyright";

const Footer = () => {
  return (
    <footer className="footer">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <CssBaseline />
        <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
          <Typography variant="h2" component="h1" guetterBottom>
            Sticky footer
          </Typography>
        </Container>
      </Box>
      <Copyright />
    </footer>
  );
};

export default Footer;
