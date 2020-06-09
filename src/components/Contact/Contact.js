import React from 'react';
import classes from './Contact.module.css';

const contact = (props) => {
    return (
        <div>
        <form style={{display: props.contactDisplay}} onSubmit={props.submit} className={classes.contactForm} method="POST">
            <div className={classes.formGroup}>
                <input placeholder="First Name" type="text" onChange={props.firstNameChanged}/>
                <input placeholder="Last Name" type="text" onChange={props.lastNameChanged}/>
            </div>
            <div className={classes.formGroup}>
                <input placeholder="Email" type="email" onChange={props.emailChanged}/>
                <input placeholder="Phone" type="tel" onChange={props.phoneChanged}/>
            </div>
            <div className={classes.formGroup}>
                <textarea placeholder="Message" style={{display: 'block', width: '100%'}} rows="5" onChange={props.messageChanged}></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        <div className={classes.thankYou} style={{display: props.display}}>Thank you!</div>
        </div>
    )
}

export default contact;