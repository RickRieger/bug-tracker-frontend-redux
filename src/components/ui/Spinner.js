import React from 'react';
import { Box,  } from '@mui/system';
import CircularProgress from '@mui/material/CircularProgress';
function Spinner() {
  return (
    <Box
      sx={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <CircularProgress />
    </Box>
  );
}

export default Spinner;
