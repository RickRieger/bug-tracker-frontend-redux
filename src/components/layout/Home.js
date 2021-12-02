import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
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
      <Card
        className='landing_card'
        sx={{
          backgroundColor: '#cbcbcb',
          margin: 'auto',
          padding: '50px',
          boxShadow: 15,
        }}
      >
        <CardContent>
          <Typography sx={{ fontSize: 24 }} color='text.secondary' gutterBottom>
            <Typography>
              <img src='/logo.png' alt='mantis' style={{ width: '120px' }} />
            </Typography>
            <h1 style={{ display: 'inline', textAlign: 'center' }}>Mantis</h1>
          </Typography>
          <h2>Create Tickets, Assign Developers and Remain Productive.</h2>
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
      </Card>
    </div>
  );
}

export default Home;
