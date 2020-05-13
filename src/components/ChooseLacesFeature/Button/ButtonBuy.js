import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      background: '#fcb536',
      borderRadius: 3,
      border: 0,
      color: 'black',
      fontWeight: 'bold',
      height: '50px',
      width: '200px',
    },
  },
}));

function ButtonBuy() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant='contained'>BUY THESE LACES</Button>
    </div>
  );
}
export default ButtonBuy;
