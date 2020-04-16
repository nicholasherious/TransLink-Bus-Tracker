import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';
import SearchIcon from '@material-ui/icons/Search';

function SearchForm({ searchHandler }) {
  const [value, setValue] = useState('');

  const onSearchHandler = e => {
    e.preventDefault();
    searchHandler(value);
    setValue('');
  };

  const handleChange = e => {
    setValue(e.target.value);
  };

  return (
    <Box display="flex" flexDirection="row" justifyContent="center" p={1} m={1}>
      <Box p={1}>
          
        <TextField
          type="text"
          onChange={handleChange}
          value={value}
          label="Stop Number"
          variant="outlined"
          autoFocus={true}
          fullWidth
        />
      </Box>
      <Box p={1}>
        <IconButton
          type="submit"
          variant="contained"
          color="primary"
          onClick={onSearchHandler}
        >
          <SearchIcon fontSize="large" />
        </IconButton>
      </Box>
      <Box p={1}>
      
      </Box>
    </Box>
  );
}

export default SearchForm;
