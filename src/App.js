import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Header from './components/header/header'
import Footer from './components/footer/footer'
import Home from './pages/front/home/home'
import Movie from './pages/front/movie/movie'

const Front = () => (
  <div className="front">
    <Header />
    <article className="main">
      <Route exact path="/" component={Home}></Route>
      <Route path="/movie/:movieId" component={Movie}></Route>
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
  <Router>
    <Main />
  </Router>
)

export default App
