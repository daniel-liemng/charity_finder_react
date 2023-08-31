import { Box, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',

        marginTop: '5rem',
      }}
    >
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant='h2'>Page Not Found</Typography>
        <Button variant='outlined'>
          <Link to='/'>Go Back Home</Link>
        </Button>
      </Box>
    </Box>
  );
};

export default NotFoundPage;
