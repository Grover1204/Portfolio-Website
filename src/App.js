import React from 'react';
import './App.css';
import Home from './components/Home'; // Import the Home component

function App() {
  return (
    <div className="App">
      <Home />    {/* Only include the Home component */}
    </div>
  );
}

export default App;
