import React from 'react';
import { NavLink } from 'react-router-dom'

const Header = (porps) => {
    return (
        <div>
            <nav className="navbar navbar-inverse navbar-static-top">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <NavLink className="navbar-brand" to="/">Naing React App</NavLink>
                    </div>
                    <ul className="nav navbar-nav">
                        <li><NavLink to="/"><span class="glyphicon glyphicon-home"></span> Home</NavLink></li>
                        <li><NavLink to="/Quotes"><span class="glyphicon glyphicon-leaf"></span> Quotes</NavLink></li>

                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        <li><NavLink to="/form"><span class="glyphicon glyphicon-user"></span> Register</NavLink></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Header;