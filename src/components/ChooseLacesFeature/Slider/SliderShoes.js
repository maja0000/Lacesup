import React from 'react';
import './Slider.css';

function Slider({ pictures, changeMainPic }) {
  // console.log('=>>??>', shoes);
  // console.log(pictures);

  return (
    <div className='slider-container'>
      {pictures.map((pic, key) => (
        <div
          key={key}
          className='slider-element'
          style={{
            cursor: ' pointer',
            backgroundImage: `url(${pic})`,
            backgroundPosition: 'center',
            backgroundSize: '100%',
          }}
          // onClick={(event) => handleClick(event)}
          onClick={(event) => changeMainPic(event.target)}
        />
      ))}
    </div>
  );
}

export default Slider;
