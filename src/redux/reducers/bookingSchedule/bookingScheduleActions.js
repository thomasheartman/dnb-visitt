/*
 * @flow
 * Created by Thomas Hartmann
 * Actions for the booking schedule
 */
import { getSchedule } from '../../../firebase/queries'
import { formatDate } from '../../../helperFunctions/formatting'

import types from './bookingScheduleActionTypes'

export const addBooking = (newSlot: string) => ({ type: types.ADD_BOOKING, payload: newSlot })

export const changeSchedule = (newSchedule: Array) => ({ type: types.CHANGE_SCHEDULE, payload: newSchedule })

export const clearSchedule = () => ({ type: types.CLEAR_SCHEDULE })

const setDate = (newDate: string) => ({ type: types.CHANGE_DATE, payload: newDate })

const setBranch = (newBranch: string) => ({ type: types.CHANGE_BRANCH, payload: newBranch })

// the "public" version of the function
export const changeDate = (newDate: Date) => (dispatch, getState) => {
  const dateFormatted = formatDate(newDate)

  if (dateFormatted === getState().bookingSchedule.date) return

  dispatch(setDate(newDate))
}

export const changeBranch = (newBranch: string) => (dispatch, getState) => {
  if (newBranch === getState().bookingSchedule.branch) return

  dispatch(setBranch(newBranch))
}

export const updateSchedule = (newBranch: string, newDate: Date) => (dispatch, getState) => {

  const newDateFormatted = formatDate(newDate)
  const { branch, date } = getState().bookingSchedule
  let hasChanged = false

  if (newDateFormatted !== date) {
    dispatch(setDate(newDateFormatted))
    hasChanged = true
  }

  if (newBranch !== branch) {
    dispatch(setBranch(newBranch))
    hasChanged = true
  }

  if (hasChanged) dispatch(getSchedule(newBranch, newDateFormatted))
}