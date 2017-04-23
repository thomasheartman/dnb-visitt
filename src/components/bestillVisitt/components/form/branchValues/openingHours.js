/*
 * Created by Thomas Hartmann
 * A file listing opening hours
 */

// function to pad numbers so that they're always 4 characters long
const pad = (number, desiredLength = 4, paddingCharacter = '0') =>
  (String(paddingCharacter).repeat(desiredLength) + String(number)).slice(String(number).length)

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
