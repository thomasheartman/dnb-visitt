/*
 * @flow
 * Created by Thomas Hartmann
 * Actions for the booking schedule
 */
import types from './bookingScheduleActionTypes'

export const addBooking = (newSlot: string) => ({ type: types.ADD_BOOKING, payload: newSlot })

export const changeSchedule = (newSchedule: Array) => ({ type: types.CHANGE_SCHEDULE, payload: newSchedule })

export const clearSchedule = () => ({ type: types.CLEAR_SCHEDULE })