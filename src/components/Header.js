import {
  AppBar,
  CssBaseline,
  Switch,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";

const Header = ({ toggleDark, settoggleDark }) => {
  const handleModeChange = () => {
    settoggleDark(!toggleDark);
  };
  return (
    <header className="header">
      <CssBaseline />
      <AppBar
        position="static"
        elevation={0}
        color="default"
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
        <Toolbar sx={{ flexWarp: "warp" }}>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            Hiking App
          </Typography>
          <nav></nav>
          <Switch
            checked={toggleDark}
            onChange={handleModeChange}
            name="toggleDark"
          />
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default Header;
