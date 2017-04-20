/* global it, expect */

/*
 * Created by Thomas Hartmann
 * Test file for curretProperty reducer
 */
import types from './currentPropertyActionTypes'
import reducer from './currentPropertyReducer'

const initialState = {
  fetchingProperty: false,
  propertyData: {}
}

const fetchingState = {
  fetchingProperty: true,
  propertyData: {
    apartmentNo: 24,
    streetName: 'someStreet'
  }
}

it('should set fetching to true', () => {
  const expectedResult = {
    fetchingProperty: true,
    propertyData: {}
  }

  expect(reducer(initialState, ({ type: types.FETCH_PROPERTY }))).toEqual(expectedResult)
})

it('should cancel fetching', () => {
  const expectedState = {
    fetchingProperty: false,
    propertyData: {
      apartmentNo: 24,
      streetName: 'someStreet'
    }
  }

  expect(reducer(fetchingState, ({ type: types.CANCEL_FETCHING_PROPERTY }))).toEqual(expectedState)
})

it('should change the value of the current property object AND cancel fetching', () => {
  const expectedResults = {
    fetchingProperty: false,
    propertyData: {
      apartmentNo: 3550,
      streetName: 'someOtherStreet entirely'
    }
  }

  const payload = {
    apartmentNo: 3550,
    streetName: 'someOtherStreet entirely'
  }

  expect(reducer(
    fetchingState,
    ({ type: types.CHANGE_PROPERTY, payload: payload })
  )).toEqual(expectedResults)
})
