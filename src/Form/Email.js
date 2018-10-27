import React from 'react';

const Email = (props) => {
    return (
        <div className="form-group">
        <input className="form-control" type="email" placeholder="*Email" value={props.email} onChange={props.emailInputHandler}></input>
        {props.emailerror &&
        <p className="form-error">{props.emailerror}</p> }
        </div>
    );
}

export default Email;