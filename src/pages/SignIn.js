import { LockOutlined } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
  Link,
} from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

const SignIn = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
          <LockOutlined />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <NavLink to={"/"}>
                <Link variant="body2">Forgot password?</Link>
              </NavLink>
            </Grid>
            <Grid item>
              <NavLink to={"/signup"}>
                <Link variant="body2">{"Don't have an account? Sign Up"}</Link>
              </NavLink>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default SignIn;
