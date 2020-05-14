import React from 'react';
import './Slider.css';

function Slider({ shoes, pictures, changeMainPic }) {
  // console.log(pictures);
  // const { shoes } = shoes;
  console.log('=>>??>', shoes);

  return (
    <div className="slider-container">
      {/* {const pictures = shoes.map((e) => e.colorVariants[0].image)} */}
      {/* {pictures.map((pic)=><div className="slider-element" style={{ cursor: ' pointer',backgroundImage:`${pic}` }} />)} */}

      {/*  onClick={changeMainPic} */}
      <div className="slider-element" style={{ cursor: ' pointer' }} />
      <div className="slider-element" />
      <div className="slider-element" />
      <div className="slider-element" />
      <div className="slider-element" />
      <div className="slider-element" />
    </div>
  );
}

export default Slider;
