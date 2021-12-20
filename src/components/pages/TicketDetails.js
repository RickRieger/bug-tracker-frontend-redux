import * as React from 'react';
import Layout from '../layout/Layout';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { Divider } from '@mui/material';
import HistoryIcon from '@mui/icons-material/History';
import UploadFilesToS3 from '../layout/UploadFilesToS3';
import { useParams } from 'react-router';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getTicketByTicketId } from '../../store/actions/ticketActions';

const TicketDetails = () => {
  const params = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTicketByTicketId(params.ticketId))
  }, [dispatch, params.ticketId])

  return (
    <Layout>
      {/*Project and Ticket Name*/}
      <Grid item xs={12} textAlign={'center'}>
        <Typography component='span' variant='h4'>
          Ticket: A Bug Tracking App{' '}
        </Typography>
        <Typography component='span' variant='h5'>
          (User Authentication)
        </Typography>
      </Grid>

      {/*Tickets summary*/}

      <Grid
        item
        xs={12}
        md={8}
        lg={6}
        sx={{
          display: 'flex',
        }}
      >
        <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            height: '100%',
          }}
        >
          <Grid
            item
            xs={8}
            sx={{
              p: 3,
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
            }}
          >
            <Typography variant='h5' gutterBottom>
              Ticket Details
            </Typography>

            <Typography component='span' variant='h7' sx={{ my: 1 }}>
              Description:{' '}
            </Typography>
            <Typography component='span' variant='h7' sx={{ my: 1 }}>
              Please make sure that the forms are laid out according to the wire
              frame provided. The user should provide a strong password of no
              less than eight characters in length.
            </Typography>
          </Grid>
          <Grid
            item
            xs={6}
            sx={{
              p: 3,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              height: '100%',
            }}
          >
            <Typography component='span' variant='h7' sx={{ my: 1 }}>
              Assigned Developer: John Doe
            </Typography>
            <Typography component='span' variant='h7' sx={{ my: 1 }}>
              Created: December 15, 2021
            </Typography>

            <Typography component='span' variant='h7' sx={{ my: 1 }}>
              Ticket Type: New Feature
            </Typography>
            <Typography component='span' variant='h7' sx={{ my: 1 }}>
              Ticket Priority: Low
            </Typography>
            <Typography component='span' variant='h7' sx={{ my: 1 }}>
              Ticket Status: Development
            </Typography>
          </Grid>
        </Paper>
      </Grid>

      <Grid item xs={12} md={4} lg={6}>
        <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'row',
            height: '100%',
          }}
        >
          <UploadFilesToS3 params={params} />

        </Paper>
      </Grid>

      {/* Comments */}
      <Grid item xs={12} md={12} lg={6}>
        <Paper
          sx={{
            height: '100%',
            p: 3,
          }}
        >
          <Grid item xs={12} display='flex' flexDirection='column'>
            <Typography component='span' variant='h5' gutterBottom>
              Ticket Comments
            </Typography>
            <Grid item xs={12}>
              <TextField
                id='outlined-multiline-flexible'
                label='Comment'
                name='description'
                multiline
                required
                maxRows={6}
                // value={state.description}
                // onChange={handleOnChange}
                fullWidth
              />
            </Grid>
            <Button
              // type='submit'
              fullWidth
              variant='contained'
              sx={{ mt: 2 }}
            >
              Comment
            </Button>
            <Divider sx={{ mt: 2 }} />
            <Typography
              textAlign={'center'}
              component='div'
              variant='h7'
              width={'30%'}
              margin={'auto'}
              sx={{
                mt: 2,
                padding: '5px',
                borderRadius: '10px',
                bgcolor: '#dedede',
              }}
            >
              1 Comment(s)
            </Typography>
            <Typography
              component='div'
              variant='h7'
              sx={{
                mt: 2,
                padding: '10px',
                borderRadius: '10px',
                border: '1px solid grey',
              }}
            >
              Rick Rieger posted on Dec 3rd, 2021
              <Typography>
                Doing a great job, everything works as expected!
              </Typography>
            </Typography>
          </Grid>
        </Paper>
      </Grid>
      {/* Ticket History */}
      <Grid item xs={12} md={12} lg={6}>
        <Paper
          sx={{
            p: 3,
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
          }}
        >
          <Typography component='span' variant='h5' gutterBottom>
            Ticket History
          </Typography>
          <Typography
            component='span'
            style={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
            }}
          >
            <HistoryIcon />
            <Typography sx={{ m: 2 }}>
              New Ticket Created by John Doe on Dec 20, 2021
            </Typography>
          </Typography>
          <Typography
            component='span'
            style={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
            }}
          >
            <HistoryIcon />
            <Typography sx={{ m: 2 }}>
              New Ticket Description by John Doe on Dec 21, 2021
            </Typography>
          </Typography>
          <Typography
            component='span'
            style={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
            }}
          >
            <HistoryIcon />
            <Typography sx={{ m: 2 }}>
              New Ticket Created by John Doe on Dec 22, 2021
            </Typography>
          </Typography>
          <Typography
            component='span'
            style={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
            }}
          >
            <HistoryIcon />
            <Typography sx={{ m: 2 }}>
              New Ticket Created by John Doe on Dec 20, 2021
            </Typography>
          </Typography>
        </Paper>
      </Grid>
    </Layout>
  );
};

export default TicketDetails;
