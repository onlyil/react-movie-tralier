import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './sidebar.scss'
import { setActiveTab } from '../../store/active-tab/actions'


 class Sidebar extends Component {
  static propTypes = {
    menu: PropTypes.array.isRequired,
    activeIndex: PropTypes.number.isRequired,
  }

  event = () => ({
    activeTab: (index) => {
      this.props.setActiveTab(index)
    },
  })

  render() {
    const { menu, activeIndex } = this.props
    return (
      <div>
        {menu.map((item, index) =>
          <div
            className={`menu-item ${index === activeIndex ? 'active' : ''}`}
            key={index}
            onClick={() => this.event().activeTab(index)}>
            {item.title}
          </div>
        )}
      </div>
    )
  }
}

export default connect(
  state => ({
    activeIndex: state.activeTab,
  }),
  {
    setActiveTab,
  }
)(Sidebar)
