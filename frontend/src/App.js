import React from "react"
import "./App.css"
import Home from "./pages/Home"
import Cities from "./pages/Cities"
import Itineraries from "./pages/Itineraries"
import ErrorG from "./pages/ErrorG"
import Error404 from "./pages/Error404"
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"

class App extends React.Component {
   render() {
      return (
         <>
            <BrowserRouter>
               <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/cities" component={Cities} />
                  <Route path="/itineraries/:id" component={Itineraries} />
                  <Route path="/error" component={ErrorG} />
                  <Route path="/error404" component={Error404} />
                  <Redirect to="/error404" />
               </Switch>
            </BrowserRouter>
         </>
      )
   }
}

export default App
