/*
 * Created by Thomas Hartmann
 * Actions to be performed on the results set
 */

import types from './resultsActionTypes'
import { database } from '../../../firebase/firebase'
import _ from 'lodash'

export const startFetchingResults = () => ({ type: types.FETCH_RESULTS })

export const cancelFetchingResults = () => ({ type: types.CANCEL_FETCHING_RESULTS })

export const changeResults = results => ({ type: types.CHANGE_RESULTS, payload: results })

export const fetchResults = (parameters) => (dispatch, getState) => {
  if (getState().searchResults.fetchingResults) return

  const filter = getState().filter

  const db = database.ref('properties')

  // debug
  db.orderByKey().on('child_added', function (snapshot) {
    console.log(snapshot.child('Fylke'))
    console.log(snapshot.key)
  })

  console.log('fetching results now')

  if (_.isEmpty(filter.counties)) {
    db.once('value', snapshot => {
      dispatch(changeResults(snapshot.val()))
    })
  } else {
    let results = []
    Promise.all(
      filter.counties.map(county => db.once('value', snapshot => {
        console.log(`Getting results for ${county}`)
        return db.child('Fylke').orderByValue().equalTo(county).once('value')
      })
        .then(snapshot => {
          console.log(`Snapshot results: ${snapshot.val().length}`)
          results = [...results, ...snapshot.val()]
        }))
    )
      .then(() => {
        console.log(`Final results: ${results}`)
        dispatch(changeResults(results))
      })
  }
}

/* const loadVideosParallel = (counties, callback) => {
  Promise.all(
    counties.map(county => {
      console.log('send request ' + county);
      return db.child('properties').child(county).equalTo(county).once('value')
        .then(snapshot => {
          console.log('got response ' + county);
          return snapshot;
        })
    })
  ).then(r => callback());
} */
