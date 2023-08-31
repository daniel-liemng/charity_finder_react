import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

interface CharityListProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  charities: any[];
}

const CharityList: React.FC<CharityListProps> = ({ charities }) => {
  return (
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
      {charities && charities.length > 0 ? (
        charities.map((charity) => (
          <Link to={`/charity/${charity.ein}`} key={charity?.slug}>
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
  );
};

export default CharityList;
