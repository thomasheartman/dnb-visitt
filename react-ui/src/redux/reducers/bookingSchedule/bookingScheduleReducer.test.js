/* global it, expect */

/*
 * Created by Thomas Hartmann
 * Test file for booking schedule reducer
 */
import types from './bookingScheduleActionTypes'
import reducer from './bookingScheduleReducer'

const initialState = {
  appointments: ['0900', '1000', '1400'],
  branch: 'Skien',
  date: '2017-12-21'
}

it('should change the branch', () => {
  const payload = 'Oslo'

  const expectedState = {
    appointments: ['0900', '1000', '1400'],
    branch: payload,
    date: '2017-12-21'
  }

  expect(reducer(initialState,
  ({ type: types.CHANGE_BRANCH, payload: payload })
  )).toEqual(expectedState)
})

it('should change the date', () => {
  const payload = '2018-03-25'

  const expectedState = {
    appointments: ['0900', '1000', '1400'],
    branch: 'Skien',
    date: payload
  }

  expect(reducer(initialState,
    ({ type: types.CHANGE_DATE, payload: payload })
  )).toEqual(expectedState)
})

it('should add a new booking to the array', () => {
  const payload = '1300'

  const expectedState = {
    appointments: [...initialState.appointments, payload],
    branch: 'Skien',
    date: '2017-12-21'
  }

  expect(reducer(initialState,
    ({ type: types.ADD_BOOKING, payload: payload })))
    .toEqual(expectedState)
})

it('should change the entire array', () => {
  const payload = ['1100', '1200', '1600']

  const expectedState = {
    appointments: payload,
    branch: 'Skien',
    date: '2017-12-21'
  }

  expect(reducer(initialState,
    ({ type: types.CHANGE_SCHEDULE, payload: payload })))
    .toEqual(expectedState)
})

it('should clear the array', () => {
  const expectedState = {
    appointments: [],
    branch: 'Skien',
    date: '2017-12-21'
  }

  expect(reducer(
    initialState, ({ type: types.CLEAR_SCHEDULE })
  )).toEqual(expectedState)
})
