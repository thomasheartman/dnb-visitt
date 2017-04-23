/*
 * Created by Thomas Hartmann
 * Reducer for booking schedule
 */
import types from './bookingScheduleActionTypes'

const bookingSchedule = (state = [], action) => {
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

export default bookingSchedule