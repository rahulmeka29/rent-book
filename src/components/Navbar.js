import React from "react";
//import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Stack,
} from "@mui/material";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

export const Navbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  useEffect(() => {
    if (localStorage.getItem('token') !== '')
      setIsLoggedIn(true)
  }, [isLoggedIn])
  return (
    //<Link ClassName="navbar" tp="/">
    <AppBar position="static">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <AutoStoriesIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <button onClick={() => { navigate('/') }}>Rent-A-Book</button>
        </Typography>
        <Stack direction="row" spacing={1}>
          <Button color="inherit" to="/">
            Features
          </Button>
          <Button color="inherit">Pricing</Button>
          <Button color="inherit">About-us</Button>
          {!localStorage.getItem('token') ?
            <Button
              color="inherit"
              to="/login"
              onClick={() => {
                navigate("/login");
              }}
            >
              Login-Sign-up
            </Button> :
            <Button
              color="inherit"
              to="/login"
              onClick={() => {
                localStorage.removeItem('token')
                setIsLoggedIn(false);
                navigate("/login");
              }}
            >
              Logout
            </Button>
          }
        </Stack>
      </Toolbar>
    </AppBar>
    // </Link>
  );
};
export default Navbar;
