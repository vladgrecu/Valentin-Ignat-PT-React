import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.module.css'
import Servicii from './views/servicii'
import Despre from './views/despre'
import Home from './views/home'
import Contact from './views/contact'
import PovestiDeSucces from './views/povesti-de-succes'
import Blog from './views/blog'
import Hiit from './views/hiit'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact component={Servicii} path="/servicii" />
        <Route exact component={Despre} path="/despre" />
        <Route exact component={Home} path="/" />
        <Route exact component={Contact} path="/contact" />
        <Route exact component={PovestiDeSucces} path="/povesti-de-succes" />
        <Route exact component={Blog} path="/blog" />
        <Route exact component={Hiit} path="/hiit" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
