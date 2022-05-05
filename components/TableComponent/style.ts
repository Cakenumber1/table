import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  tableContainer: {
    width: '1232px',
    height: '750px',
    overflowY: 'hidden',
  },
  tableHead: {
    background: '#474955',
  },
  headTableCell: {
    whiteSpace: 'nowrap',
    color: 'white',
    fontSize: '14px',
    fontWeight: 600,
  },
  arrow: {
    color: 'white',
    transition: 'all 1s',
  },
  reverse: {
    color: 'white',
    transform: 'rotate(180deg)',
    transition: 'all 1s',
  },
  tableRow: {
    height: '68px',
  },
  tableCell: {
    color: '#474955',
    fontSize: '13px',
    fontWeight: 500,
  },
});
