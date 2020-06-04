import React from 'react';

let todos = (props) => {
    return (
        <div>
            <p>I need to finish...</p>
            <form onSubmit={props.submit}>
                <input type="text" placeholder="writing a todo list." value={props.value} onChange={props.changed} />
            </form>
            <div>{props.children}</div>
        </div>
    )
}

export default todos;