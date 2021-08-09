import React from 'react'
import { NavLink } from 'react-router-dom'
import iconUser from "../assets/iconuser1.png"

class Nav extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
            <div className="container px-4 px-lg-5">
                <a className="navbar-brand" href="#top">MYtinerary</a>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto my-2 my-lg-0">
                        <li className="nav-item"><NavLink className="nav-link" exact to="/">Home</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="/cities">Cities</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="/signUp">Sign Up</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="/login">Log in</NavLink></li>
                    </ul>
                    <img className="logoUser" src={iconUser} alt="iconUser"></img>
                </div>
            </div>
            </nav>
        )
    }
}

export default Nav