import React from 'react';
import logo from './logo.svg';
import './App.css';
import Todos from './Todos/Todos';
import Contact from './Contact/Contact';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload let's try this again boiiiiiii.  Once again testing
        </p>
        <Todos/>
        <Contact/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
