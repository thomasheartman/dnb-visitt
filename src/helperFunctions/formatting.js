/*
 * Created by Thomas Hartmann
 * A collection of formatting functions
 */

// function to pad numbers so that they're always X characters long
export const pad = (number :number , desiredLength:number = 4, paddingCharacter:string = '0') =>
  (String(paddingCharacter).repeat(desiredLength) + String(number)).slice(String(number).length)

// function to format a date into our preferred format: YYYY-MM-DD
export const formatDate = (date) => {
  const day = pad(date.getDate(), 2)
  const month = pad(date.getMonth() + 1, 2) // add one, because months are zero-indexed
  const year = date.getFullYear().toString()
  const fullDate = year.concat('-', month, '-', day)
  return fullDate
}