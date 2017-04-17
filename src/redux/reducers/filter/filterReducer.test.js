/* global it */

/*
 *Created by Thomas on 16/04/2017.
 * Test file for filterReducer behavior
 */

import reducer from './filterReducer'
import types from './filterActionTypes'

const initialState = {
  "county": "",
  "minPrice": 0,
  "maxPrice": 0,
  "minSize": 0,
  "maxSize": 0,
  "numberOfBedrooms": {
    "one": false,
    "two": false,
    "threePlus": false
  }
}

const allCheckboxesTicked = {
  "county": "",
  "minPrice": 0,
  "maxPrice": 0,
  "minSize": 0,
  "maxSize": 0,
  "numberOfBedrooms": {
    "one": true,
    "two": true,
    "threePlus": true
  }
}

it('should change the county', () => {
  const expectedResult = {
    "county": "Oslo",
    "minPrice": 0,
    "maxPrice": 0,
    "minSize": 0,
    "maxSize": 0,
    "numberOfBedrooms": {
      "one": false,
      "two": false,
      "threePlus": false
    }
  }

  expect(reducer(initialState, ({ type: types.CHANGE_COUNTY, payload: "Oslo" }))).toEqual(expectedResult)
})

it('should set the min price', () => {
  const payload = 250000

  const expectedResult = {
    "county": "",
    "minPrice": payload,
    "maxPrice": 0,
    "minSize": 0,
    "maxSize": 0,
    "numberOfBedrooms": {
      "one": false,
      "two": false,
      "threePlus": false
    }
  }

  expect(reducer(initialState, ({ type: types.SET_MIN_PRICE, payload: payload }))).toEqual(expectedResult)
})

it('should set the max price', () => {
  const payload = 250000

  const expectedResult = {
    "county": "",
    "minPrice": 0,
    "maxPrice": payload,
    "minSize": 0,
    "maxSize": 0,
    "numberOfBedrooms": {
      "one": false,
      "two": false,
      "threePlus": false
    }
  }
  expect(reducer(initialState, ({ type: types.SET_MAX_PRICE, payload: payload }))).toEqual(expectedResult)
})

it('should select one bedroom', () => {

  const expectedResult = {
    "county": "",
    "minPrice": 0,
    "maxPrice": 0,
    "minSize": 0,
    "maxSize": 0,
    "numberOfBedrooms": {
      "one": true,
      "two": false,
      "threePlus": false
    }
  }

  expect(reducer(initialState, ({ type: types.SELECT_ONE }))).toEqual(expectedResult)
})

it('should select two bedrooms', () => {

  const expectedResult = {
    "county": "",
    "minPrice": 0,
    "maxPrice": 0,
    "minSize": 0,
    "maxSize": 0,
    "numberOfBedrooms": {
      "one": false,
      "two": true,
      "threePlus": false
    }
  }

  expect(reducer(initialState, ({ type: types.SELECT_TWO }))).toEqual(expectedResult)
})

it('should select three+ bedrooms', () => {

  const expectedResult = {
    "county": "",
    "minPrice": 0,
    "maxPrice": 0,
    "minSize": 0,
    "maxSize": 0,
    "numberOfBedrooms": {
      "one": false,
      "two": false,
      "threePlus": true
    }
  }

  expect(reducer(initialState, ({ type: types.SELECT_THREE_PLUS }))).toEqual(expectedResult)
})

it('should deselect one bedroom', () => {
  const expectedResult = {
    "county": "",
    "minPrice": 0,
    "maxPrice": 0,
    "minSize": 0,
    "maxSize": 0,
    "numberOfBedrooms": {
      "one": false,
      "two": true,
      "threePlus": true
    }
  }
  expect(reducer(allCheckboxesTicked, ({ type: types.DESELECT_ONE }))).toEqual(expectedResult)
})

it('should deselect one bedroom', () => {
  const expectedResult = {
    "county": "",
    "minPrice": 0,
    "maxPrice": 0,
    "minSize": 0,
    "maxSize": 0,
    "numberOfBedrooms": {
      "one": true,
      "two": false,
      "threePlus": true
    }
  }
  expect(reducer(allCheckboxesTicked, ({ type: types.DESELECT_TWO }))).toEqual(expectedResult)
})

it('should deselect one bedroom', () => {
  const expectedResult = {
    "county": "",
    "minPrice": 0,
    "maxPrice": 0,
    "minSize": 0,
    "maxSize": 0,
    "numberOfBedrooms": {
      "one": true,
      "two": true,
      "threePlus": false
    }
  }
  expect(reducer(allCheckboxesTicked, ({ type: types.DESELECT_THREE_PLUS }))).toEqual(expectedResult)
})

it('should set the min size', () => {
  const payload = 60

  const expectedResult = {
    "county": "",
    "minPrice": 0,
    "maxPrice": 0,
    "minSize": payload,
    "maxSize": 0,
    "numberOfBedrooms": {
      "one": false,
      "two": false,
      "threePlus": false
    }
  }
  expect(reducer(initialState, ({ type: types.SET_MIN_SIZE, payload: payload }))).toEqual(expectedResult)
})

it('should set the max size', () => {
  const payload = 500
  const expectedResult = {
    "county": "",
    "minPrice": 0,
    "maxPrice": 0,
    "minSize": 0,
    "maxSize": payload,
    "numberOfBedrooms": {
      "one": false,
      "two": false,
      "threePlus": false
    }
  }
  expect(reducer(initialState, ({ type: types.SET_MAX_SIZE, payload: payload }))).toEqual(expectedResult)
})