import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.module.css'
import Services from './views/services'
import MyMission from './views/my-mission'
import About from './views/about'
import Home from './views/home'
import Stories from './views/stories'
import Hiit from './views/hiit'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact component={Services} path="/services" />
        <Route exact component={MyMission} path="/my-mission" />
        <Route exact component={About} path="/about" />
        <Route exact component={Home} path="/" />
        <Route exact component={Stories} path="/stories" />
        <Route exact component={Hiit} path="/hiit" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
