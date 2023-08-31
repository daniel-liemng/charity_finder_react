// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';

const getFavoritesFromLocalStorage = () => {
  const list = localStorage.getItem('favorite');

  return list ? JSON.parse(list) : [];
};

const CharityDetailsPage = () => {
  const { id } = useParams();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [charity, setCharity] = useState<any>();
  const [favoriteList, setFavoriteList] = useState<(string | undefined)[]>(
    getFavoritesFromLocalStorage()
  );

  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const fetchCharity = async () => {
      const { data } = await axios.get(`/nonprofit/${id}`);

      setCharity(data?.data?.nonprofit);
    };

    fetchCharity();
  }, [id]);

  useEffect(() => {
    const checkLiked = () => {
      favoriteList.map((item) => {
        if (item?.ein === id) {
          setLiked(true);
        }
      });
    };

    checkLiked();
  }, [liked, favoriteList, id]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleLike = (charity: any) => {
    const newList = [...favoriteList, charity];
    setFavoriteList(newList);
    localStorage.setItem('favorite', JSON.stringify(newList));
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleUnlike = (charity: any) => {
    const newList = favoriteList.filter((cha) => cha?.ein !== charity.ein);
    setFavoriteList(newList);
    localStorage.setItem('favorite', JSON.stringify(newList));
    setLiked(false);
  };

  console.log('OOOO', liked);

  return (
    <Box sx={{ textAlign: 'center', marginTop: '3rem' }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem',
          marginBottom: '2rem',
        }}
      >
        <img
          src={
            charity?.logoUrl ||
            'https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/ujpg0yviv3yctjw4san3'
          }
          alt='logo'
        />
        <Typography variant='h4' component='div'>
          {charity?.name}
        </Typography>
      </Box>

      <Box>
        <img
          src={
            charity?.coverImageUrl
              ? charity?.coverImageUrl
              : 'https://res.cloudinary.com/everydotorg/image/upload/f_auto,c_limit,w_3840,q_80/profile_pics/rryfj1yqw8qfcdcilgkl'
          }
          alt='coverImg'
          width={400}
          height={300}
        />
      </Box>

      <Box>
        {liked ? (
          <Button
            variant='outlined'
            startIcon={
              <FavoriteIcon fontSize='large' sx={{ color: '#808080' }} />
            }
            onClick={() => handleUnlike(charity)}
          >
            Unlike this organization
          </Button>
        ) : (
          <Button
            variant='outlined'
            startIcon={
              <FavoriteIcon fontSize='large' sx={{ color: '#ff0000' }} />
            }
            onClick={() => handleLike(charity)}
          >
            Like this organization
          </Button>
        )}
      </Box>

      <Typography variant='h6'>Website: {charity?.websiteUrl}</Typography>
      <Typography variant='h6'>Location: {charity?.locationAddress}</Typography>
      <Typography variant='body1'>{charity?.description}</Typography>
    </Box>
  );
};

export default CharityDetailsPage;
