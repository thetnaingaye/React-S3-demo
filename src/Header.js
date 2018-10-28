import React from 'react';
import { NavLink } from 'react-router-dom'

const Header = (porps) => {
    return (
        <div>
            <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <NavLink className="navbar-brand" to="/">Naing React App</NavLink>
                    </div>

                    <div class="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav">
                            <li><NavLink to="/"><span class="glyphicon glyphicon-home"></span> Home</NavLink></li>
                            <li><NavLink to="/Quotes"><span class="glyphicon glyphicon-leaf"></span> Quotes</NavLink></li>

                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li><NavLink to="/form"><span class="glyphicon glyphicon-user"></span> Register</NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;