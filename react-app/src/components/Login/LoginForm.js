import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import axios from "axios";
import * as React from "react";
import { toast, ToastContainer } from "react-toastify";
import { SERVER_URL } from "../../constants";
import useLocalStorage from "../../hooks/useLocalStorage";
import bell from '../image/logo.png';

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="/">
        Bell-212
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function LoginForm({setCurrentPage}) {
  const [authenticatedUser, setAuthenticatedUser] = useLocalStorage('user');


  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
    const email = data.get("email");
    const password = data.get("password");

    try {
      const res = await axios.post(`${SERVER_URL}/authenticate`, {
        email,
        password,
      });

      const data = await res?.data;
      console.log(data);
      if (!data) {
        throw Error("No response from server");
      }
      if(!data.activated) {
        toast.error("Admin haven't approved your account yet!");
        return;
      }

      setAuthenticatedUser(data);
      window.location.href = '/dashboard'

    } catch (e) {
      console.log(e);
      toast.error("Email or Password is not correct!");
    }

  };

  return (
    <ThemeProvider theme={theme}>
      <ToastContainer />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar> */}
          <Link href="/">
          <img
              alt=""
              src={bell}
              width="60"
              height="60"
              className="d-inline-block" style={{marginRight: '10px'}}
          />
          </Link>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
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
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <FormControlLabel
                style={{ position: "relative"}}
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />

              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </div>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container textAlign={'center'}>
              <Grid item xs>
                Don't have an account? &nbsp;
                <Link onClick={() => setCurrentPage('Register')} variant="body2">
                  Sign up
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
