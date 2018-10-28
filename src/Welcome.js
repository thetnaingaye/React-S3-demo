import React from 'react';
import Header from './Header';
import { NavLink } from 'react-router-dom'


const Welcome = () => {
    return (
        <div>
            <div><Header /></div>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">Welcome to My React App</h1>
                    <p className="lead">Get ready to explore react world.</p>
                    <p class="lead">
                        <NavLink className="btn btn-primary btn-lg" to="/form" >Learn more</NavLink>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Welcome;