import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ShoeCard from './ShoeCard';

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
      <Grid container justify='center' alignItems='center' spacing={3}>
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <ShoeCard />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Paper className={classes.paper}>Shoe slider</Paper>
        </Grid>
        <Grid item xs={12} sm={3} md={6} lg={6}>
          <h2>CHOOSE A COLOR FOR THE SNEAKERS</h2>
          <Paper className={classes.paper}>COLORS</Paper>
        </Grid>
        <Grid item xs={12} sm={3} md={6} lg={6}>
          <h2>CHOOSE YOUR LACES</h2>
          <Paper className={classes.paper}>xs=12</Paper>
        </Grid>
        <Grid item xs={12} sm={3} md={6} lg={6}>
          <Paper className={classes.paper}>BUY THESE LACES!</Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default ChangeLaces;
