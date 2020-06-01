import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todos from './Todos/Todos';
import Todo from './Todo/Todo';
import Contact from './Contact/Contact';

class App extends Component {

  state = {
    status: 'Finish',
    todoName: ''
  }

  checkedHandler = () => {
    console.log('Task Completed');
    this.setState({status: 'Finished'})
  }

  newTodoHandler = (event) => {
    this.setState({
      todoName: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Todos changed={this.newTodoHandler}/>
          <Todo 
          todoName={this.state.todoName}
          status={this.state.status}
          click={this.checkedHandler}
          />
          
          
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
}

export default App;
