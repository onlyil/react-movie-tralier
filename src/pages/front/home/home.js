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
    ],
    activeIndex: 0,
  }

  componentDidMount() {
    // this.network().getYears()
  }

  event = () => ({
    changeMenu: index => {
      this.setState({
        activeIndex: index,
      })
    },
  })

  network = () => ({
    getYears: async () => {},
  })

  render() {
    const { menu, activeIndex } = this.state
    return (
      <div className="home-container">
        <div className="side-container">
          <Sidebar
            menu={menu}
            activeIndex={activeIndex}
            changeMenu={index => this.event().changeMenu(index)}
          />
        </div>
        <div className="main-container">
          展示
        </div>
      </div>
    )
  }
}
