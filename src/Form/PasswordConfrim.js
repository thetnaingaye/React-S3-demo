import React from 'react';

const PasswordConfirm = (props) => {
    return (
        <div className="form-group">
        <input className="form-control" type="password" placeholder="*Confrim Password" value={props.passwordconfirm}
        onChange={props.passwordConfirmInputHandler}></input>
        {props.passwordconfirmerror &&
        <p className="form-error">{props.passwordconfirmerror}</p> }
        </div>
    );
}
export default PasswordConfirm;