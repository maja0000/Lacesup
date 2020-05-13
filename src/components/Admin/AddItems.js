import React, { useState, useEffect } from 'react';
import CollectionContent from './CollectionContent';
function AddItems() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('???')
      .then((res) => res.json())
      .then((res) => setData(res), setLoading(false))
      .catch((error) => {
        console.log('Error: ', error);
      });
  }, []);
  return (
    <div>{loading ? 'Loading...' : <CollectionContent data={data} />}</div>
  );
}

export default AddItems;
