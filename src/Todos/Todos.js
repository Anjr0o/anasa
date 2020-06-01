import React from 'react';

let todos = (props) => {
    return (
        <div>
            <input type="text" placeholder="I'm the todos component!" onChange={props.changed}/>
            <div>{props.children}</div>
        </div>
    )
}

export default todos;