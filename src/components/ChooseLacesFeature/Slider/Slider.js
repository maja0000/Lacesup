import React from 'react';
import './Slider.css';

function Slider({ shoes, pictures, changeMainPic }) {
  // console.log('=>>??>', shoes);
  // console.log(pictures);

  return (
    <div className="slider-container">
      {pictures.map((pic, key) => (
        <div
          key={key}
          className="slider-element"
          style={{
            cursor: ' pointer',
            backgroundImage: `url(${pic})`,
            backgroundPosition: 'center',
            backgroundSize: '100%',
          }}
          onClick={changeMainPic}
        />
      ))}
    </div>
  );
}

export default Slider;
