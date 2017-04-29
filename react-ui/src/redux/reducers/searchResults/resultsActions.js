/*
 * Created by Thomas Hartmann
 * Actions to be performed on the results set
 */

import types from './resultsActionTypes'
import { database } from '../../../firebase/firebase'
import { formatPropertyData } from '../../../helperFunctions/formatting'

export const startFetchingResults = () => ({ type: types.FETCH_RESULTS })

export const cancelFetchingResults = () => ({ type: types.CANCEL_FETCHING_RESULTS })

export const queueSearch = () => ({ type: types.QUEUE_SEARCH })

export const clearSearchQueue = () => ({ type: types.CLEAR_SEARCH_QUEUE })

export const addResult = newResult => ({ type: types.ADD_RESULT, payload: newResult })

export const changeResults = results => ({ type: types.CHANGE_RESULTS, payload: results })

export const clearResults = () => ({ type: types.CLEAR_RESULTS })

const arrayToLowerCase = (array) => {
  let result = []
  array.forEach((item) => {
    result = [...result, item.toLowerCase()]
  })
  return result
}

const processFilterValues = (filter) => {
  let numberOfBedrooms = []
  numberOfBedrooms = filter.numberOfBedrooms.includes('1') ? [...numberOfBedrooms, 1] : numberOfBedrooms
  numberOfBedrooms = filter.numberOfBedrooms.includes('2') ? [...numberOfBedrooms, 2] : numberOfBedrooms
  numberOfBedrooms = filter.numberOfBedrooms.includes('3+') ? [...numberOfBedrooms, 3] : numberOfBedrooms

  return {
    counties: filter.counties ? arrayToLowerCase(filter.counties) : [],
    maxPrice: filter.maxPrice ? filter.maxPrice : Number.MAX_SAFE_INTEGER,
    minPrice: filter.minPrice ? filter.minPrice : 0,
    maxSize: filter.maxSize ? filter.maxSize : Number.MAX_SAFE_INTEGER,
    minSize: filter.minSize ? filter.minSize : 0,
    numberOfBedrooms,
    threePlus: filter.numberOfBedrooms.includes('3+')
  }
}

const matchesSearchCriteria = (filter, property) => {
  const propertyPrice = property.price
  const propertySize = property.grossArea
  const propertyBedrooms = property.bedrooms

  if (filter.counties.length > 0 && !filter.counties.includes(property.county)) return false
  if (filter.minPrice > propertyPrice) return false
  if (filter.minSize > propertySize || propertySize > filter.maxSize) return false
  if (filter.numberOfBedrooms.length > 0 && !filter.numberOfBedrooms.includes(propertyBedrooms)) {
    if (propertyBedrooms < 3) return false
    if (!filter.threePlus && propertyBedrooms >= 3) return false
  }
  return true
}

export const fetchResults = (parameters) => (dispatch, getState) => {
  if (getState().searchResults.fetchingResults) {
    dispatch(queueSearch())
    return
  }
  dispatch(startFetchingResults())
  dispatch(clearSearchQueue())
  dispatch(clearResults())

  const filter = getState().filter
  const ref = database.ref('properties')
  const filterValues = processFilterValues(filter)

  ref.orderByChild('price').endAt(parseInt(filterValues.maxPrice, 10)).once('value')
    .then(snapshot => {
      const properties = snapshot.val()
      properties.forEach((property) => {
        if (matchesSearchCriteria(filterValues, property)) {
          dispatch(addResult(formatPropertyData(property)))
        }
      })
    })
    .then(() => dispatch(cancelFetchingResults()))
    .then(() => {
      if (getState().searchResults.queuedSearch) dispatch(fetchResults())
    })
    .catch(err => {
      dispatch(cancelFetchingResults())
      console.log(err)
    })
}

export const fetchResultsHomePage = () => (dispatch, getState) => {
  dispatch(startFetchingResults())
  dispatch(clearResults())

  const ref = database.ref('properties')

  ref.orderByChild('price').limitToLast(2).once('value')
    .then(snapshot => {
      snapshot.val().forEach((property) => dispatch(addResult(formatPropertyData(property))))
    })
    .then(() => {
      if (getState().searchResults.fetchingResults) dispatch(cancelFetchingResults())
    })
    .catch(err => {
      dispatch(cancelFetchingResults())
      console.log(err)
    })
}
