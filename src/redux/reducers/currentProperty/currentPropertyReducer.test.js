/* global it, expect */

/*
 * Created by Thomas Hartmann
 * Test file for curretProperty reducer
 */
import types from './currentPropertyActionTypes'
import reducer from './currentPropertyReducer'

const initialState = {
  apartmentNo: 24,
  streetName: 'someStreet'
}

it('should change the value of the current property object', () => {
  const expectedResults = {
    apartmentNo: 3550,
    streetName: 'someOtherStreet entirely'
  }

  expect(reducer(
    initialState,
    ({ type: types.CHANGE_PROPERTY, payload: expectedResults })
  )).toEqual(expectedResults)
})