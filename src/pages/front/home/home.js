import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Axios from 'axios'
import Sidebar from '@/components/sidebar/sidebar'
import './home.scss'

export default class home extends Component {
  state = {
    menu: [
      {
        title: '2018',
      },
      {
        title: '2017',
      },
      {
        title: '2016',
      },
    ]
  }

  componentDidMount() {
    // this.network().getYears()
  }

  network = () => ({
    getYears: async () => {},
  })

  render() {
    const { menu } = this.state
    return (
      <div className="home-container">
        <div className="side-container">
          <Sidebar menu={menu} />
        </div>
        <div className="main-container">
          展示
        </div>
      </div>
    )
  }
}
