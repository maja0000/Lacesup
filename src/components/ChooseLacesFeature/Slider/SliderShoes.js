import React from "react";
import "./Slider.css";

function Slider({ shoes, onSelect }) {
  // console.log('=>>??>', shoes);
  // console.log(pictures);

  return (
    <div className="slider-container">
      {shoes.map((shoe, key) => (
        <div
          key={shoe._id}
          className="slider-element"
          style={{
            cursor: " pointer",
            backgroundImage: `url(${shoe.colorVariants[0].image})`,
            backgroundPosition: "center",
            backgroundSize: "100%",
          }}
          // onClick={(event) => handleClick(event)}
          onClick={() => onSelect(shoe)}
        />
      ))}
    </div>
  );
}

export default Slider;
