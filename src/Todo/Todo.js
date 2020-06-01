import React from 'react';

let todo = (props) => {
    return (
        <div>
            <p style={props.style}
            onClick={props.click}>{props.status} {props.todoName}</p>
        </div>
    )
}

export default todo;