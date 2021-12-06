import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { REMOVE_ALERT } from '../../store/actions/types';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
});

const SnackBar = () => {
  const dispatch = useDispatch();
  const { isOpen, alertMessage, typeOfMessage } = useSelector(
    (state) => state.alert
  );

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch({ type: REMOVE_ALERT });
  };
  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      open={isOpen}
      autoHideDuration={4000}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity={typeOfMessage}>
        {alertMessage}
      </Alert>
    </Snackbar>
  );
}

export default SnackBar;
