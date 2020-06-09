import React from 'react';
import classes from '../../../containers/App.module.css';

let todo = React.forwardRef((props, ref) => {
    return (
        <div style={{ display: (props.selected == 'Finished' && props.className == '') || (props.selected == 'Unfinished' && props.className != '') ? 'none' : 'block' }} ref={ref}>
            <br />
            <div className={classes.todo}>
                <span onClick={props.click}>{props.status} </span>
                <span
                    className={props.className}
                    onClick={props.click}>{props.todoName}
                </span>
            </div>
        </div>
    )
})

export default todo;