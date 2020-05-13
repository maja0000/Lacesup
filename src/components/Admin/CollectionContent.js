import React from 'react';
import './Collection.css';
import CollectionLaces from './Collections/CollectionLaces.js';
import CollectionShoes from './Collections/CollectionShoes.js';
import CollectionColors from './Collections/CollectionColors.js';

function Collection() {
  return (
    <div>
      <div className='add-new-container'>
        <div className='list-container'>
          <ul className='list'>
            <li>Laces</li>
            <li>Shoes</li>
            <li>Colors</li>
          </ul>
        </div>
        <div className='collection-container'>
          {/* <CollectionLaces /> */}
          {/* <CollectionShoes />*/}
          <CollectionColors />
        </div>

        {/* <div className="test1">
          <div className="test2"></div>
        </div> */}
      </div>
    </div>
  );
}

export default Collection;
