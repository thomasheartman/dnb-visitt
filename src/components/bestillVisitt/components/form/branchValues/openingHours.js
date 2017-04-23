/*
 * Created by Thomas Hartmann
 * A file listing opening hours
 */

import { pad } from '../../../../../helperFunctions/formatting'

const openingHour = 9
const closingHour = 17

const createHourArray = (openingHour, closingHour) => {
  let hours = []
  for (var hour = openingHour; hour < closingHour; hour++) {
    // multiply value by 100 to get times like 0900, 1000 etc.
    // subtract opening hour to make sure to start on 0 and not get undefined fields.
    hours[hour-openingHour] = pad(hour*100);
  }
  return hours
}

export default createHourArray(openingHour, closingHour)
