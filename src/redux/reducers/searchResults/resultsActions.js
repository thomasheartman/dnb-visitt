/*
 * Created by Thomas Hartmann
 * Actions to be performed on the results set
 */

import types from './resultsActionTypes'

export const fetchResults = () => ({ type: types.FETCH_RESULTS })

export const cancelFetchingResults = () => ({ type: types.CANCEL_FETCHING_RESULTS })
