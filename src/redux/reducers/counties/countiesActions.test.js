/* global it, expect */
/*
 * Created by Thomas Hartmann
 * Test component for counties actions
 */
import { setCounties } from './countiesActions'
import types from './countiesActionTypes'

it('should return an action with the correct type and payload', () => {
  const payload = [
    'Oslo',
    'Akershus',
    'Vestfold'
  ]
  const expectedResult = {
    type: types.SET_COUNTIES,
    payload: payload
  }
  expect(setCounties(payload)).toEqual(expectedResult)
})

it('should return an empty result set if no argument is passed', () => {
  const expectedResult = ({ type: types.SET_COUNTIES, payload: [] })

  expect(setCounties()).toEqual(expectedResult)
})
