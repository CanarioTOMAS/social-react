import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import style from './styleFormLogin.module.css'


export const FormLogin = () => {  
  const [showPassword, setShowPassword] = React.useState(false);
  const [formEmail, setEmail] = React.useState('');
  const [formPassword, setPassword] = React.useState('');
  

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event:any) => {
    event.preventDefault();
  };

  const submit =()=>{
    console.log(formEmail)
    console.log(formPassword)
    console.log('hola')
}  


  return (

    <div className={style.Body}> 
    <div><img src="https://socialup.com.ar/wp-content/uploads/2021/11/logo-blanco-135x71.png"  alt=""/></div>
      <FormControl sx={{ m:1, width:'25ch' }} variant="standard">
        <TextField label="Email" variant="standard" value={formEmail} onChange={e =>setEmail(e.target.value)}></TextField>
      </FormControl>
      <Box>
      <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
          <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
          <Input
          value={formPassword} 
          onChange={e =>setPassword(e.target.value)}
            id="standard-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        </Box>
        <Box>
        <Button variant="contained" endIcon={<SendIcon />} onClick={()=>submit()}>
            Sign In
</Button>
<Box >
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Grid>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
                </Grid> 
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
          </Box>
</Box>
    </div>
  )
}
