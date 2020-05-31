import React from 'react';

let todos = (props) => {
    return (
        <div>
            <p>I'm the todos component!</p>
            <div>{props.children}</div>
        </div>
    )
}

export default todos;