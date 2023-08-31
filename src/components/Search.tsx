import { Button, Stack } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import React, { useState } from 'react';

interface SearchProps {
  onSearch: (term: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const [searchInput, setSearchInput] = useState<string>('');

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = (e: any) => {
    e.preventDefault();
    onSearch(searchInput);
    setSearchInput('');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '2rem',
      }}
    >
      <Box component='form' onSubmit={handleSubmit}>
        <Stack direction='row' spacing={1}>
          <TextField
            variant='outlined'
            placeholder='Find the charity'
            size='small'
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />

          <Button
            type='submit'
            variant='contained'
            size='small'
            startIcon={<SearchIcon />}
          >
            Search
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default Search;
