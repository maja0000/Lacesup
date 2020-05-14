import ChangeLaces from './ChangeLaces';
import React, { useState, useEffect } from 'react';

function DisplayCustomShoes() {
  const [shoes, setShoes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch('https://laceup-backend.herokuapp.com/')
      .then((res) => res.json())
      .then((res) => {
        setShoes(res);
        setLoading(true);
      })
      .catch((error) => {
        console.log('Error: ', error);
      });
  }, []);
  // console.log('outside', shoes.result);
  // {
  //   !loading &&
  //     console.log(
  //       'data ->',
  //       shoes.result.map((e) => e.brand)
  //     );
  // }

  return <div>{loading ? 'Loading...' : <ChangeLaces shoes={shoes} />}</div>;
}

export default DisplayCustomShoes;
