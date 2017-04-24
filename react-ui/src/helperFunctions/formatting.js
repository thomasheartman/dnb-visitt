/*
 * Created by Thomas Hartmann
 * A collection of formatting functions
 */

// function to pad numbers so that they're always X characters long
export const pad = (number: number, desiredLength: number = 4, paddingCharacter: string = '0') =>
  (String(paddingCharacter).repeat(desiredLength) + String(number)).slice(String(number).length)

// function to format a date into our preferred format: YYYY-MM-DD
export const formatDate = (date) => {
  const day = pad(date.getDate(), 2)
  const month = pad(date.getMonth() + 1, 2) // add one, because months are zero-indexed
  const year = date.getFullYear().toString()
  const fullDate = year.concat('-', month, '-', day)
  return fullDate
}

// Function to format street and county names according to norwegian standards
export const toTitleCaseNorwegian = (textString) => {

  const lowerCaseWords = ['og', 'vei', 'gate']

  return textString.replace(/\w\S*/g, (word) => {
    if (lowerCaseWords.includes(word)) return word.toLowerCase()

    return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()
  })
}

// Capitalises words where necessary
export const formatPropertyData = (property) => {
  property.streetName = toTitleCaseNorwegian(property.streetName)
  property.county = toTitleCaseNorwegian(property.county)
  property.zipLocation = toTitleCaseNorwegian(property.zipLocation)
  property.projectName = toTitleCaseNorwegian(property.projectName)
  property.energyRating = property.energyRating.toUpperCase()

  return property
}

export const formatTime = time => time.slice(0, 2) + ':' + time.slice(2, 4)