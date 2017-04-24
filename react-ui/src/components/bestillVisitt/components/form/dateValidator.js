/*
 *  Created by Gruppe 3
 */

export const validateDate = (date) => {
  if (date.getDay() === 0 || date.getDay() === 6) {
    return true
  }
  if (new Date() >= date) {
    return true
  }
}
