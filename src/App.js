import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todos from './Todos/Todos';
import Todo from './Todo/Todo';
import Contact from './Contact/Contact';

class App extends Component {

  state = {
    todos: [
      { id: 'lekjlkck', todoName: 'getting somethin done', status: 'Finish', strikeThrough: {} },
      { id: 'elkjx', todoName: 'getting somethin else done', status: 'Finish', strikeThrough: {} },
      { id: 'bnenn', todoName: 'doin somethin', status: 'Finish', strikeThrough: {} }
    ],
    status: 'Finish',
    todoName: '',
    strikeThrough: {},
  }

  checkedHandler= (event, id) => {
    const todoIndex = this.state.todos.findIndex(todo => {
      return todo.id === id;
    });

    const todo = {
      ...this.state.todos[todoIndex]
    };
    console.log(this.state.todos[todoIndex].todoName + ' completed');

    todo.strikeThrough = {textDecoration: 'line-through'};
    todo.status = 'Finished';

    const todos = [...this.state.todos];
    todos[todoIndex] = todo;

    this.setState({ todos: todos })
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
          <Todos changed={this.newTodoHandler} />
          {this.state.todos.map((todo, index) => {
            return <Todo
              todoName={todo.todoName}
              status={todo.status}
              click={(event) => this.checkedHandler(event, todo.id)}
              style={todo.strikeThrough}
              key={todo.id} />
          })}
          {/* <Todo
            todoName={this.state.todoName}
            status={this.state.status}
            click={this.checkedHandler}
            style={this.state.strikeThrough}
          /> */}
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
