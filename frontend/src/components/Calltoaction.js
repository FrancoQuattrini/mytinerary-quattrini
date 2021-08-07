import React from "react"
import { Link } from 'react-router-dom'
import family from "../assets/familia.png"

class Calltoaction extends React.Component {
    render () {
        return (
            <section class="page-section" id="about">
            <div class="container px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-lg-8 text-center">
                        <h2 id="now" className="mb-4">Now, it is your decision. Just choose your destination!</h2>
                        <hr class="divider divider-light" />
                        <Link id="botonCTA" className="btn btn-light btn-xl" to="/cities">CLICK HERE</Link>
                    </div>
                    <div className="container">
                    <img className="family" src={family}></img>
                    </div>
                </div>
            </div>
        </section>
        )
    }
}

export default Calltoaction;