import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Logo Section */}
        <img src={logo} className="App-logo" alt="React Logo" />

        {/* Title Section */}
        <h1>About Me</h1>

        {/* Description Section */}
        <p>
          Hi, I'm Rahul! I enjoy working with React and building web applications.
        </p>

        {/* Link Section */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More About React
        </a>
      </header>
    </div>
  );
}

export default App;
