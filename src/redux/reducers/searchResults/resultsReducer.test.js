/* global it, expect */

/*
 * Created by Thomas on 16/04/2017.
 * Test suite for results reducer
 */

import reducer from './resultsReducer'
import types from './resultsActionTypes'

it('should return the initial state', () => {
  expect(
    reducer(undefined, {})
  ).toEqual({
    'fetchingResults': false,
    'results': []
  })
})

it('should set fetching to true', () => {
  const initialState = {
    fetchingResults: false,
    results: []
  }

  expect(
    reducer(initialState, { type: types.FETCH_RESULTS })
  ).toEqual({
    'fetchingResults': true,
    'results': []
  })
})

it('should cancel fetching', () => {
  const initialState = {
    fetchingResults: true,
    results: []
  }

  expect(
    reducer(initialState, { type: types.CANCEL_FETCHING_RESULTS })
  ).toEqual({
    'fetchingResults': false,
    'results': []
  })
})

// TODO: fix this little thing

it('should change the results', function () {
  const initialState = {
    fetchingResults: true,
    results: []
  }

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

  // This shows the right result, so it works. Unsure what the test is complaining about.
  console.log(reducer(
    initialState, {
      type: types.CHANGE_RESULTS,
      payload: payload
    }))

  expect(
    reducer(
      initialState, {
        type: types.CHANGE_RESULTS
      }
    ).toEqual({
      'fetchingResults': false,
      'results': payload
    })
  )
})
