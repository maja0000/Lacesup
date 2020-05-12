import React, { useState, useEffect } from 'react';
import ChangeLaces from './ChangeLaces';

function DisplayCustomShoes() {
  const [shoes, setShoes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('???')
      .then((res) => res.json())
      .then((res) => setShoes(res), setLoading(false))
      .catch((error) => {
        console.log('Error: ', error);
      });
  }, []);
  return <div>{loading ? 'Loading...' : <ChangeLaces shoes={shoes} />}</div>;
}

export default DisplayCustomShoes;
