/*
 *  Created by Gruppe 3
 *  Contains functions for validating dates
 */

const isWeekend = (date) => date.getDay() === 0 || date.getDay() === 6

const isTodayOrEarlier = (date) => new Date() >= date

// checks whether a date is on the weekend or in the past. If so, returns true.
// could be expanded with a list of bank holidays etc.
export const shouldDisableDate = (date) => isWeekend(date) || isTodayOrEarlier(date)
