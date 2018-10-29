import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Axios from 'axios'
import { Link } from 'react-router-dom'
import './header.scss'

export default class Header extends Component {
  static propTypes = {}

  state = {
    categories: [],
  }

  componentDidMount() {
    this.network().getCategories()
  }

  event = () => ({
    cateClick: (item) => {
      console.log('点击分类', item)
      // history.push('')
    },
  })

  network = () => ({
    getCategories: async () => {
      let res = await Axios.get('/app/category')
      console.log('分类', res.data)
      this.setState({
        categories: res.data.list
      })
    },
  })

  render() {
    const { categories } = this.state
    return (
      <header className="header">
        <div className="container">
          <h1 className="title">电影预告</h1>
          <nav className="nav">
            {categories.map(item =>
              <span key={item.uid} onClick={() => this.event().cateClick(item)}>
                <Link className="cate-name" to={`/movie/${item.uid}`} >{item.name}</Link>
              </span>
            )}
          </nav>
        </div>
      </header>
    )
  }
}
