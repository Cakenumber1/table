import {
  Box, Button,
} from '@mui/material';
import { pageRangeCount } from 'helpers/pageRangeCount';
import React from 'react';

import { useStyles } from './style';

type Props = {
  page: number,
  pages: number[],
  handlePage: (p: number) => void,
};

const PaginationComponent: React.FC<Props> = ({
  page,
  pages,
  handlePage,
}) => {
  const classes = useStyles();
  const { start, end } = pageRangeCount(page, 10);
  return (
    <Box className={classes.paginationBox}>
      <Button
        className={classes.arrowButton}
        disabled={page === 1}
        onClick={() => handlePage(page - 1)}
      >Назад
      </Button>
      <Box className={classes.numberButtonsBox}>
        {pages.slice(start, end).map((p) => (
          <Button
            onClick={() => handlePage(p)}
            className={classes.numberButton}
            sx={{
              color: p === page ? '#7EBC3C' : '#474955',
            }}
          >{p}
          </Button>
        ))}
      </Box>
      <Button
        className={classes.arrowButton}
        disabled={page === 10}
        onClick={() => handlePage(page + 1)}
      >Далее
      </Button>
    </Box>
  );
};

export default PaginationComponent;
