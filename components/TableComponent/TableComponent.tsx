import { KeyboardArrowDown as KeyboardArrowDownIcon } from '@mui/icons-material';
import {
  Box,
  CircularProgress,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import React from 'react';
import { PostType } from 'types/PostType';

import { useStyles } from './style';

type Props = {
  data: PostType[] | null
  search: string
  asc: string
  loading: boolean
  handleColumn: (colName: string) => void
};

const TableComponent: React.FC<Props> = ({
  data, search, asc, loading, handleColumn,
}) => {
  const classes = useStyles();
  return (
    <TableContainer className={classes.tableContainer} component={Box}>
      <Table aria-label="table">
        <TableHead className={classes.tableHead}>
          <TableRow>
            <TableCell className={classes.headTableCell} sx={{ width: '82.3px' }} align="center">
              ID
              <IconButton id="Id" onClick={() => handleColumn('id')}>
                <KeyboardArrowDownIcon className={search === 'id' && asc !== 'true' ? classes.reverse : classes.arrow} />
              </IconButton>
            </TableCell>
            <TableCell className={classes.headTableCell} sx={{ width: '340.6px' }} align="center">
              Заголовок
              <IconButton id="Title" onClick={() => handleColumn('title')}>
                <KeyboardArrowDownIcon className={search === 'title' && asc !== 'true' ? classes.reverse : classes.arrow} />
              </IconButton>
            </TableCell>
            <TableCell className={classes.headTableCell} sx={{ width: '810px' }} align="center">
              Описание
              <IconButton id="Desc" onClick={() => handleColumn('body')}>
                <KeyboardArrowDownIcon className={search === 'body' && asc !== 'true' ? classes.reverse : classes.arrow} />
              </IconButton>
            </TableCell>
          </TableRow>
        </TableHead>
        {loading ? (
          <CircularProgress sx={{ width: '100%', height: '100%' }} />
        ) : (
          <TableBody>
            {data && data!.map((post) => (
              <TableRow
                key={post.id}
                className={classes.tableRow}
              >
                <TableCell className={classes.tableCell} sx={{ textAlign: 'center' }} component="th" scope="row">
                  {post.id}
                </TableCell>
                <TableCell
                  className={classes.tableCell}
                  sx={{ border: '1px solid rgba(224, 224, 224, 1)' }}
                  align="left"
                >{post.title}
                </TableCell>
                <TableCell className={classes.tableCell} align="left">{post.body}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        )}
      </Table>
    </TableContainer>
  );
};

export default TableComponent;
