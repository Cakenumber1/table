import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  modal: {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: 400,
    backgroundColor: 'white',
    border: '2px solid #000',
    padding: 4,
  },
});
