import axios from 'axios';
import { useEffect, useState } from 'react';
import { CharityList, Search } from '../components';
import { Box } from '@mui/material';

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState<string>();
  const [charities, setCharities] = useState([]);

  useEffect(() => {
    const fetchCharities = async () => {
      const { data } = await axios.get(
        `/search/${searchTerm ? searchTerm : 'humans'}?apiKey=${
          import.meta.env.VITE_API_KEY
        }`
      );
      setCharities(data?.nonprofits);
    };
    fetchCharities();
  }, [searchTerm]);

  console.log(charities);

  const handleSearch = (searchInput: string) => {
    setSearchTerm(searchInput);
  };

  return (
    <Box>
      <Search onSearch={handleSearch} />
      <CharityList charities={charities} />
    </Box>
  );
};

export default HomePage;
