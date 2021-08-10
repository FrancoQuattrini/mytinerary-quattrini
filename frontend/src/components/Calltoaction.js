import React from "react"
import { Link } from 'react-router-dom'
import family from "../assets/familia.png"

class Calltoaction extends React.Component {
    render () {
        return (
            <section className="page-section" id="about">
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-lg-8 text-center">
                        <h2 id="now" className="mb-4">Now, it is your decision. Just choose your destination!</h2>
                        <hr className="divider divider-light" />
                        <Link id="botonCTA" className="btn btn-light btn-xl" to="/cities" onClick={() => window.scrollTo(0,0)}>CLICK HERE</Link>
                    </div>
                    <img className="family col-lg-6" src={family} alt="family"></img>
                </div>
            </div>
        </section>
        )
    }
}

export default Calltoaction;