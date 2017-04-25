/*
 * Created by Thomas Hartmann
 * A file with limits for filtering,
 * such as max price etc.
 * Could be replaced by a database
 * query to only give limits relevant
 * to what's in the database.
 */

export default {
  MAX_PRICE: 10000000,
  MIN_PRICE: 0,
  PRICE_STEP_SIZE: 100000,
  MAX_SIZE: 300,
  MIN_SIZE: 0,
  SIZE_STEP_SIZE: 5
}
