import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { login } from '../../../store/actions/authActions';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { useState, useEffect } from 'react';
import useEmailHooks from '../../../hooks/useEmailHooks';
import usePasswordHooks from '../../../hooks/usePasswordHooks';

function Copyright(props) {
  return (
    <Typography
      variant='body2'
      color='text.secondary'
      align='center'
      {...props}
    >
      {'Copyright © '}
      <Link color='inherit' href='https://mui.com/'>
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

const SignIn = () => {
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isSubmitButtonDisabled, setIsSubmitButtonDisabled] = useState(true);
  const [password, handlePasswordOnChange] = usePasswordHooks('Password');
  const [email, handleEmailOnChange] = useEmailHooks('Email');

  useEffect(() => {
    if (email.length > 0 && password.length > 0) {
      setIsSubmitButtonDisabled(false);
    } else {
      setIsSubmitButtonDisabled(true);
    }
    if (user) {
      navigate('/dashboard');
    }
  }, [email, password, user, navigate]);

  const handleRememberMe = (e) => {
    let isRememberMeChecked = e.target.checked;
    console.log(isRememberMeChecked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    const userObj = {
      email: data.get('email'),
      password: data.get('password'),
    };

    dispatch(login(userObj));
  };
  const handleGuestSignIn = (event) => {
    event.preventDefault();

    // eslint-disable-next-line no-console
    const userObj = {
      email: 'guest@gmail.com',
      password: 'Guest251#',
    };

    dispatch(login(userObj));
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component='main' sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              'url(https://media.istockphoto.com/photos/standard-quality-control-certification-assurance-concept-picture-id1282633951?b=1&k=20&m=1282633951&s=170667a&w=0&h=k3P0GU07EG4z8gFk6zqaR_cqv5C1wGf_40g4nleXwdE=)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light'
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component='h1' variant='h5'>
              Sign in
            </Typography>
            <Box
              component='form'
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin='normal'
                required
                fullWidth
                id='email'
                label='Email Address'
                onChange={handleEmailOnChange}
                name='email'
                autoComplete='email'
                autoFocus
              />
              <TextField
                margin='normal'
                required
                fullWidth
                name='password'
                label='Password'
                onChange={handlePasswordOnChange}
                type='password'
                id='password'
                autoComplete='current-password'
              />

              <FormControlLabel
                control={
                  <Checkbox
                    value='remember'
                    color='primary'
                    onChange={handleRememberMe}
                  />
                }
                label='Remember me'
              />
              <Button
                type='submit'
                fullWidth
                variant='contained'
                sx={{ mt: 3, mb: 2 }}
                disabled={isSubmitButtonDisabled}
              >
                Sign In
              </Button>
              <Button
                fullWidth
                variant='contained'
                sx={{ mt: 3, mb: 2 }}
                onClick={handleGuestSignIn}
              >
                Guest Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href='/register' variant='body2'>
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href='/register' variant='body2'>
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default SignIn