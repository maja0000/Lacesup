import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import DisplayCustomShoes from './components/ChooseLacesFeature/DisplayCustomShoes';
function App() {
  return (
    <div className="App">
      <div className="content">
        <NavBar />
        <DisplayCustomShoes />
      </div>
      <Footer />
    </div>
  );
}

export default App;
