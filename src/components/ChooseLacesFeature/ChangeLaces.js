import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ShoeCard from './ShoeCard';
import Button from './Button/ButtonBuy';
import Slider from './Slider/Slider';
import Colors from '../.././Utils/Colors';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
  },
  color: {
    color: 'grey',
  },
}));

function ChangeLaces() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container justify='center' alignItems='center' spacing={3}>
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <ShoeCard />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Slider />
        </Grid>
        <Grid item xs={12} sm={3} md={6} lg={6}>
          <h3 className={classes.color}>CHOOSE A COLOR FOR THE SNEAKERS</h3>
          <Slider />
        </Grid>
        <Grid item xs={12} sm={3} md={6} lg={6}>
          <h3 className={classes.color}>CHOOSE YOUR LACES</h3>
          <Slider />
        </Grid>
        <Grid item xs={12} sm={3} md={6} lg={6}>
          <Button />
        </Grid>
      </Grid>
    </div>
  );
}

export default ChangeLaces;
