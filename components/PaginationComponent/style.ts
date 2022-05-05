import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  paginationBox: {
    width: '1232px',
    display: 'flex',
    justifyContent: 'space-evenly',
    height: '60px',
  },
  arrowButton: {
    fontWeight: 500,
    fontSize: 24,
    color: '#474955',
  },
  numberButtonsBox: {
    width: '50%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  numberButton: {
    borderRadius: '50%',
    fontSize: 18,
    fontWeight: 700,
    fontStyle: 'italic',
  },
});
