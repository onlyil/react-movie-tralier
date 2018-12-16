import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Axios from 'axios'
import Sidebar from '@/components/sidebar/sidebar'
import './home.scss'
import { Button } from 'antd'

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
    console.log(this.props)
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
          <Link to="/front/movie/1">详情1</Link>
          <br/>
          <Button
            type="primary"
            onClick={() => this.props.history.push('/front/movie/2')}>
            详情2
          </Button>
        </div>
      </div>
    )
  }
}
