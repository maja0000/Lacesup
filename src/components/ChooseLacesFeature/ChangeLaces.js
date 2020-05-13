import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from './Button/ButtonBuy';
import Slider from './Slider/Slider';
import SliderColors from './Slider/SliderColors';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: '0 20px 0 20px',
  },

  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    // height: '300px',
    color: theme.palette.text.secondary,
  },
}));

function ChangeLaces({ shoes }) {
  // console.log(shoes)
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container justify="center" alignItems="stretch" spacing={3}>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Paper className={classes.paper}>Big shoe card</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Slider />
        </Grid>
        <Grid item xs={12} sm={3} md={6} lg={6}>
          <span>CHOOSE A COLOR FOR THE SNEAKERS</span>
          <SliderColors />{' '}
        </Grid>
        <Grid item xs={12} sm={3} md={6} lg={6}>
          <span>CHOOSE YOUR LACES</span>
          <Slider />
        </Grid>
        <Grid
          item
          xs={12}
          sm={3}
          md={6}
          lg={6}
          style={{ padding: '0 12px 12px 12px', textAlign: 'center' }}
        >
          <Button />
        </Grid>
      </Grid>
    </div>
  );
}

export default ChangeLaces;
