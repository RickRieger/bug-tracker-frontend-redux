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
  UploadFileAndAttachToTicket,
  getAllAttachmentsByTicket,
} from '../../store/actions/ticketActions';
import Axios from '../../utils/Axios';
import { SET_ALERT, SET_UPLOAD_PROGRESS } from '../../store/actions/types';

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
  const dispatch = useDispatch();
  const { uploadProgress } = useSelector((state) => state.tickets);

  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    setProgress(uploadProgress);
  }, [uploadProgress, ]);

  if (progress === 100) {
    setTimeout(() => {
      setProgress(0);
      dispatch({ type: SET_UPLOAD_PROGRESS, payload: 0 });
    }, 2000);
  }

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

const UploadFilesToS3 = ({ params }) => {
  const { ticketId } = params;
  const dispatch = useDispatch();
  const { attachments } = useSelector((state) => state.tickets);
  const [selectedFile, setSelectedFile] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    dispatch(getAllAttachmentsByTicket(ticketId));
  }, [dispatch, ticketId, setDescription]);

  const handleUpload = async () => {
    
    if (description === null) {
      dispatch({
        type: SET_ALERT,
        payload: {
          isOpen: true,
          alertMessage: 'Please provide a description',
          typeOfMessage: 'error',
        },
      });
      return;
    }
    if (selectedFile === null) {
      dispatch({
        type: SET_ALERT,
        payload: {
          isOpen: true,
          alertMessage: 'Please select a file to upload',
          typeOfMessage: 'error',
        },
      });
      return;
    }

    for (let attachment of attachments) {
      if (attachment.fileName === selectedFile[0].name) {
        dispatch({
          type: SET_ALERT,
          payload: {
            isOpen: true,
            alertMessage: 'File name already exist',
            typeOfMessage: 'error',
          },
        });
        return;
      }
    }

    if (description === null) {
      dispatch({
        type: SET_ALERT,
        payload: {
          isOpen: true,
          alertMessage: 'Description cannot be empty',
          typeOfMessage: 'error',
        },
      });
      return;
    }

    await dispatch(
      UploadFileAndAttachToTicket(selectedFile[0], description, params.ticketId)
    );
    dispatch(getAllAttachmentsByTicket(params.ticketId));
    setDescription('')
    setSelectedFile('')
  };

  const downloadFiles = async (key) => {
    try {
      const FileDownload = require('js-file-download');

      let res = await Axios({
        url: `/ticket/get-single-attachment-by-key/${key}`,
        method: 'GET',
        responseType: 'blob', // Important
      });

      FileDownload(res.data, key);
      
    } catch (error) {
      dispatch({
        type: SET_ALERT,
        payload: {
          isOpen: true,
          alertMessage:
            'Sorry, this file no longer exists, please upload again',
          typeOfMessage: 'error',
        },
      });
    }
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
          value={description}
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
        <Button fullWidth variant='contained' component='span' sx={{ mb: 1 }}>
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
                  <CloudDownloadIcon
                    color='primary'
                    onClick={() => {
                      downloadFiles(attachment.fileKeyForS3);
                    }}
                  />
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

export default UploadFilesToS3;
