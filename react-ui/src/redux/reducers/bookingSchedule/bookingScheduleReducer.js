/*
 * Created by Thomas Hartmann
 * Reducer for booking schedule
 */
import types from './bookingScheduleActionTypes'
import { combineReducers } from 'redux'

const appointments = (state = [], action) => {
  switch (action.type) {
    case types.ADD_BOOKING:
      return [...state, action.payload]
    case types.CHANGE_SCHEDULE:
      return action.payload
    case types.CLEAR_SCHEDULE:
      return []
    default:
      return state
  }
}

export const branch = (state = '', action) => action.type === types.CHANGE_BRANCH ? action.payload : state

export const date = (state = '', action) => action.type === types.CHANGE_DATE ? action.payload : state

export default combineReducers({ appointments, branch, date })
