import {
  FacebookOutlined,
  GitHub,
  Instagram,
  Twitter,
} from "@mui/icons-material";
import {
  CssBaseline,
  Typography,
  Link,
  IconButton,
  Box,
  Container,
} from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <CssBaseline />
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: "auto",
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="xl" sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ flexGrow: 1 }}>
            <IconButton>
              <FacebookOutlined color="primary" fontSize="large" />
            </IconButton>
            <IconButton>
              <Instagram color="primary" fontSize="large" />
            </IconButton>
            <IconButton>
              <Twitter color="primary" fontSize="large" />
            </IconButton>
            <IconButton>
              <GitHub color="primary" fontSize="large" />
            </IconButton>
          </Box>
          <Typography variant="body1" color="default">
            Copyright ©{" "}
            <Link color="inherit" href="/">
              Hiking App
            </Link>
            {" " + new Date().getFullYear() + "."}
          </Typography>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
