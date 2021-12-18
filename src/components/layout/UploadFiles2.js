import React from 'react';
import {
  Button,
  Grid,
  Typography,
  TextField,
  Divider,
  CircularProgress,
  Box,
} from '@mui/material';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import Spinner from '../ui/Spinner';
import PropTypes from 'prop-types';
import { useState, useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  UploadFilesAndAttachToTicket,
  getAllAttachmentsByTicket,
} from '../../store/actions/ticketActions';

// Circle Progress below
const CircularProgressWithLabel = (props) => {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress variant='determinate' {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant='caption' component='div' color='text.secondary'>
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
};

CircularProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: PropTypes.number.isRequired,
};

const CircularStatic = () => {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);
  if (progress === 0) {
    return (
      <CircularProgress
        variant='determinate'
        value={100}
        sx={{ visibility: 'hidden' }}
      />
    );
  } else {
    return <CircularProgressWithLabel value={progress} />;
  }
};

//--------Whole component below---------

const UploadFiles2 = ({ params }) => {
  const { ticketId } = params;
  const dispatch = useDispatch();
  const { attachments } = useSelector((state) => state.tickets);

  useEffect(() => {
    dispatch(getAllAttachmentsByTicket(ticketId));
  }, [dispatch, ticketId]);

  const [selectedFile, setSelectedFile] = useState(undefined);
  const [description, setDescription] = useState(undefined);

  const handleUpload = async () => {
    await dispatch(
      UploadFilesAndAttachToTicket(
        selectedFile[0],
        description,
        params.ticketId
      )
    );
    dispatch(getAllAttachmentsByTicket(params.ticketId));
  };

  if (!attachments) {
    return <Spinner />;
  }

  return (
    <Grid item xs={12} display='flex' flexDirection='column'>
      <Typography
        component='span'
        variant='h5'
        display='flex'
        justifyContent='space-between'
        sx={{ mb: 1 }}
      >
        Ticket Attachments
        <CircularStatic />
      </Typography>

      <Grid item sx={{ mb: 2 }}>
        <TextField
          required
          fullWidth
          name='Description'
          label='Description'
          // value={state.projectName}
          onChange={(e) => setDescription(e.target.value)}
          autoFocus
        />
      </Grid>
      <label htmlFor='btn-upload'>
        <input
          id='btn-upload'
          name='btn-upload'
          style={{ display: 'none' }}
          type='file'
          onChange={(e) => setSelectedFile(e.target.files)}
        />
        <Button fullWidth variant='contained' component='span' sx={{mb:1}}>
          Choose Files
        </Button>
        <Typography style={{ textAlign: 'center' }}>
          {' '}
          {selectedFile && selectedFile.length > 0
            ? selectedFile[0].name
            : 'No files selected... '}
        </Typography>
      </label>
      <Button
        fullWidth
        onClick={handleUpload}
        variant='contained'
        sx={{ mt: 1 }}
      >
        upload
      </Button>
      <Divider sx={{ mt: 2 }} />
      <Typography component={'div'} display={'flex'} flexDirection={'column'}>
        {attachments.map((attachment) => {
          return (
            <Fragment key={attachment.fileKeyForS3}>
              <Typography
                width={'100%'}
                component={'div'}
                display={'flex'}
                flexDirection={'row'}
              >
                <Typography width={'33.9%'} component={'div'} sx={{ p: 1 }}>
                  {attachment.desc}
                </Typography>
                <Typography
                  width={'33.9%'}
                  component={'div'}
                  textAlign={'center'}
                  sx={{ p: 1 }}
                >
                  {attachment.fileName}
                </Typography>
                <Typography
                  width={'33.9%'}
                  component={'div'}
                  textAlign={'end'}
                  sx={{ p: 1 }}
                >
                  <CloudDownloadIcon />
                </Typography>
              </Typography>
              <Divider />
            </Fragment>
          );
        })}
      </Typography>
    </Grid>
  );
};

export default UploadFiles2;
