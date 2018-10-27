import React from 'react';

const Password = (props) => {
    return (
        <div className="form-group">
        <input className="form-control" type="password" placeholder="*Password" 
                value={props.password}
                onChange={props.passwordInputHandler}></input>
        {props.passworderror &&
        <p className="form-error">{props.passworderror}</p> }
        </div>
    );
}
export default Password;