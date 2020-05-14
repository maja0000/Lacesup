import React from "react";

export default function ShoeCard({ shoe, lace }) {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${shoe.colorVariants[0].image})`,
          height: "350px",
          width: "350px",
          backgroundPosition: "center",
          backgroundSize: "cover",
          position: "relative",
        }}
      >
        <div
          style={{
            backgroundImage: `url(${lace.pattern})`,
            height: "350px",
            width: "350px",
            backgroundRepeat: "repeat",
            position: "absolute",
            left: "0",
            top: "0",
            "-webkit-mask": `url(${shoe.laceImg}) 350px 350px`,
            // backgroundSize: "cover",
          }}
        ></div>
      </div>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <img
          alt="cross laces"
          src={require("../../pictures/ex.svg")}
          height="30"
          width="30"
          style={{
            border: "1px solid grey",
            borderRadius: "5px",
            marginRight: "5px",
          }}
        />
        <img
          alt="straight laces"
          src={require("../../pictures/straight.svg")}
          height="30"
          width="30"
          style={{ border: "1px solid grey", borderRadius: "5px" }}
        />
      </div>
    </>
  );
}
