import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Sidebar from '@/components/sidebar/sidebar'
import './home.scss'

export default class home extends Component {
  render() {
    return (
      <div className="home-container">
        <div className="side-container">
          <Sidebar />
        </div>
        <div className="main-container">
          展示
        </div>
      </div>
    )
  }
}
