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

  dispatch(startFetchingResults())

  const filter = getState().filter

  const db = database.ref('properties')


  console.log('fetching results now')

  if (_.isEmpty(filter.counties)) {
      let results = []
      db.once('value', snapshot => {
      results = snapshot.val()
    })
    .then(() => dispatch(changeResults(results)))
  } else {


    let results = []
    const maxPrice = filter.maxPrice ? filter.maxPrice : Number.MAX_VALUE
    const minPrice = filter.minPrice ? filter.minPrice : 0
    const maxSize = filter.maxSize ? filter.maxSize : Number.MAX_VALUE
    const minSize = filter.minSize ? filter.minSize : 0
/*    let numberOfBedrooms = []
    numberOfBedrooms = filter.numberOfBedrooms.includes('1') ? [...numberOfBedrooms, 1] : numberOfBedrooms
    numberOfBedrooms = filter.numberOfBedrooms.includes('2') ? [...numberOfBedrooms, 2] : numberOfBedrooms
    numberOfBedrooms = filter.numberOfBedrooms.includes('3+') ? [...numberOfBedrooms, 3] : numberOfBedrooms
    const threePlus = filter.numberOfBedrooms.includes('3+')*/



    Promise.all(
      filter.counties.map(county => db.orderByChild('Fylke').equalTo(county).on('child_added', snapshot => {

        const propertyPrice = snapshot.val().Price
        const propertySize = snapshot.val().SquareMetres
        const propertyBedrooms = snapshot.val().Bedrooms

        if (!(minPrice <= propertyPrice && propertyPrice <= maxPrice)) return
        console.log('Price in range')
        if (!(minSize <= propertySize && propertySize <= maxSize)) return
        console.log('Size in range')
/*        if (_.isEmpty(numberOfBedrooms) || !(numberOfBedrooms.includes(propertyBedrooms) || threePlus && propertyBedrooms >= 3)) return
        console.log('Bedrooms in range')*/

        console.log(`Getting results for ${county}: ${snapshot.val().Id}`)
        results = [...results, snapshot.val()]
      }))
    )
      .then(() => {
        console.log(`Final results: ${results}`)
        dispatch(changeResults(results))
      })
  }
}
