import React from 'react';
import './Slider.css';

const colors = [
  'white',
  '#CE585A',
  '#59794A',
  '#4B88BF',
  '#F8C93C',
  '#EE68C2',
  '#5D5D5D',
];
function SliderColors() {
  return (
    <div className="colors-container">
      {colors.map((color) => (
        <div
          className="color"
          style={{
            cursor: ' pointer',
            backgroundColor: `${color}`,
          }}
        />
      ))}
    </div>
  );
}

export default SliderColors;
