import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/store'

import Header from './components/header/header'
import Footer from './components/footer/footer'
import Home from './pages/front/home/home'
import Movie from './pages/front/movie/index'

const Front = () => (
  <div className="front">
    <Header />
    <article className="main">
      <Switch>
        <Route exact path="/front" component={Home}></Route>
        <Route path="/front/movie/:id" component={Movie}></Route>
      </Switch>
    </article>
    <Footer />
  </div>
)

const Admin = () => (
  <div className="admin">
    admin
  </div>
)

const App = () => (
  <Provider store={store}>
    <Router>
      <div className="app">
        <Route path="/front" component={Front} />
        <Route path="/admin" component={Admin} />
      </div>
    </Router>
  </Provider>
)

export default App
