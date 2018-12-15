import React, { Component } from 'react'
import Loadable from 'react-loadable'

const Loading = function () {
  return <div>Loading...</div>
}

const LoadableComponent = Loadable({
  loader: () => import('./movie'),
  loading: Loading,
})

// export default class LoadableMovie extends Component {
//   render() {
//     return <LoadableComponent />
//   }
// }

export default LoadableComponent
