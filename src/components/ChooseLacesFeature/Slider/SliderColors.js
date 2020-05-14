import React, { useState } from 'react';
import './Slider.css';

const colors = [
  'white',
  'red',
  '#59794A',
  'blue',
  'yellow',
  '#EE68C2',
  '#5D5D5D',
];
function SliderColors({ displayDifferentColor }) {
  return (
    <div className="colors-container">
      {colors.map((color, key) => (
        <div
          key={key}
          className="color"
          style={{
            cursor: ' pointer',
            backgroundColor: `${color}`,
          }}
          onClick={() => displayDifferentColor(color)}
        />
      ))}
    </div>
  );
}

export default SliderColors;
