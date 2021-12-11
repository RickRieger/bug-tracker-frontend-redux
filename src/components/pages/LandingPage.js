import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Copyright from '../layout/Copyright';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

function Home() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        backgroundImage: `url('/bg-image.jpg')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        width: '100vw',
        height: '100vh',
        display: 'flex',
      }}
    >
      <Card
        className='landing_card'
        sx={{
          backgroundColor: '#fff',
          margin: 'auto',
          padding: '60px',
          boxShadow: 15,
        }}
      >
        <CardContent>
          <Grid item align='center'>
            <img src='/logo.png' alt='Logo' style={{ width: '220px' }} />
          </Grid>

          <Typography sx={{ fontSize: 24 }} color='text.secondary' gutterBottom>
            Create Tickets, Assign Developers and Remain Productive.
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant='contained'
            style={{ margin: 'auto' }}
            onClick={() => {
              navigate('/sign-in');
            }}
          >
            Try it out!
          </Button>
        </CardActions>
        <Copyright mt={2} />
      </Card>
    </div>
  );
}

export default Home;
