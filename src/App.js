import React from 'react';
import './App.css';
// router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// components
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import DisplayCustomShoes from './components/ChooseLacesFeature/DisplayCustomShoes';
import AddItems from './components/Admin/AddItems';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className='App'>
      <div className='content'>
        <NavBar />
        <Router>
          <Switch>
            <Route exact path='/admin' component={AddItems}></Route>
            <Route exact path='/' component={DisplayCustomShoes}></Route>
            {/* <Route path="*" component={NotFound} /> */}
          </Switch>
        </Router>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
