import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todos from './Todos/Todos';
import Todo from './Todo/Todo';
import Contact from './Contact/Contact';

class App extends Component {

  state = {
    value: '',
    todos: [
      {}
    ],
  }

  checkedHandler= (event, id) => {
    const todoIndex = this.state.todos.findIndex(todo => {
      return todo.id === id;
    });

    const todo = {
      ...this.state.todos[todoIndex]
    };

    console.log(this.state.todos[todoIndex].todoName + ' completed');

    todo.strikeThrough = 'strikethrough';
    todo.status = 'I have finished';

    const todos = [...this.state.todos];
    todos[todoIndex] = todo;

    this.setState({ todos: todos })
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  handleSubmit = (event) => {
    const id = this.state.value.replace(this.state.value[0], String(Math.floor(Math.random() * 1000)));
    this.setState({
      todos: [
        ...this.state.todos,  {
          id: id, 
          todoName: this.state.value,
          // .charAt(0).toLowerCase() + this.state.value.slice(1), 
          status: 'I need to finish', 
          strikeThrough: ''}
      ]
    })
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Todos submit={this.handleSubmit} value={this.state.value} changed={this.handleChange}/>
          {this.state.todos.map((todo, index) => {
            return <Todo
              className={todo.strikeThrough}
              todoName={todo.todoName}
              status={todo.status}
              click={(event) => this.checkedHandler(event, todo.id)}
              key={todo.id} />
          })}
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
