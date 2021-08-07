import React from "react"
import logo from "../assets/logo1.png"
import backgroundimg from "../assets/fondo.jpg"
import video from "../assets/earth.mp4"

class Header extends React.Component {
    render () {
        return (
        <>
        <header id="header" className="masthead d-none d-lg-block d-xl-block">
            <video autoPlay loop muted>
                <source src={video} type="video/mp4"></source>
            </video>
            <div className="container px-4 px-lg-5 h-100">
                <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
                    <div className="col-lg-8 align-self-end">
                        <img className="logo" src={logo} alt="logo"></img>
                        <h1 id="titleLogo" className="text-white font-weight-bold">MYtinerary</h1>
                        <hr className="divider" />
                    </div>
                    <div className="col-lg-8 align-self-baseline">
                        <h2 id="textLogo" className="text-white mb-5">"Find your perfect trip, designed by insiders who know and love their cities!"</h2>
                    </div>
                </div>
            </div>
        </header>
        <header id="header" className="masthead d-lg-none d-xl-none" style={{ backgroundImage: `url('${backgroundimg}')` }}>
                <div className="container px-4 px-lg-5 h-100">
                    <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
                        <div className="col-lg-8 align-self-end">
                            <img className="logo" src={logo} alt="logo"></img>
                            <h1 id="titleLogo" className="text-white font-weight-bold">MYtinerary</h1>
                            <hr className="divider" />
                        </div>
                        <div className="col-lg-8 align-self-baseline">
                            <h2 id="textLogo" className="text-white mb-5">"Find your perfect trip, designed by insiders who know and love their cities!"</h2>
                        </div>
                    </div>
                </div>
            </header>
        </>
        )
    }
}

export default Header

