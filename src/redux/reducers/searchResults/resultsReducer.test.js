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
  expect(
        reducer(undefined, { type: types.FETCH_RESULTS })
    ).toEqual({
      'fetchingResults': true,
      'results': []
    })
})

it('should cancel fetching', () => {
  expect(
        reducer(undefined, { type: types.CANCEL_FETCHING_RESULTS })
    ).toEqual({
      'fetchingResults': false,
      'results': []
    })
})

// TODO: fix this little thing
/*
it('should change the results', function () {
    expect(
        reducer(
            undefined, {
                type: types.CHANGE_RESULTS,
                payload:
                [{
                    project: 0,
                    county: "Oslo",
                    price: 5000000
                },
                {
                    project: 1,
                    county: "Nord-Trøndelag",
                    price: 6500000
                }]
            }
        ).toEqual({
            "fetchingResults": false,
            "results": [
                {
                    project: 0,
                    county: "Oslo",
                    price: 5000000
                },
                {
                    project: 1,
                    county: "Nord-Trøndelag",
                    price: 6500000
                }
            ]
        })
    )
}) */
