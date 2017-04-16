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
import { reducer as formReducer } from 'redux-form'

export const form = formReducer;

export default combineReducers({
  filter,
  searchResults,
  counties,
  form
})
