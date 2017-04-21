/* global it, expect */

/*
 * Created by Thomas Hartmann
 * Test file for booking reducer
 */

import {
  database
} from '../../../firebase/firebase'
import reducer from './bookingReducer'
import types from './bookingActionTypes'

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
  const ref = database.ref('appointments/branch2/20170505')

  ref.on('child_added', snapshot => {
    console.log(`${snapshot.key}:  ${JSON.stringify(snapshot.val())}`)
  })
  // done()
})

it('should add an entry to the database', (done) => {
  const payload = {
    'name': 'Ingrid Frøsland',
    'email': 'taking_you_with_me@lipa.ac.uk'
  }

  const ref = database.ref('appointments/branch2/20170505/1300')

  ref.once('value')
    .then(snapshot => {
      if (snapshot.val() !== null) {
        console.log('No vacancy')
        return false
      }
      console.log(`Setting data: ${JSON.stringify(snapshot.val())}`)
      ref.set(payload)
    }).then(
    setTimeout(() => done(), 2000)
    )

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
  const payload = 'Jan Johansen'

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
  const payload = '0900'

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
  const payload = '2017/04/22'

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
  const payload = {
    id: 1,
    address: 'Some street 22b'
  }

  const expectedState = {
    'date': '',
    'time': '',
    'client': {
      'name': '',
      'email': ''
    },
    'property': payload
  }
  expect(
    reducer(initialState, ({ type: types.SELECT_PROPERTY, payload: payload })))
    .toEqual(expectedState)
})