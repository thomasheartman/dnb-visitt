/*
 * Created by Thomas Hartmann
 * Actions for the current property
 */

import types from './currentPropertyActionTypes'
import { database } from '../../../firebase/firebase'

export const fetchProperty = () => ({ type: types.FETCH_PROPERTY })
export const cancelFetchingProperty = () => ({ type: types.CANCEL_FETCHING_PROPERTY })

export const changeProperty = (newProperty) => ({ type: types.CHANGE_PROPERTY, payload: newProperty })

export const getProperty = (id) => (dispatch, getState) => {

  if (getState().currentProperty.fetchingProperty) return

  dispatch(fetchProperty())

  const ref = database.ref('properties')

  const idInt = parseInt(id, 10)

  ref.orderByChild('Id').equalTo(idInt).on('child_added', (snapshot) => {
    dispatch(changeProperty(snapshot.val()))
  }, (error) => {
    console.log('An error occurred', error)
    dispatch(cancelFetchingProperty())
  })

}