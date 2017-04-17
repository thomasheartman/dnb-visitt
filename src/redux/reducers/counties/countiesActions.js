/*
 * Created by Thomas Hartmann
 * Counties actions component
 */
import types from './countiesActionTypes'

export const setCounties = (newCounties = []) => ({ type: types.SET_COUNTIES, payload: newCounties })

export const getCounties = () => (dispatch, getState) => {
  // TODO: write this thunk, yo. Needs firebase first, though.
  // fetch() data
  // .then((results) => dispatch(setCounties(results)))
  // .catch(error => console.log(error))
}
