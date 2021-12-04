import * as React from 'react';
import { useState, useEffect } from 'react';
import useNameHooks from '../../../hooks/useNameHooks';
import useEmailHooks from '../../../hooks/useEmailHooks';
import usePasswordHooks from '../../../hooks/usePasswordHooks';
import useConfirmPasswordHooks from '../../../hooks/useConfirmPasswordHooks';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { register } from '../../../store/actions/authActions';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
function Copyright(props) {
  return (
    <Typography
      variant='body2'
      color='text.secondary'
      align='center'
      {...props}
    >
      {'Copyright © '}
      <Link color='inherit' href='#!'>
        Mantis
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

const SignUp = () => {
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [
    firstName,
    handleFirstNameOnChange,
    firstNameErrorMessage,
    handleFirstNameOnBlur,
  ] = useNameHooks('First name');
  const [
    lastName,
    handleLastNameOnChange,
    lastNameErrorMessage,
    handleLastNameOnBlur,
  ] = useNameHooks('Last name');
  const [email, handleEmailOnChange, emailErrorMessage, handleEmailOnBlur] =
    useEmailHooks('Email');
  const [
    password,
    handlePasswordOnChange,
    passwordErrorMessage,
    handlePasswordOnBlur,
  ] = usePasswordHooks('Password');
  const [
    confirmPassword,
    handleConfirmPasswordOnChange,
    confirmPasswordErrorMessage,
    handleConfirmPasswordOnBlur,
    comparePasswords,
  ] = useConfirmPasswordHooks('Confirm password');

  const [isSubmitButtonDisabled, setIsSubmitButtonDisabled] = useState(true);

  useEffect(() => {
    comparePasswords(password);
    if (
      firstName.length > 0 &&
      lastName.length > 0 &&
      email.length > 0 &&
      password.length > 0 &&
      confirmPassword.length > 0
    ) {
      if (
        !firstNameErrorMessage &&
        !lastNameErrorMessage &&
        !emailErrorMessage &&
        !passwordErrorMessage &&
        !confirmPasswordErrorMessage &&
        password === confirmPassword
      ) {
        setIsSubmitButtonDisabled(false);
      } else {
        setIsSubmitButtonDisabled(true);
      }
    }
    if (user) {
      navigate('/dashboard');
    }
  }, [
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
    firstNameErrorMessage,
    lastNameErrorMessage,
    emailErrorMessage,
    passwordErrorMessage,
    confirmPasswordErrorMessage,
    comparePasswords,
    user,
    navigate
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    // eslint-disable-next-line no-console

    const userObj = {
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      email: data.get('email'),
      password: data.get('password'),
    };

    dispatch(register(userObj));
  };

  return (
    <div
      style={{
        backgroundImage: `url('https://media.istockphoto.com/photos/standard-quality-control-certification-assurance-concept-picture-id1282633951?b=1&k=20&m=1282633951&s=170667a&w=0&h=k3P0GU07EG4z8gFk6zqaR_cqv5C1wGf_40g4nleXwdE=')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        width: '100vw',
        height: '100vh',
        display: 'flex',
      }}
    >
      <ThemeProvider theme={theme}>
        <Container component='main' maxWidth='xs'>
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              backgroundColor: '#cbcbcb',
              padding: '20px',
            }}
          >
            <Typography component='h1' variant='h5'>
              <img src='/logo.png' alt='mantis' style={{ width: '80px' }} />
            </Typography>
            <Typography component='h1' variant='h5'>
              Sign up
            </Typography>
            <Box
              component='form'
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete='given-name'
                    name='firstName'
                    required
                    fullWidth
                    id='firstName'
                    label='First Name'
                    onChange={handleFirstNameOnChange}
                    onBlur={handleFirstNameOnBlur}
                    autoFocus
                  />
                  <div style={{ color: 'red' }}>
                    {firstNameErrorMessage && firstNameErrorMessage}
                  </div>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id='lastName'
                    label='Last Name'
                    onChange={handleLastNameOnChange}
                    onBlur={handleLastNameOnBlur}
                    name='lastName'
                    autoComplete='family-name'
                  />
                  <div style={{ color: 'red' }}>
                    {lastNameErrorMessage && lastNameErrorMessage}
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id='email'
                    label='Email Address'
                    onChange={handleEmailOnChange}
                    onBlur={handleEmailOnBlur}
                    name='email'
                    autoComplete='email'
                  />
                  <div style={{ color: 'red' }}>
                    {emailErrorMessage && emailErrorMessage}
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name='password'
                    label='Password'
                    onChange={handlePasswordOnChange}
                    onBlur={handlePasswordOnBlur}
                    type='password'
                    id='password'
                    autoComplete='new-password'
                  />
                  <div style={{ color: 'red' }}>
                    {passwordErrorMessage && passwordErrorMessage}
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name='confirmPassword'
                    label='Confirm Password'
                    type='password'
                    id='password'
                    onChange={(e) => handleConfirmPasswordOnChange(e)}
                    onBlur={handleConfirmPasswordOnBlur}
                    autoComplete='new-password'
                  />
                  <div style={{ color: 'red' }}>
                    {confirmPasswordErrorMessage && confirmPasswordErrorMessage}
                  </div>
                </Grid>
              </Grid>
              <Button
                type='submit'
                fullWidth
                variant='contained'
                sx={{ mt: 3, mb: 2 }}
                disabled={isSubmitButtonDisabled}
              >
                Sign Up
              </Button>
              <Grid container justifyContent='flex-end'>
                <Grid item>
                  <Link href='/sign-in' variant='body2'>
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 5 }} />
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default SignUp