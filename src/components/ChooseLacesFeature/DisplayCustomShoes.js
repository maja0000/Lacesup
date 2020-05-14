import ChangeLaces from "./ChangeLaces";
import React, { useState, useEffect } from "react";

function DisplayCustomShoes() {
  const [shoes, setShoes] = useState([]);
  const [laces, setLaces] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://laceup-backend.herokuapp.com/")
      .then((res) => res.json())
      .then((res) => {
        setShoes(res.result.filter((shoe) => shoe.colorVariants.length));
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
    fetch("https://laceup-backend.herokuapp.com/laces")
      .then((res) => res.json())
      .then((res) => {
        setLaces(res.result);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  }, []);
  // console.log('outside', shoes.result);
  // {
  //   !loading && console.log('data ->', laces);
  // }

  return (
    <div>
      {loading ? "Loading..." : <ChangeLaces laces={laces} shoes={shoes} />}
    </div>
  );
}

export default DisplayCustomShoes;
