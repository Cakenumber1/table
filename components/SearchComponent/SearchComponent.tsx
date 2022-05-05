import { Search as SearchIcon } from '@mui/icons-material';
import {
  IconButton, InputBase, Paper,
} from '@mui/material';
import { handleSearch } from 'helpers/handleSearch';
import React from 'react';
import { PostType } from 'types/PostType';

import { useStyles } from './style';

type Props = {
  searchQ: string | undefined,
  setSearchQ: React.Dispatch<React.SetStateAction<string | undefined>>
  setSearchRes: React.Dispatch<React.SetStateAction<PostType[] | null>>
};

const SearchComponent: React.FC<Props> = ({
  searchQ,
  setSearchQ,
  setSearchRes,
}) => {
  const classes = useStyles();

  return (
    <Paper
      component="form"
      className={classes.searchForm}
      onSubmit={
        (e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          if (searchQ) {
            handleSearch(setSearchRes, searchQ);
          }
        }
      }
    >
      <InputBase
        sx={{ marginLeft: 1, flex: 1, color: '#B2B7BF' }}
        placeholder="Поиск"
        value={searchQ}
        onChange={(event) => setSearchQ(String(event.target.value))}
      />
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon sx={{ color: 'white' }} />
      </IconButton>
    </Paper>
  );
};

export default SearchComponent;
