import React from 'react'
import './App.css'

import Home from './pages/Home'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route path="/cities" component={Cities} /> */}
        </Switch>
      </BrowserRouter>
      </>
    )
  }
}

export default App