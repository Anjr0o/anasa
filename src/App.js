import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Todos from './Todos/Todos';
import Todo from './Todo/Todo';
import Contact from './Contact/Contact';

const App = props => {
  const [statusState, setStatusState] = useState({
    status: 'Finish'
  })

  const checkedHandler = () => {
    console.log('Completed');
    setStatusState({ status: 'Finished' })
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <button onClick={checkedHandler}>Check?</button>
        <Todo status={statusState.status} />


        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
    </div>
  );
}

export default App;
