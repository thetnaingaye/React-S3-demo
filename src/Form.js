import React,{ Component}  from  'react';
import './Form.css';
import Email from './Form/Email';
import Password from './Form/Password';
import PasswordConfirm from './Form/PasswordConfrim';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email : "",
            emailerror :"",
            password:"",
            passworderror:"",
            passwordconfirm:"",
            passwordconfirmerror:"",
        }
    }

    emailInputHandler = (e) => {
        this.setState({
            email : e.target.value,
            emailerror : ""
        })
    }

    passwordInputHandler = (e) => {
        this.setState({
            password : e.target.value,
            passworderror : ""
        })
    }

    passwordConfirmInputHandler = (e) => {
        this.setState({
            passwordconfirm : e.target.value,
            passwordconfirmerror : ""
        })
    }

    formHandler = (e) => {
        e.preventDefault();

        let isValid = true;
        //validation
        if(!this.validateEmail(this.state.email)){
            this.setState({
                emailerror : "email is incorrect"
            })
            isValid = false;
        }

        if(this.state.password.length < 6) {
            this.setState({
                passworderror : "Password must be at least 6 character long"
            })
            isValid = false
        }

        if(this.state.password && this.state.password !== this.state.passwordconfirm){
            this.setState({
                passwordconfirmerror: "Password not match"
            })
            isValid =false
        }

        if(isValid){
             console.log(this.state)
        }
    }

    validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    render() {
        return (
            <div className="myForm">
            <form onSubmit={this.formHandler} >
               <Email 
                    email={this.state.email} 
                    emailerror={this.state.emailerror} 
                    emailInputHandler={this.emailInputHandler}/>
               <Password 
                    password={this.state.password} 
                    passworderror={this.state.passworderror}
                    passwordInputHandler={this.passwordInputHandler} />
               <PasswordConfirm 
                    passwordconfirm={this.state.passwordconfirm} 
                    passwordconfirmerror={this.state.passwordconfirmerror}
                    passwordConfirmInputHandler={this.passwordConfirmInputHandler} />

                <button className="btn btn-primary">Submit</button>
            </form>
            </div>  
        );
    }
}

export default Form;