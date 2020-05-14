import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ShoeCard from "./ShoeCard";
import Button from "./Button/ButtonBuy";
import Slider from "./Slider/SliderShoes";
import SliderColors from "./Slider/SliderColors";
import SliderLaces from "./Slider/SliderLaces";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: "0 20px 0 20px",
  },
  color: {
    color: "grey",
  },
}));

function ChangeLaces({ laces, shoes }) {
  const [shoe, setShoe] = useState(shoes[0]);
  const [lace, setLace] = useState(laces[0]);
  const [color, setColor] = useState("white");
  // console.log('here', shoes);

  let pictures = shoes.map((each) => each.colorVariants[0].image);
  let allAvalibleColors = shoes.map((each) => each.colorVariants);
  // console.log('all', allAvalibleColors);

  const classes = useStyles();

  const displayDifferentColor = (pickedColor) => {
    setColor(pickedColor);
  };
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
          <ShoeCard shoe={shoe} lace={lace} color={color} />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Slider onSelect={setShoe} shoes={shoes} />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <span className={classes.color}>CHOOSE A COLOR FOR THE SNEAKERS</span>
          <SliderColors displayDifferentColor={displayDifferentColor} />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <span className={classes.color}>CHOOSE YOUR LACES</span>
          <SliderLaces laces={laces} onSelect={setLace} />
        </Grid>
        <Grid
          item
          xs={12}
          sm={3}
          md={6}
          lg={6}
          style={{ padding: "0 12px 12px 12px", textAlign: "center" }}
        >
          <Button />
        </Grid>
      </Grid>
    </div>
  );
}

export default ChangeLaces;
