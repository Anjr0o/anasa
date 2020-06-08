import React from 'react';
import classes from './TodoForm.module.css';

let todos = (props) => {
    return (
        <div>
            <br/>
            <span>I need to </span> 
            <form onSubmit={props.submit}>
                <input type="text" placeholder="Write a todo list" value={props.value} onChange={props.changed} />
            </form>
            <div>{props.children}</div>
            <div display='flex'>
                <button>All</button><button>Finished</button><button>Unfinished</button>
            </div>
        </div>
    )
}

export default todos;