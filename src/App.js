import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <div className="content">
        <NavBar />
      </div>
      <Footer />
    </div>
  );
}

export default App;
