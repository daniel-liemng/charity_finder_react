import { Link } from 'react-router-dom';
import { Box, Card, CardContent, Typography } from '@mui/material';

const getFavoritesFromLocalStorage = () => {
  const list = localStorage.getItem('favorite');

  return list ? JSON.parse(list) : [];
};

const FavoriteCharitiesPage = () => {
  const fList = getFavoritesFromLocalStorage();

  console.log('pppp', fList);

  return (
    <Box sx={{ textAlign: 'center', marginTop: '3rem' }}>
      <Typography variant='h4'>Favorite List</Typography>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem',
          flexWrap: 'wrap',
          marginTop: '2rem',
        }}
      >
        {fList && fList.length > 0 ? (
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          fList.map((charity: any) => (
            <Link to={`/charity/${charity.ein}`} key={charity?.ein}>
              <Card sx={{ width: 400, height: 120 }}>
                <CardContent>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                    }}
                  >
                    <img
                      src={
                        charity?.logoUrl ||
                        'https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/ujpg0yviv3yctjw4san3'
                      }
                      alt='logo'
                    />
                    <Typography gutterBottom variant='h6' component='div'>
                      {charity?.name}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Link>
          ))
        ) : (
          <Typography variant='h6'>No result found</Typography>
        )}
      </Box>
    </Box>
  );
};

export default FavoriteCharitiesPage;
