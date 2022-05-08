import { ModeOfTravelOutlined, Search } from "@mui/icons-material";
import {
  AppBar,
  Button,
  Container,
  Paper,
  Switch,
  Toolbar,
  Typography,
  InputBase,
  IconButton,
  Box,
} from "@mui/material";
import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import GetDim from "./GetDim";

const Header = ({ toggleDark, settoggleDark }) => {
  const ref = useRef();
  const { dWidth } = GetDim(ref);
  const handleModeChange = () => {
    settoggleDark(!toggleDark);
  };
  return (
    <header className="header">
      <AppBar
        position="static"
        elevation={0}
        color="default"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="xl" sx={{ p: 0 }} ref={ref}>
          <Toolbar
            sx={{
              py: 3,
              px: 2,
              mt: "auto",
              flexWarp: "warp",
              alignItems: "center",
              flexDirection: () => (dWidth > 768 ? "row" : "column"),
            }}
          >
            <Typography
              variant="h6"
              color="primary"
              sx={{ flexGrow: 1, alignItems: "center", display: "flex" }}
            >
              <ModeOfTravelOutlined sx={{ fontSize: 40, mr: 1 }} />
              Hiking App
            </Typography>
            <nav style={{ margin: () => (dWidth > 768 ? "0px" : "5px 0") }}>
              <NavLink
                to={"/"}
                style={(navi) =>
                  navi.isActive
                    ? {
                        textDecoration: "none",
                        color: "#ffea00",
                      }
                    : { textDecoration: "none", color: "inherit" }
                }
              >
                <Button color="inherit" sx={{ p: 0.6 }}>
                  Home
                </Button>
              </NavLink>
              <NavLink
                to={"/create"}
                style={(navi) =>
                  navi.isActive
                    ? {
                        textDecoration: "none",
                        color: "#ffea00",
                      }
                    : { textDecoration: "none", color: "inherit" }
                }
              >
                <Button color="inherit" sx={{ p: 0.6 }}>
                  Create
                </Button>
              </NavLink>
              <NavLink
                to={"/dashboard"}
                style={(navi) =>
                  navi.isActive
                    ? {
                        textDecoration: "none",
                        color: "#ffea00",
                      }
                    : { textDecoration: "none", color: "inherit" }
                }
              >
                <Button color="inherit" sx={{ p: 0.6 }}>
                  Dashboard
                </Button>
              </NavLink>
              <NavLink
                to={"/about"}
                style={(navi) =>
                  navi.isActive
                    ? {
                        textDecoration: "none",
                        color: "#ffea00",
                      }
                    : { textDecoration: "none", color: "inherit" }
                }
              >
                <Button color="inherit" sx={{ p: 0.6 }}>
                  About
                </Button>
              </NavLink>
            </nav>
            <Paper
              component="form"
              sx={{
                p: "2px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: () => (dWidth > 768 ? 200 : 300),
                ml: () => (dWidth > 768 ? 5 : 0),
              }}
            >
              <InputBase
                sx={{ ml: 1 }}
                placeholder="Search Hiking"
                inputProps={{ "aria-label": "search hiking" }}
              />
              <IconButton type="submit" sx={{ p: "4px" }} aria-label="search">
                <Search />
              </IconButton>
            </Paper>
            <Box
              sx={{
                p: "2px",
                marginTop: () => (dWidth > 768 ? "0px" : "7px"),
                display: "flex",
                alignItems: "center",
                justifyContent: () =>
                  dWidth > 768 ? "regular" : "space-between",
              }}
            >
              <NavLink
                to="/signup"
                style={(navi) =>
                  navi.isActive
                    ? {
                        display: "none",
                      }
                    : { textDecoration: "none" }
                }
              >
                <Button variant="outlined" sx={{ my: 0, mx: 0.5 }}>
                  Login
                </Button>
              </NavLink>
              <NavLink
                to="/signin"
                style={(navi) =>
                  navi.isActive
                    ? {
                        display: "none",
                      }
                    : { textDecoration: "none" }
                }
              >
                <Button variant="contained" sx={{ my: 0, mx: 0.5 }}>
                  Sign in
                </Button>
              </NavLink>
              <Switch
                checked={toggleDark}
                onChange={handleModeChange}
                name="toggleDark"
              />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </header>
  );
};

export default Header;
