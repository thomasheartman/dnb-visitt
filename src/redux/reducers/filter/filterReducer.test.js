/* global it, expect */

/*
 *Created by Thomas on 16/04/2017.
 * Test file for filterReducer behavior
 */

import reducer from './filterReducer'
import types from './filterActionTypes'

const initialState = {
  'counties': [],
  'minPrice': 0,
  'maxPrice': 0,
  'minSize': 0,
  'maxSize': 0,
  'numberOfBedrooms': []
}

const numberOfBedroomsFull = {
  'counties': [],
  'minPrice': 0,
  'maxPrice': 0,
  'minSize': 0,
  'maxSize': 0,
  'numberOfBedrooms': ['1', '2', '3+']

}

it('should change the counties', () => {
  const expectedResult = {
    'counties': [ 'Oslo' ],
    'minPrice': 0,
    'maxPrice': 0,
    'minSize': 0,
    'maxSize': 0,
    'numberOfBedrooms': []

  }

  expect(reducer(initialState, ({ type: types.SET_COUNTY, payload: 'Oslo' }))).toEqual(expectedResult)
})

it('should set the min price', () => {
  const payload = 250000

  const expectedResult = {
    'counties': [],
    'minPrice': payload,
    'maxPrice': 0,
    'minSize': 0,
    'maxSize': 0,
    'numberOfBedrooms': []

  }

  expect(reducer(initialState, ({ type: types.SET_MIN_PRICE, payload: payload }))).toEqual(expectedResult)
})

it('should set the max price', () => {
  const payload = 250000

  const expectedResult = {
    'counties': [],
    'minPrice': 0,
    'maxPrice': payload,
    'minSize': 0,
    'maxSize': 0,
    'numberOfBedrooms': []

  }
  expect(reducer(initialState, ({ type: types.SET_MAX_PRICE, payload: payload }))).toEqual(expectedResult)
})

it('should select add a bedroom option to the array', () => {
  const payload = '1'

  const expectedResult = {
    'counties': [],
    'minPrice': 0,
    'maxPrice': 0,
    'minSize': 0,
    'maxSize': 0,
    'numberOfBedrooms': [payload]

  }

  expect(reducer(initialState, ({ type: types.ADD_BEDROOM_OPTION, payload: payload }))).toEqual(expectedResult)
})

it('should remove a bedroom option from the array', () => {
  const payload = '2'

  const expectedResult = {
    'counties': [],
    'minPrice': 0,
    'maxPrice': 0,
    'minSize': 0,
    'maxSize': 0,
    'numberOfBedrooms': ['1', '3+']
  }

  expect(reducer(numberOfBedroomsFull, ({ type: types.REMOVE_BEDROOM_OPTION, payload: payload }))).toEqual(expectedResult)
})


it('should set the min size', () => {
  const payload = 60

  const expectedResult = {
    'counties': [],
    'minPrice': 0,
    'maxPrice': 0,
    'minSize': payload,
    'maxSize': 0,
    'numberOfBedrooms': []
  }
  expect(reducer(initialState, ({ type: types.SET_MIN_SIZE, payload: payload }))).toEqual(expectedResult)
})

it('should set the max size', () => {
  const payload = 500
  const expectedResult = {
    'counties': [],
    'minPrice': 0,
    'maxPrice': 0,
    'minSize': 0,
    'maxSize': payload,
    'numberOfBedrooms': []
  }
  expect(reducer(initialState, ({ type: types.SET_MAX_SIZE, payload: payload }))).toEqual(expectedResult)
})
