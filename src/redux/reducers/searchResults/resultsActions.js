/*
 * Created by Thomas Hartmann
 * Actions to be performed on the results set
 */

import types from './resultsActionTypes'
import { database } from '../../../firebase/firebase'

export const startFetchingResults = () => ({ type: types.FETCH_RESULTS })

export const cancelFetchingResults = () => ({ type: types.CANCEL_FETCHING_RESULTS })

export const changeResults = results => ({ type: types.CHANGE_RESULTS, payload: results })

export const fetchResults = (parameters) => (dispatch, getState) => {
  if (getState().searchResults.fetchingResults) return

  console.log('fetching results now')

  dispatch(fetchResults)

  database.ref('/properties/').once('value', snapshot => {
    dispatch(changeResults(snapshot.val()))
  })
}
