/*
 * Created by Thomas on 16/04/2017.
 * Reducer for results
 */

import C from './resultsActionTypes'
import { combineReducers } from 'redux'

const fetchingResults = (state = false, action) => {
    switch (action.type) {
        case C.FETCH_RESULTS:
            return true
        case C.CANCEL_FETCHING_RESULTS:
            return false
        default:
            return state
    }
}

const results = (state = [], action) => action.type === C.CHANGE_RESULTS ? action.payload : state

export default combineReducers({
    fetchingResults,
    results
})