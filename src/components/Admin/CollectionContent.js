import React from 'react';
// router
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './Collection.css';
import CollectionLaces from './Collections/CollectionLaces.js';
import CollectionShoes from './Collections/CollectionShoes.js';
import CollectionColors from './Collections/CollectionColors.js';

function Collection() {
  return (
    <div>
      <div className='add-new-container'>
        <div className='list-container'>
          <Router>
            <Link className='list-item' to='/admin/add-laces'>
              LACES
            </Link>
            <Link className='list-item' to='/admin/add-colors'>
              COLORS
            </Link>
            <Link className='list-item' to='/admin/add-shoes'>
              SHOES
            </Link>

            <Switch>
              <Route exact path='/admin/' component={CollectionLaces} />
              <Route
                exact
                path='/admin/add-laces'
                component={CollectionLaces}
              />
              <Route
                exact
                path='/admin/add-colors'
                component={CollectionColors}
              />
              <Route
                exact
                path='/admin/add-shoes'
                component={CollectionShoes}
              />
            </Switch>
          </Router>
        </div>

        {/* <div className="test1">
          <div className="test2"></div>
        </div> */}
      </div>
    </div>
  );
}

export default Collection;
