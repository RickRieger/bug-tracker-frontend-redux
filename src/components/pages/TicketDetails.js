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
import { useSelector } from 'react-redux';
import { Box } from '@mui/system';
import Spinner from '../ui/Spinner';
import moment from 'moment';
const TicketDetails = () => {
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTicketByTicketId(params.ticketId));
  }, [dispatch, params.ticketId]);

  const { ticket } = useSelector((state) => state.tickets);
  console.log(ticket);
  let color = 'info.light';

  if (ticket) {
    const priorityLevel = ticket.priorityLevel;
    switch (priorityLevel) {
      case 'Urgent':
        color = 'error.dark';
        break;
      case 'High':
        color = 'error.light';
        break;
      case 'Medium':
        color = 'warning.light';
        break;
      case 'Low':
        color = 'info.light';
        break;
      default:
        color = 'info.light';
    }
  }

  if (!ticket) {
    return (
      <Layout>
        <Spinner />
      </Layout>
    );
  }

  return (
    <Layout>
      {/*Project and Ticket Name*/}
      <Grid item xs={12} textAlign={'center'}>
        <Typography component='span' variant='h5'>
          Ticket: {ticket.title}
        </Typography>
      </Grid>

      {/*Tickets summary*/}

      <Grid
        item
        xs={12}
        md={12}
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
            width: '100%',
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
              {ticket.description}
            </Typography>
          </Grid>
          <Grid
            item
            xs={6}
            sx={{
              p: 3,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Typography component='span' variant='h7' sx={{ my: 1 }}>
              Assigned Developer: {ticket.developer}
            </Typography>
            <Typography component='span' variant='h7' sx={{ my: 1 }}>
              Created: {moment(ticket.createdAt).format('MMMM Do, YYYY')}
            </Typography>

            <Typography component='span' variant='h7' sx={{ my: 1 }}>
              Ticket Type: {ticket.ticketType}
            </Typography>
            <Typography component='span' variant='h7' sx={{ my: 1 }}>
              Priority:{' '}
              <Box
                component='span'
                sx={{
                  display: 'inline',
                  padding: '5px',
                  color: 'white',
                  borderRadius: '10px',
                  bgcolor: color,
                }}
              >
                {ticket.priorityLevel}
              </Box>
            </Typography>
            <Typography component='span' variant='h7' sx={{ my: 1 }}>
              Ticket Status: {ticket.ticketStatus}
            </Typography>
          </Grid>
        </Paper>
      </Grid>

      <Grid item xs={12} md={12} lg={6}>
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
