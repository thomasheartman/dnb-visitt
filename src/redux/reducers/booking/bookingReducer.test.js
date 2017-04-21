/* global it, expect */

/*
 * Created by Thomas Hartmann
 * Test file for booking reducer
 */

// TODO: fill in
import {
	database
} from '../../../firebase/firebase'
import reducer from './bookingReducer'
import types from './bookingActionTypes'

it('should pass an arbitrary test', () => {
	const ref = database.ref('appointments')
const initialState = {
  'date': '',
  'time': '',
  'client': {
    'name': '',
    'email': ''
  },
  'property': {
  }
}

it('should pass an arbitrary test', () => {
  const ref = database.ref('appointments')

  ref.on('child_added', snapshot => {
    console.log(snapshot.val())
  })
		// done()
})

it('should set the email address', () => {
  const payload = 'me@example.com'

  const expectedState = {
    'date': '',
    'time': '',
    'client': {
      'name': '',
      'email': payload
    },
    'property': {
    }
  }

  expect(
    reducer(initialState, ({ type: types.SET_CLIENT_EMAIL, payload: payload })))
    .toEqual(expectedState)
})

it('should change the client name', () => {
  const payload = 'me@example.com'

  const expectedState = {
    'date': '',
    'time': '',
    'client': {
      'name': payload,
      'email': ''
    },
    'property': {
    }
  }

  expect(reducer
    (initialState, ({ type: types.SET_CLIENT_NAME, payload: payload })))
    .toEqual(expectedState)

})

it('should set the time', () => {
  const payload = 'me@example.com'

  const expectedState = {
    'date': '',
    'time': payload,
    'client': {
      'name': '',
      'email': ''
    },
    'property': {
    }
  }

  expect(
    reducer(initialState, ({ type: types.SET_BOOKING_TIME, payload: payload })))
    .toEqual(expectedState)
})

it('should set the date', () => {
  const payload = 'me@example.com'

  const expectedState = {
    'date': payload,
    'time': '',
    'client': {
      'name': '',
      'email': ''
    },
    'property': {
    }
  }
  expect(
    reducer(initialState, ({ type: types.SET_BOOKING_DATE, payload: payload })))
    .toEqual(expectedState)
})

it('should change the property', () => {
  const payload = 'me@example.com'

  const expectedState = {
    'date': '',
    'time': '',
    'client': {
      'name': '',
      'email': ''
    },
    'property': {
      payload
    }
  }
  expect(
    reducer(initialState, ({ type: types.SELECT_PROPERTY, payload: payload })))
    .toEqual(false)
})


it('should pass an arbitrary test', (done) => {
	const date = "2017_04_23"

	const ref = database.ref('appointments')

	ref.on('child_added', snapshot => {
		if (snapshot.val().date !== date) {
			const post = ref.push()
			ref.set({
				date
			})
			console.log($(date.val()) + "has been booked.")
		}
		else {
			console.log("The selected date is not available.")
		}
	})
})