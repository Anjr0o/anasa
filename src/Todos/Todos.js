import React from 'react';

let todos = (props) => {
    return (
        <div>
            <p>I need to...</p>
            <form onSubmit={props.submit}>
                <input type="text" placeholder="write a todo list" value={props.value} onChange={props.changed} />
            </form>
            <div>{props.children}</div>
        </div>
    )
}

export default todos;