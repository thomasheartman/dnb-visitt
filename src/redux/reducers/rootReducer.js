/*
 * Created by Thomas Hartmann
 * This is the app's main reducer. It couples all
 * the lesser reducers into a full fat application
 * reducer
 */

// TODO: import all minor reducers here
import { combineReducers } from 'redux'
import filter from './filterReducer'

export default combineReducers({
  filter
})
