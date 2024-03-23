
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
        password
      })
    }).then((res) => res.json())

    if (result.status === 'ok') {
      navigate('/login')
    } else {
      alert(result.error)
    }
  }

  return (
    /*
    <div className="flex flex-nowrap shadow-lg bg-red justify-center align-items mx-auto mt-2"> 
      <div className="bg-slate-100 border border-black w-[300px]">
        <form onSubmit={async (e) => {
          e.preventDefault();
          console.log(e.target.value)
          const result = await fetch('http://localhost:3003/api/users/register', {
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
            alert('Success')
          } else {
            alert(result.error)
          }

        }}>


          <label>email</label>
          <input
            placeholder="Enter Email"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            name="username"
            type="email"
          ></input>
          <label>Password</label>
          <input
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            value={password}
          ></input>
          <button type="submit">Signup</button>



        </form >
      </div>
    </div>*/
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
