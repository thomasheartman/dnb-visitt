/*
 * Created by Thomas Hartmann
 * This is the app's main reducer. It couples all
 * the lesser reducers into a full fat application
 * reducer
 */

// TODO: import all minor reducers here
import { combineReducers } from 'redux'
import filter from './filter/filterReducer'
import searchResults from './searchResults/resultsReducer'
import showAllCounties from './filterUi/filterUiReducer'
import { reducer as formReducer } from 'redux-form'
import dropDownCounty from './dropDownCounty/dropDownCountyReducer'
import currentProperty from './currentProperty/currentPropertyReducer'
import booking from './booking/bookingReducer'
import bookingSchedule from './bookingSchedule/bookingScheduleReducer'

export const form = formReducer

export default combineReducers({
  filter,
  dropDownCounty,
  showAllCounties,
  searchResults,
  currentProperty,
  booking,
  bookingSchedule,
  form
})
