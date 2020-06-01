import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todos from './Todos/Todos';
import Todo from './Todo/Todo';
import Contact from './Contact/Contact';

class App extends Component {

  state = {
    status: 'Finish'
  }

  checkedHandler = () => {
    console.log('Completed');
    this.setState({status: 'Finished'})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload let's try this again boiiiiiii.  Once again testing
        </p>

          <button onClick={this.checkedHandler}>Check?</button>
          <Todo status={this.state.status}/>
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
}

export default App;
