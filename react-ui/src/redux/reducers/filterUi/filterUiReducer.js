/*
 * Created by Thomas Hartmann
 * Reducers for changing the ui state of
 * the filter component
 */
import types from './filterUiActionTypes'

export const showAllCounties = (state = false, action) => {
  switch (action.type) {
    case types.HIDE:
      return false
    case types.SHOW:
      return true
    default:
      return state
  }
}

export default showAllCounties
