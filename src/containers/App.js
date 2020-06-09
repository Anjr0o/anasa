import React, { Component } from 'react';
import classes from './App.module.css';
import TodoForm from '../components/Todos/TodoForm';
import Todos from '../components/Todos/Todos';
import Contact from '../components/Contact/Contact';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';

class App extends Component {

  state = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    thankYou: 'none',
    contactDisplay: 'inline-block',
    selected: 'All',
    // Value of TodoForm.js Input box
    value: '',
    // Starting Todos for tutorial
    todos: [
      {
        // Key
        id: 'kdj3',
        todoName: 'click this item',
        // Status will change upon completion
        status: 'Try to',
        // Strikethrough is inactive
        strikeThrough: ''
      },
      {
        // Key
        id: '4939',
        todoName: "click this",
        // Status will change upon completion
        status: 'Click the bottom, ',
        // Strikethrough is already active
        strikeThrough: classes.strikethrough
      }
    ],
  }

  // Upon click
  checkedHandler = (event, id) => {
    // Find the index of the item that was clicked by searching through todos to find the key that matches it
    const todoIndex = this.state.todos.findIndex(todo => {
      return todo.id === id;
    });

    // Use the index we just found to create a variable (via spread) of the todo that we found at that index
    const todo = {
      ...this.state.todos[todoIndex]
    };

    // Update status and set strikethrough to active for the todo variable we just made
    todo.strikeThrough = classes.strikethrough;
    todo.status = 'I no longer need to ';

    // Create a variable (via spread) of the todos we currently have
    const todos = [...this.state.todos];
    // Add our updated todo in place of the old todo at todoIndex
    todos[todoIndex] = todo;
    // If clicked bottom todo: delete todo
    if (todoIndex == todos.length - 1) {
      todos.splice(todoIndex, 1);
      // If todolist is empty: create a todo item to find more todos
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
    // Otherwise, move the todo to the end
    else { todos.push(todos.splice(todoIndex, 1)[0]); }
    // Finally, set state to finished todos array
    this.setState({ todos: todos })
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  handleSelected = (event) => {
    this.setState({ selected: event.target.value });
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
    this.setState({ value: "" });
    event.preventDefault();
  }

  handleContact = (event) => {
    event.preventDefault();
    this.setState({ thankYou: 'block', contactDisplay: 'none' })

  }

  onFirstNameChange = (event) => {
    this.setState({ firstName: event.target.value })
  }

  onLastNameChange = (event) => {
    this.setState({ lastName: event.target.value })
  }

  onPhoneChange = (event) => {
    this.setState({ phone: event.target.value })
  }

  onEmailChange = (event) => {
    this.setState({ email: event.target.value })
  }

  onMessageChange = (event) => {
    this.setState({ message: event.target.value })
  }


  render() {
    return (
      <BrowserRouter>
        <div className={classes.App}>
          <header className={classes.NavBar}>
            <nav>
              <ul>
                <li>
                  <NavLink
                    activeClassName={classes.active}
                    to="/" exact>Todos</NavLink>
                </li>
                <li>
                  <NavLink
                    activeClassName={classes.active}
                    to="/contact">Contact</NavLink>
                </li>
              </ul>
            </nav>
          </header>
          <Route path="/" exact render={() => (
            <div>
              <TodoForm submit={this.handleSubmit} value={this.state.value} active={this.state.selected} selected={this.handleSelected} changed={this.handleChange} />
              <Todos
                todos={this.state.todos}
                checked={this.checkedHandler}
                selected={this.state.selected} />
            </div>
          )}></Route>
          <Route path="/contact" render={() => (
            <Contact
              contactDisplay={this.state.contactDisplay}
              submit={this.handleContact}
              firstNameChanged={this.onFirstNameChange}
              lastNameChanged={this.onLastNameChange}
              emailChanged={this.onEmailChange}
              phoneChanged={this.onPhoneChange}
              messageChanged={this.onMessageChange}
              display={this.state.thankYou} />
          )}></Route>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
