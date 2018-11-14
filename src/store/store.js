import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import * as tab from './active-tab/reducers'

const store = createStore(
  combineReducers({
    ...tab,
  }),
  applyMiddleware(thunk, logger)
)

export default store
