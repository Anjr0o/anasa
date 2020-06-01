import React from 'react';

let todos = (props) => {
    return (
        <div>
            <input type="text" onChange={props.changed}/>
            <p>I'm the todos component!</p>
            <div>{props.children}</div>
        </div>
    )
}

export default todos;