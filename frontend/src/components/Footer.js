import React from 'react'
import Logo1 from "../assets/logo1.png"
import facebook from "../assets/facebook.png"
import instagram from "../assets/instragram.png"
import pinterest from "../assets/pinterest.png"
import twitter from "../assets/twitter.png"

class Footer extends React.Component {
    render() {
        return (
            <footer className="bg-light py-3">
                <div className="container d-flex flex-column">
                    <div className="row">
                        <div className="col-12 col-lg-4 d-flex align-items-center justify-content-center pt-5">
                        <img className="logo-footer" src={Logo1} alt="iconUser"></img>
                            <h3>MYtinerary</h3>
                        </div>
                        <div className="col-12 col-lg-4 d-flex align-items-center justify-content-around pt-5">
                        <a target="_blank" href="https://www.facebook.com/BaseBarambioAntartidaArgentina/"><img className="redes-footer" src={facebook} alt="iconUser"></img></a>
                        <a target="_blank" href="https://www.instagram.com/"><img className="redes-footer" src={instagram} alt="iconUser"></img></a>
                        <a target="_blank" href="https://ar.pinterest.com/"><img className="redes-footer" src={pinterest} alt="iconUser"></img></a>
                        <a target="_blank" href="https://twitter.com/base_marambio/"><img className="redes-footer" src={twitter} alt="iconUser"></img></a>
                        </div>
                        <div className="col-12 col-lg-4 d-flex flex-column align-items-center justify-content-center pt-5">
                            <p className="footer-text">Base Marambio, La Antartida</p>
                            <a className="footer-text" href="contact@mytinerary.com">contact@mytinerary.com</a>
                            <p className="footer-text">+ 01 234 567 88</p>
                            <p className="footer-text">+ 98 765 432 10</p>
                            </div>
                        </div>
                        <div className="col-12 py-5">
                        <div className="text-center">Copyright &copy; 2021 - MYtinerary Proyect - Franco Quattrini</div>
                        </div>
                    </div>
            </footer>
        )
    }
}

export default Footer