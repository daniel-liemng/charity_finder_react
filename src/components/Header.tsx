import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { Link } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Header = () => {
  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography
          variant='h6'
          component='div'
          sx={{ flexGrow: 1, color: 'white', textTransform: 'uppercase' }}
        >
          <Link to='/'>Charity Finder</Link>
        </Typography>

        <Link to='/favorites'>
          <FavoriteIcon fontSize='medium' sx={{ color: '#ff0000' }} />
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
