import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './sidebar.scss'


export default class Sidebar extends Component {
  static propTypes = {
    menu: PropTypes.array.isRequired,
  }

  render() {
    const { menu } = this.props
    return (
      <div>
        {menu.map(item =>
          <div className="menu-item">{item.title}</div>  
        )}
      </div>
    )
  }
}
