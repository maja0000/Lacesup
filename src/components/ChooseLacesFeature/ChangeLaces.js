import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from './Button/ButtonBuy';
import Slider from './Slider/Slider';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',

    color: theme.palette.text.secondary,
  },
}));

function ChangeLaces() {
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
          <h2>CHOOSE A COLOR FOR THE SNEAKERS</h2>
        </Grid>
        <Grid item xs={12} sm={3} md={6} lg={6}>
          <h2>CHOOSE YOUR LACES</h2>
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
