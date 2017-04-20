/*
 * Created by Thomas Hartmann
 * This is where the app's store is configured with middleware
 * and then exported for use.
 */
import reducer from './reducers/rootReducer'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'

/*
 * function for logging messages to the console
 *  every time an action is dispatched. Very useful
 * for dev and debugging, but should be removed for
 *  deployment.
 */
const consoleMessages = store => next => action => {
  let result

  console.groupCollapsed(`Dispatching action => ${action.type}`)


  const filter = store.getState().filter

  console.log(`

    Current filter state:
   === === === === ===
  Counties: ${filter.counties}
  Min price: ${filter.minPrice}
  Max price: ${filter.maxPrice}
  Min size: ${filter.minSize}
  Max size: ${filter.maxSize}
  Bedrooms selected: ${filter.numberOfBedrooms}


`)
  console.groupEnd()

  result = next(action)

  return result
}

export default (initialState = {}) => applyMiddleware(thunk, consoleMessages)(createStore)(reducer, initialState)
