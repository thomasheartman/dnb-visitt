/*
 * @flow
 *  Created by Thomas Hartmann
 * This is a list of actions a user can perform on
 * the property filter
 */

export default {
    // property filtering
  SET_COUNTY: 'SET_COUNTY',
  CLEAR_COUNTY: 'CLEAR_COUNTY',

  SET_MIN_PRICE: 'SET_MIN_PRICE',
  SET_MAX_PRICE: 'SET_MAX_PRICE',

  // SET_NUMBER_OF_BEDROOMS
  SELECT_ONE: 'SELECT_ONE',
  DESELECT_ONE: 'DESELECT_ONE',
  SELECT_TWO: 'SELECT_TWO',
  DESELECT_TWO: 'DESELECT_TWO',
  SELECT_THREE_PLUS: 'SELECT_THREE_PLUS',
  DESELECT_THREE_PLUS: 'DESELECT_THREE_PLUS',

  SET_MIN_SIZE: 'SET_MIN_SIZE',
  SET_MAX_SIZE: 'SET_MAX_SIZE',

  CLEAR_FILTER: 'CLEAR_FILTER'
}
