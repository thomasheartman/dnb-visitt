/*
 * Created by Thomas Hartmann
 * Actions to change the filter UI
 */
import types from './filterUiActionTypes'

export const toggleFilter = (show) => show ? ({type: types.SHOW}) : ({type: types.HIDE})
