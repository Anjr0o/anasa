import React, { Component } from 'react';
import classes from './App.module.css';
import TodoForm from '../components/Todos/TodoForm';
import Todos from '../components/Todos/Todos';
import Contact from '../components/Contact/Contact';
import { BrowserRouter, Route, NavLink} from 'react-router-dom';
class App extends Component {

  state = {
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
                  to="/todos">Todos</NavLink>
                </li>
                <li>
                  <NavLink 
                  activeClassName={classes.active}
                  to="/contact">Contact</NavLink>
                </li>
              </ul>
            </nav>
          </header>
          <Route path="/todos" render={() => (
            <div>
              <TodoForm submit={this.handleSubmit} value={this.state.value} changed={this.handleChange} />
              <Todos
                todos={this.state.todos}
                checked={this.checkedHandler} />
            </div>
          )}></Route>
          <Route path="/contact" component={Contact} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
