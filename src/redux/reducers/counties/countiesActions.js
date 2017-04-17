/*
 * Created by Thomas Hartmann
 * Counties actions component
 */
import types from './countiesActionTypes'

export const setCounties = (newCounties = []) => ({ type: types.SET_COUNTIES, payload: newCounties })