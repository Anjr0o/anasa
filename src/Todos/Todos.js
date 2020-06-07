import React from 'react';

let todos = (props) => {
    return (
        <div>
            <br/>
            <div>I need to...</div>
            <br/>
            <form onSubmit={props.submit}>
                <input type="text" placeholder="Write a todo list" value={props.value} onChange={props.changed} />
            </form>
            <div>{props.children}</div>
        </div>
    )
}

export default todos;