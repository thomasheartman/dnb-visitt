/* global it, expect */

/*
 * Created by Thomas Hartmann
 * Tests for dropDownCounty
 */

import reducer from './dropDownCountyReducer'
import types from './dropDownCountyActionTypes'

const initialState = "someCounty"

it('should set the county value', () => {
  const payload = "someOtherCounty"
  expect(reducer(initialState, ({ type: types.SET_DROP_DOWN_COUNTY, payload }))).toEqual(payload)
})