import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './sidebar.scss'
import { setActiveTab } from '../../store/active-tab/actions'


 export default class Sidebar extends Component {
  static propTypes = {
    menu: PropTypes.array.isRequired,
    activeIndex: PropTypes.number.isRequired,
    changeMenu: PropTypes.func.isRequired,
  }

  // event = () => ({
  //   activeTab: index => {
  //     this.props.setActiveTab(index)
  //   },
  // })

  render() {
    const { menu, activeIndex, changeMenu } = this.props
    return (
      <div>
        {menu.map((item, index) =>
          <div
            className={`menu-item ${index === activeIndex ? 'active' : ''}`}
            key={index}
            onClick={(e) => changeMenu(index)}>
            {item.title}
          </div>
        )}
      </div>
    )
  }
}

// export default connect(
//   state => ({
//     activeIndex: state.activeTab,
//   }),
//   {
//     setActiveTab,
//   }
// )(Sidebar)
