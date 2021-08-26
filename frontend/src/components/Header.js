import { connect } from "react-redux"
import React from "react"
import { NavLink } from "react-router-dom"
import iconUser from "../assets/iconuser1.png"
import usersActions from "../redux/actions/usersActions"

window.addEventListener("DOMContentLoaded", (event) => {
   // Navbar shrink function
   var navbarShrink = function () {
      const navbarCollapsible = document.body.querySelector("#mainNav")
      if (!navbarCollapsible) {
         return
      }
      if (window.scrollY === 0) {
         navbarCollapsible.classList.remove("navbar-shrink")
      } else {
         navbarCollapsible.classList.add("navbar-shrink")
      }
   }

   // Shrink the navbar
   navbarShrink()

   // Shrink the navbar when page is scrolled
   document.addEventListener("scroll", navbarShrink)

   // Collapse responsive navbar when toggler is visible
   const navbarToggler = document.body.querySelector(".navbar-toggler")
   const responsiveNavItems = [].slice.call(
      document.querySelectorAll("#navbarResponsive .nav-link")
   )
   responsiveNavItems.map(function (responsiveNavItem) {
      return responsiveNavItem.addEventListener("click", () => {
         if (window.getComputedStyle(navbarToggler).display !== "none") {
            navbarToggler.click()
         }
      })
   })
})

const Header = (props) => {
   return (
      <nav
         className="navbar navbar-expand-lg navbar-light fixed-top py-3"
         id="mainNav"
      >
         <div className="container px-4 px-lg-5">
            <a className="navbar-brand" href="#top">
               MYtinerary{" "}
               {props.token && (
                  <span className="hiName">
                     {props.token && `👋 Hi ${props.firstname}!`}
                  </span>
               )}
            </a>
            <button
               className="navbar-toggler navbar-toggler-right"
               type="button"
               data-bs-toggle="collapse"
               data-bs-target="#navbarResponsive"
               aria-controls="navbarResponsive"
               aria-expanded="false"
               aria-label="Toggle navigation"
            >
               <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
               <ul className="navbar-nav ms-auto my-2 my-lg-0">
                  <li className="nav-item">
                     <NavLink
                        className="nav-link"
                        exact
                        to="/"
                        onClick={() => window.scrollTo(0, 0)}
                     >
                        Home
                     </NavLink>
                  </li>
                  <li className="nav-item">
                     <NavLink
                        className="nav-link"
                        to="/cities"
                        onClick={() => window.scrollTo(0, 0)}
                     >
                        Cities
                     </NavLink>
                  </li>
                  {!props.token && (
                     <li className="nav-item">
                        <NavLink
                           className="nav-link"
                           to="/signup"
                           onClick={() => window.scrollTo(0, 0)}
                        >
                           Sign Up
                        </NavLink>
                     </li>
                  )}
                  {!props.token && (
                     <li className="nav-item">
                        <NavLink
                           className="nav-link me-4"
                           to="/login"
                           onClick={() => window.scrollTo(0, 0)}
                        >
                           Log in
                        </NavLink>
                     </li>
                  )}
                  {props.token && (
                     <li className="nav-item">
                        <span
                           className="nav-link me-4"
                           onClick={() => props.logOut()}
                        >
                           Log Out
                        </span>
                     </li>
                  )}
               </ul>
               <div className="d-flex justify-content-center align-items-center">
                  <div
                     className="logoUser"
                     style={{
                        backgroundImage: `url('${
                           props.token ? props.picture : iconUser
                        }')`,
                     }}
                  ></div>
               </div>
            </div>
         </div>
      </nav>
   )
}

const mapStateToProps = (state) => {
   return {
      token: state.users.token,
      firstname: state.users.firstname,
      picture: state.users.picture,
   }
}

const mapDispatchToProps = {
   logOut: usersActions.logOut,
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
