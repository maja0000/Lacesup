import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import DisplayCustomShoes from './components/ChooseLacesFeature/DisplayCustomShoes';
function App() {
  return (
    <div>
      <NavBar />
      <div className='content'>
        <NavBar />
      </div>
      <DisplayCustomShoes />
      <Footer />
    </div>
  );
}

export default App;
