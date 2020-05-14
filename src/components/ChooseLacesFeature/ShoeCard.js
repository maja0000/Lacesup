import React from 'react';

export default function ShoeCard({ shoes, mainpic }) {
  return (
    <>
      <div
        style={{
          backgroundImage: require('../../pictures/00_Mock_converse_altas-zapas.jpg'),
          backgroundImage: mainpic,
          height: '350px',
          width: '350px',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      ></div>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <img
          alt="cross laces"
          src={require('../../pictures/ex.svg')}
          height="30"
          width="30"
          style={{
            border: '1px solid grey',
            borderRadius: '5px',
            marginRight: '5px',
          }}
        />
        <img
          alt="straight laces"
          src={require('../../pictures/straight.svg')}
          height="30"
          width="30"
          style={{ border: '1px solid grey', borderRadius: '5px' }}
        />
      </div>
    </>
  );
}
