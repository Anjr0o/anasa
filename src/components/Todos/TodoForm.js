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
                <button onClick={props.selected} value='All'>All</button><button value='Finished' onClick={props.selected}>Finished</button><button value="Unfinished" onClick={props.selected}>Unfinished</button>
            </div>
        </div>
    )
}

export default todos;