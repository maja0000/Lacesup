import ChangeLaces from './ChangeLaces';
import React, { useState, useEffect } from 'react';

function DisplayCustomShoes() {
  const [shoes, setShoes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://laceup-backend.herokuapp.com/')
      .then((res) => res.json())
      .then((res) => {
        setShoes(res.result);
        setLoading(false);
      })
      .catch((error) => {
        console.log('Error: ', error);
      });
  }, []);
  // console.log('outside', shoes.result);
  // {
  //   !loading && console.log('data ->', shoes);
  // }

  return <div>{loading ? 'Loading...' : <ChangeLaces shoes={shoes} />}</div>;
}

export default DisplayCustomShoes;
