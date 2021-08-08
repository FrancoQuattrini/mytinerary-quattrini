import React from 'react'
import './App.css'

import Home from './pages/Home'
import Cities from './pages/Cities'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Cities" component={Cities} />
        </Switch>
      </BrowserRouter>
      </>
    )
  }
}

export default App