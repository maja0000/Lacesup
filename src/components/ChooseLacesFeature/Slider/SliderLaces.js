import React from 'react';
import './Slider.css';

function SliderLaces({ laces }) {
  const patterns = laces.map((one) => one.laceImg);

  return (
    <div className="slider-container">
      {patterns.map((pic, key) => (
        <div
          key={key}
          className="slider-element"
          style={{
            cursor: ' pointer',
            backgroundImage: `url(${pic})`,
            backgroundPosition: 'center',
            backgroundSize: '100%',
          }}
          // onClick={(event) => handleClick(event)}
          //   onClick={(event) => changeMainPic(event.target)}
        />
      ))}
    </div>
  );
}

export default SliderLaces;
