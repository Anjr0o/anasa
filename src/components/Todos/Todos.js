import React from 'react';
import Todo from './Todo/Todo';
import FlipMove from 'react-flip-move';

const todos = (props) =>
    <FlipMove>{
        props.todos.map((todo, index) => {
            return (
                <Todo
                    className={todo.strikeThrough}
                    todoName={todo.todoName}
                    status={todo.status}
                    click={(event) => props.checked(event, todo.id)}
                    key={todo.id} />
            )
        })
    }
    </FlipMove>

export default todos;