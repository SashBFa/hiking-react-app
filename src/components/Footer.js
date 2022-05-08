import {
  FacebookOutlined,
  GitHub,
  Instagram,
  Twitter,
} from "@mui/icons-material";
import { Typography, Link, IconButton, Box, Container } from "@mui/material";
import React, { useRef } from "react";
import GetDim from "./GetDim";

const Footer = () => {
  const ref = useRef();
  const { dWidth } = GetDim(ref);
  return (
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
      <Container
        maxWidth="xl"
        ref={ref}
        sx={{
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: () => (dWidth > 425 ? "space-between" : "center"),
        }}
      >
        <Box>
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
  );
};

export default Footer;
