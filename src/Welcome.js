import React from 'react';
import { NavLink } from 'react-router-dom';
import Toto from './toto';


const Welcome = () => {

                     

    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4">Welcome to My React App</h1>
                <p className="lead">Get ready to explore react world.</p>
                <p class="lead">
                    <NavLink className="btn btn-primary btn-lg" to="/form" >Learn more</NavLink>
                </p>
                <p class="lead">
                    <NavLink className="btn btn-success btn-lg" to="/Quotes" >Quotes</NavLink>
                </p>
            <Toto />

            </div>

        </div>
    );
}

export default Welcome;