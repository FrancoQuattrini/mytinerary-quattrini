import React from 'react'
import './App.css'
import Home from './pages/Home'
import Cities from './pages/Cities'
import InfoCity from './pages/InfoCity'
import Error404 from './pages/Error404'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Cities" component={Cities} />
          <Route path="/infoCity/:id" component={InfoCity}/>
          <Route path="/Error404" component={Error404} />
          <Redirect to="/Error404" />
        </Switch>
      </BrowserRouter>
      </>
    )
  }
}

export default App