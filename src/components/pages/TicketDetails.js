import * as React from 'react';
import Layout from '../layout/Layout';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import { Fragment } from 'react';
import { Divider } from '@mui/material';
import HistoryIcon from '@mui/icons-material/History';
import UploadFilesToS3 from '../layout/UploadFilesToS3';
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {
  getTicketByTicketId,
  getAllCommentsByTicket,
  submitNewTicketComment,
} from '../../store/actions/ticketActions';
import { getProjectById } from '../../store/actions/projectActions';
import Spinner from '../ui/Spinner';
import moment from 'moment';

const TicketDetails = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { comments } = useSelector((state) => state.tickets);
  const { ticket } = useSelector((state) => state.tickets);
  const { project } = useSelector((state) => state.projects);

  useEffect(() => {
    dispatch(getTicketByTicketId(params.ticketId));
    dispatch(getAllCommentsByTicket(params.ticketId));
    dispatch(getProjectById(params.projectId));
  }, [dispatch]);


  console.log(project)
  console.log(ticket)


  const [comment, setComment] = useState('');

  const handleOnClick = () => {
    dispatch(submitNewTicketComment(comment, params.ticketId, onSuccess));
  };
  const handleOnChange = (e) => {
    setComment(e.target.value);
  };
  const onSuccess = () => {
    dispatch(getAllCommentsByTicket(params.ticketId));
    setComment('');
  };

  let color = 'info.light';
  if (project) {
    const priorityLevel = project.priority;
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
        color = 'info.light'
    }
  }

  if (!comments) {
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
        <Typography component='span' variant='h4'>
          {project.projectName}: {' '}
        </Typography>
        <Typography component='span' variant='h5'>
          {ticket.title}
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
            width: '100%'
          }}
        >
          <Grid
            item
            xs={8}
            sx={{
              p: 1,
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
            }}
          >
            <Typography variant='h5' gutterBottom             sx={{
              p: 1,
            }}>
              Ticket Details
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
              justifyContent: 'space-around',
              height: '100%',
        
            }}
          >
            <Typography component='span' variant='h7' sx={{ my: 1 }}>
              Assigned Developer: 
            </Typography>
            <Typography component='span' variant='h7' sx={{ my: 1 }}>
              Created at: {moment(ticket.createdAt).format('MMMM Do, YYYY')}
            </Typography>

            <Typography component='span' variant='h7' sx={{ my: 1 }}>
              Ticket Type: {ticket.ticketType}
            </Typography>
            <Typography component='span' variant='h7' sx={{ my: 1 }}>
              Ticket Priority:{' '}
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
                value={comment}
                onChange={handleOnChange}
                fullWidth
              />
            </Grid>
            <Button
              fullWidth
              variant='contained'
              sx={{ mt: 2 }}
              onClick={handleOnClick}
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
              {comments.length} Comment(s)
            </Typography>
            <Typography
              component='div'
              variant='h7'
              sx={{
                mt: 2,
                padding: '10px',
                height: '100px',
                borderRadius: '10px',
                border: '1px solid grey',
                overflowY: 'scroll',
                scrollbarColor: 'red',
              }}
            >
              {comments.map((comment) => (
                <Fragment key={comment._id}>
                  <Typography
                    component="div"
                    sx={{
                      backgroundColor: 'lightblue',
                      padding: '10px',
                      borderRadius: '10px',
                      mt: 1,
                    }}
                  >
                    <div key={comment._id}>
                      {comment.commenter.firstName} {comment.commenter.lastName}{' '}
                      posted on{' '}
                      {moment(comment.createdAt).format('MMMM Do, YYYY')}
                    </div>
                    <div>{comment.comment}</div>
                  </Typography>
                  <Divider sx={{ mt: 1 }} />
                </Fragment>
              ))}
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
