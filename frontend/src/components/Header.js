import React from "react"
import { NavLink } from "react-router-dom"
import iconUser from "../assets/iconuser1.png"

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

class Header extends React.Component {
   render() {
      return (
         <nav
            className="navbar navbar-expand-lg navbar-light fixed-top py-3"
            id="mainNav"
         >
            <div className="container px-4 px-lg-5">
               <a className="navbar-brand" href="#top">
                  MYtinerary
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
                     <li className="nav-item">
                        <NavLink className="nav-link" to="/signup">
                           Sign Up
                        </NavLink>
                     </li>
                     <li className="nav-item">
                        <NavLink className="nav-link" to="/login">
                           Log in
                        </NavLink>
                     </li>
                  </ul>
                  <img className="logoUser" src={iconUser} alt="iconUser"></img>
               </div>
            </div>
         </nav>
      )
   }
}

export default Header
