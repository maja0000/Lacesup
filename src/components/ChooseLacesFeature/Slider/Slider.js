import React from 'react';
import './Slider.css';

function Slider({ shoes }) {
  console.log('=>>??>', shoes);
  // shoes.map((shoe) => shoe.brand);
  return (
    <div className='slider-container'>
      <div className='slider-element' style={{ cursor: ' pointer' }} />
      <div className='slider-element' />
      <div className='slider-element' />
      <div className='slider-element' />
      <div className='slider-element' />
      <div className='slider-element' />
    </div>
  );
}

export default Slider;
