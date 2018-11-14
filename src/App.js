import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/store'

import Header from './components/header/header'
import Footer from './components/footer/footer'
import Home from './pages/front/home/home'
import Movie from './pages/front/movie/movie'

const Front = () => (
  <div className="front">
    <Header />
    <article className="main">
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/movie/:movieId" component={Movie}></Route>
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

const Main = () => (
  <div className="app">
    <Route path="/" exact component={Front} />
    <Route path="/admin" component={Admin} />
  </div>
)

const App = () => (
  <Provider store={store}>
    <Router>
      <Main />
    </Router>
  </Provider>
)

export default App
