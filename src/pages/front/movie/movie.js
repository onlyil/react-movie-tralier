import React, { Component } from 'react'
export default class Movie extends Component {

  componentDidMount() {
    console.log(this.props, '挂载了')
  }

  render() {
    return (
      <div>
        Movie
      </div>
    )
  }
}
