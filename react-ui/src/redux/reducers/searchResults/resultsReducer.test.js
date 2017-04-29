/* global it, expect */

/*
 * Created by Thomas on 16/04/2017.
 * Test suite for results reducer
 */

import reducer from './resultsReducer'
import types from './resultsActionTypes'

const initialState = {
  'fetchingResults': false,
  'queuedSearch': false,
  'results': []
}

const fetchingState = {
  'fetchingResults': true,
  'queuedSearch': false,
  'results': []
}

const queuedState = {
  'fetchingResults': true,
  'queuedSearch': true,
  'results': []
}

it('should return the initial state', () => {
  expect(
    reducer(undefined, {})
  ).toEqual(initialState)
})

it('should queue a search', () => {
  expect(reducer(
    fetchingState, ({type: types.QUEUE_SEARCH})
  )).toEqual(queuedState)

})

it('should set fetching to true', () => {
  expect(
    reducer(initialState, { type: types.FETCH_RESULTS })
  ).toEqual(fetchingState)
})

it('should cancel fetching', () => {
  expect(
    reducer(fetchingState, { type: types.CANCEL_FETCHING_RESULTS })
  ).toEqual(initialState)
})

it('should change the results', function () {
  const payload = [
    {
      'project': 0,
      'county': 'Oslo',
      'price': 5000000
    },
    {
      'project': 1,
      'county': 'Nord-Trøndelag',
      'price': 6500000
    }
  ]

  expect(
    reducer(
      fetchingState, {
        type: types.CHANGE_RESULTS,
        payload: payload
      }
    )).toEqual({
      'fetchingResults': false,
      'queuedSearch': false,
      'results': payload
    })
})
