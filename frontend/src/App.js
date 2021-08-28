import React, { useEffect } from "react"
import "./App.css"
import Home from "./pages/Home"
import Cities from "./pages/Cities"
import Itineraries from "./pages/Itineraries"
import ErrorG from "./pages/ErrorG"
import Error404 from "./pages/Error404"
import SignUp from "./pages/SignUp"
import LogIn from "./pages/LogIn"
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"
import { connect } from "react-redux"
import usersActions from "./redux/actions/usersActions"

const App = (props) => {
   useEffect(() => {
      if (localStorage.getItem("token")) {
         props.logInLS(localStorage.getItem("token"))
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [])
   return (
      <>
         <BrowserRouter>
            <Switch>
               <Route exact path="/" component={Home} />
               <Route path="/cities" component={Cities} />
               <Route path="/itineraries/:id" component={Itineraries} />
               {!props.token && <Route path="/signup" component={SignUp} />}
               {!props.token && <Route path="/login" component={LogIn} />}
               <Route path="/error" component={ErrorG} />
               <Route path="/error404" component={Error404} />
               <Redirect to="/" />
            </Switch>
         </BrowserRouter>
      </>
   )
}

const mapStateToProps = (state) => {
   return {
      token: state.users.token,
   }
}

const mapDispatchToProps = {
   logInLS: usersActions.logInLS,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
