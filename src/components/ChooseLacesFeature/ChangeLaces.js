import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ShoeCard from './ShoeCard';
import Button from './Button/ButtonBuy';
import Slider from './Slider/Slider';
import SliderColors from './Slider/SliderColors';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: '0 20px 0 20px',
  },
  color: {
    color: 'grey',
  },
}));

function ChangeLaces({ shoes }) {
  const { mainpic, setMainPic } = useState('');
  // console.log('here', shoes);
  // console.log(shoes.map((e) => e.brand));
  let pictures = shoes.map((e) => e.colorVariants[0].image);

  const classes = useStyles();
  // const changeMainPic = () => {
  //   setMainPic(event.target.style.background);
  // };
  return (
    <div className={classes.root}>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={3}
      >
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <ShoeCard shoes={shoes} />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Slider
            // changeMainPic={changeMainPic}
            pictures={pictures}
            shoes={shoes}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <span className={classes.color}>CHOOSE A COLOR FOR THE SNEAKERS</span>
          <SliderColors />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <span className={classes.color}>CHOOSE YOUR LACES</span>
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
