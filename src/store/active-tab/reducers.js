import initialState from './state'
import * as types from './action-types'

export const activeTab = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_ACTIVE_TAB:
      return action.index
    default:
      return state
  }
}
