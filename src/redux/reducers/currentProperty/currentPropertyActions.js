/*
 * Created by Thomas Hartmann
 * Actions for the current property
 */

import types from './currentPropertyActionTypes'

export const fetchProperty = () => ({ type: types.FETCH_PROPERTY })
export const cancelFetchingProperty = () =>({ type: types.CANCEL_FETCHING_PROPERTY })

export const changeProperty = (newProperty) => ({ type: types.CHANGE_PROPERTY, payload: newProperty })