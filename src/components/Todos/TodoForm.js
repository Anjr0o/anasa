import React from 'react';
import classes from './TodoForm.module.css';

let todos = (props) => {
    return (
        <div>
            <br/>
            <span>I need to </span> 
            <form onSubmit={props.submit}>
                <input type="text" placeholder="write a todo list" value={props.value} onChange={props.changed} />
            </form>
            <div>{props.children}</div>
            <div display='flex'>
                <button className={props.active === 'All' ? classes.active : ''} onClick={props.selected} value='All'>All</button>
                <button className={props.active === 'Finished' ? classes.active : ''} value='Finished' onClick={props.selected}>Finished</button>
                <button className={props.active === 'Unfinished' ? classes.active : ''} value="Unfinished" onClick={props.selected}>Unfinished</button>
            </div>
        </div>
    )
}

export default todos;