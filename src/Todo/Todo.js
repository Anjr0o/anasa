import React from 'react';

let todo = React.forwardRef((props, ref) => {
    return (
        <div ref={ref}>
            <br/>
            <span onClick={props.click}>{props.status} </span><span style={props.style} className={props.className}
                onClick={props.click}>{props.todoName}</span>
        </div>
    )
})

export default todo;