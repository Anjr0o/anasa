import React, { Component } from 'react';
import logo from './logo.svg';
import classes from './App.module.css';
import Todos from './Todos/Todos';
import Todo from './Todo/Todo';
import FlipMove from 'react-flip-move';
import Contact from './Contact/Contact';
import styled from 'styled-components';

class App extends Component {

  state = {
    value: '',
    // Tutorial Todos
    todos: [
      {
        id: 'kdj3',
        todoName: 'click this item',
        status: 'Try to',
        strikeThrough: ''
      },
      {
        id: '4939',
        todoName: "click this",
        status: 'Click the bottom, ',
        strikeThrough: classes.strikethrough
      }
    ],
  }

  checkedHandler = (event, id) => {
    const todoIndex = this.state.todos.findIndex(todo => {
      return todo.id === id;
    });

    const todo = {
      ...this.state.todos[todoIndex]
    };

    console.log(this.state.todos + ' completed');
    // updates strikethrough effect
    todo.strikeThrough = classes.strikethrough;
    todo.status = 'I no longer need to';

    const todos = [...this.state.todos];
    console.log(todos);
    todos[todoIndex] = todo;
    if (todoIndex == todos.length - 1) {
      todos.splice(todoIndex, 1);
      if (todos.length == 0) {
        todos.push(
          {
            id: 'kdjkd3',
            todoName: 'find more to do',
            status: 'Wow I really need to',
            strikeThrough: ''
          }
        )
      }
    }
    else { todos.push(todos.splice(todoIndex, 1)[0]); }
    this.setState({ todos: todos })
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  handleSubmit = (event) => {
    const id = this.state.value.replace(this.state.value[0], String(Math.floor(Math.random() * 1000)));
    this.setState({
      todos: [{
        id: id,
        todoName: this.state.value,
        status: 'I need to',
        strikeThrough: ''
      },
      ...this.state.todos
      ]
    });
    this.setState({value: ""});
    event.preventDefault();
  }

  render() {
    return (
      <div className={classes.App}>
        <header className={classes.AppHeader}>
          <Todos submit={this.handleSubmit} value={this.state.value} changed={this.handleChange} />
          <FlipMove>
            {this.state.todos.map((todo, index) => {
              return <Todo
                className={todo.strikeThrough}
                todoName={todo.todoName}
                status={todo.status}
                click={(event) => this.checkedHandler(event, todo.id)}
                key={todo.id} />
            })}
          </FlipMove>
        </header>
      </div>
    );
  }
}

export default App;
