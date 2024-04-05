
import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const PaperStyle = {
    padding: 20,
    height: "70vh",
    width: 400,
    margin: "20px auto",
  };
  const navigate = useNavigate();
  const avatarStyle = { backgroundColor: "blue" };
  const register = async () => {
    const result = await fetch('http://localhost:3003/api/users/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        password,
        firstName,
        lastName,
        address
      })
    }).then((res) => res.json())

    if (result.status === 'ok') {
      navigate('/login')
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
            <h2>Sign-Up</h2>
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
          <TextField sx={{ marginBottom: '20px' }}
            label="First Name"
            placeholder="First Name"
            type="text"
            fullWidth
            required
            onChange={(e) => { setFirstName(e.target.value) }}
          />
          <TextField sx={{ marginBottom: '20px' }}
            label="Last Name"
            placeholder="Last Name"
            type="text"
            fullWidth
            required
            onChange={(e) => { setLastName(e.target.value) }}
          />
          <TextField sx={{ marginBottom: '20px' }}
            label="Address"
            placeholder="Address"
            type="text"
            fullWidth
            required
            onChange={(e) => { setAddress(e.target.value) }}
          />
          <div className="mx-auto text-center">
            <Button color="primary" variant="contained" onClick={register} sx={{ width: "200px" }}>
              Register
            </Button>
          </div>
        </Paper>
      </Grid>
    </div>
  );
};
export default Signup;
