import React from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  FormControlLabel,
  Button,
  Typography,
  Link,
  btnstyle,
} from "@mui/material";
import { useState } from "react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Checkbox from "@mui/material/Checkbox";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const PaperStyle = {
    padding: 20,
    height: "70vh",
    width: 400,
    margin: "20px auto",
  };
  const avatarStyle = { backgroundColor: "blue" };
  const btnstyle = { margin: "8px 0" };

  const login = async () => {

    const result = await fetch('http://localhost:3003/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        password
      })
    }).then((res) => res.json())

    if (result.status === 'ok') {
      // everythign went fine
      console.log('Got the token: ', result.data)
      localStorage.setItem('token', result.data)
      localStorage.setItem('username', result.username);
      navigate('/')
      //alert('Success')
    } else {
      alert(result.error)
    }
  }
  return (
    <div>
      <Link className="login" to="/Login"></Link>
      <Grid>
        <Paper elevation={10} style={PaperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <LockOutlinedIcon />
            </Avatar>
            <h2>Sign-In</h2>
          </Grid>
          <TextField sx={{ marginBottom: '20px', marginTop: '20px' }}
            label="Username"
            placeholder="Enter UserName"
            fullWidth
            required
            onChange={(e) => { setUsername(e.target.value) }}
          />
          <TextField sx={{ marginBottom: '20px' }}
            label="Password"
            placeholder="Enter Password"
            type="password"
            fullWidth
            required
            onChange={(e) => { setPassword(e.target.value) }}
          />
          <FormControlLabel
            control={<Checkbox name="checked" color="primary" />}
            label="Remember Me"
          />
          <Button type="submit" color="primary" variant="contained" onClick={login}>
            Login
          </Button>
          <Typography>
            <Link href="#">Forgot password ?</Link>
          </Typography>
          <Typography>
            Do you have an account ?<Link href="/signup">Sign up</Link>
          </Typography>
        </Paper>
      </Grid>
    </div>
  );
}
export default Login;
