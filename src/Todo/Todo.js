import React from 'react';

let todo = (props) => {
    return (
        <div>
            <p onClick={props.click}>{props.status} {props.todoName}</p>
        </div>
    )
}

export default todo;