import React from 'react';

let todo = React.forwardRef((props, ref) => {
    return (
        <div ref={ref}>
            <br/>
            <div>
            <span onClick={props.click}>{props.status} </span><span style={props.style} className={props.className}
                onClick={props.click}>{props.todoName}</span>
                </div>
        </div>
    )
})

export default todo;