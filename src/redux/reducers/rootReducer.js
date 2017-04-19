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
import counties from './counties/countiesReducer'
import showAllCounties from './filterUi/filterUiReducer'
import { reducer as formReducer } from 'redux-form'
import dropDownCounty from './dropDownCounty/dropDownCountyReducer'

export const form = formReducer

export default combineReducers({
  filter,
  dropDownCounty,
  searchResults,
  counties,
  showAllCounties,
  form
})
