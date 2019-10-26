import React from 'react';
import './App.scss';
import Navbar from './components/components/Navbar/Navbar.js'
import Tourlist from './components/components/Tourlist'

function App() {
  return (
    <div className="App">
      <>
        <Navbar/>
        <Tourlist/>
      </>
    </div>
  );
}

export default App;
