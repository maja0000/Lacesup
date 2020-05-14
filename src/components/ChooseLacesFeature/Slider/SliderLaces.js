import React from "react";
import "./Slider.css";

function SliderLaces({ laces, onSelect }) {
  console.log("=>>??>", laces);
  // console.log(pictures);

  return (
    <div className="slider-container">
      {laces.map((lace) => (
        <div
          key={lace._id}
          className="slider-element"
          style={{
            cursor: " pointer",
            backgroundImage: `url(${lace.laceImg})`,
            backgroundPosition: "center",
            backgroundSize: "100%",
          }}
          onClick={() => onSelect(lace)}
          //   onClick={(event) => changeMainPic(event.target)}
        />
      ))}
    </div>
  );
}

export default SliderLaces;
