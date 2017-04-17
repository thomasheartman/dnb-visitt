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
  "numberOfBedrooms": 0,
  "minSize": 0,
  "maxSize": 0
}

it('should change the county', () => {
  const expectedResult = {
    "county": "Oslo",
    "minPrice": 0,
    "maxPrice": 0,
    "numberOfBedrooms": 0,
    "minSize": 0,
    "maxSize": 0
  }

  expect(reducer(initialState, ({ type: types.CHANGE_COUNTY, payload: "Oslo" }))).toEqual(expectedResult)
})

it('should set the min price', () => {
  const payload = 250000

  const expectedResult = {
    "county": "",
    "minPrice": payload,
    "maxPrice": 0,
    "numberOfBedrooms": 0,
    "minSize": 0,
    "maxSize": 0
  }

  expect(reducer(initialState, ({ type: types.SET_MIN_PRICE, payload: payload }))).toEqual(expectedResult)
})

it('should set the max price', () => {
  const payload = 250000

  const expectedResult = {
    "county": "",
    "minPrice": 0,
    "maxPrice": payload,
    "numberOfBedrooms": 0,
    "minSize": 0,
    "maxSize": 0
  }
  expect(reducer(initialState, ({ type: types.SET_MAX_PRICE, payload: payload }))).toEqual(expectedResult)
})

it('should set the number of bedrooms', () => {
  const payload = 3

  const expectedResult = {
    "county": "",
    "minPrice": 0,
    "maxPrice": 0,
    "numberOfBedrooms": payload,
    "minSize": 0,
    "maxSize": 0
  }

  expect(reducer(initialState, ({ type: types.SET_NUMBER_OF_BEDROOMS, payload: payload }))).toEqual(expectedResult)
})

it('should set the min size', () => {
  const payload = 60

  const expectedResult = {
    "county": "",
    "minPrice": 0,
    "maxPrice": 0,
    "numberOfBedrooms": 0,
    "minSize": payload,
    "maxSize": 0
  }
  expect(reducer(initialState, ({ type: types.SET_MIN_SIZE, payload: payload }))).toEqual(expectedResult)
})

it('should set the max size', () => {
  const payload = 500
  const expectedResult = {
    "county": "",
    "minPrice": 0,
    "maxPrice": 0,
    "numberOfBedrooms": 0,
    "minSize": 0,
    "maxSize": payload
  }
  expect(reducer(initialState, ({ type: types.SET_MAX_SIZE, payload: payload }))).toEqual(expectedResult)
})