import React from "react"
import { Link } from 'react-router-dom'
import family from "../assets/familia.png"

class Calltoaction extends React.Component {
    render () {
        return (
            <section className="page-section bg-ligth text-dark">
                <div className="container px-3 px-lg-5 text-center">
                    <h2 id="now" className="mb-4">Now, it is your decision. Just choose your destination!</h2>
                    <Link id="botonCTA" className="btn btn-light btn-xl" to="/cities">CLICK HERE</Link>
                </div>
                <div className="container px-3 px-lg-5 text-center">
                    <img className="family" src={family}></img>
                </div>
                
            </section>
            
        )
    }
}

export default Calltoaction;