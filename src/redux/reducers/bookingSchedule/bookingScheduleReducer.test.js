/* global it, expect */

/*
 * Created by Thomas Hartmann
 * Test file for booking schedule reducer
 */
import types from './bookingScheduleActionTypes'
import reducer from './bookingScheduleReducer'

const initialState = ['0900', '1000', '1400']

it('should add a new booking to the array', () => {
  const payload = '1300'

  const expectedState = [...initialState, payload]

  expect(reducer(initialState,
    ({ type: types.ADD_BOOKING, payload: payload })))
    .toEqual(expectedState)

})

it('should change the entire array', () => {
  const payload = ['1100', '1200', '1600']

  expect(reducer(initialState,
    ({ type: types.CHANGE_SCHEDULE, payload: payload })))
    .toEqual(payload)
})

it('should clear the array', () => {
  const expectedState = []

  expect(reducer(
    initialState, ({ type: types.CLEAR_SCHEDULE})
  )).toEqual(expectedState)

})