import * as types from './action-types'

export const setActiveTab = (index) => ({
  type: types.SET_ACTIVE_TAB,
  index,
})
