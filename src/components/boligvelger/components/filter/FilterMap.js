/*
 * Created by Thomas Hartmann
 * Wrapper component to map state to Filter
 */
import Filter from './Filter'
import { connect } from 'react-redux'
import { addCounty, removeCounty, setMaxPrice, setMinPrice, setMaxSize, setMinSize, addBedroomOption, removeBedroomOption, clearFilter } from '../../../../redux/reducers/filter/filterActions'
import { toggleFilter } from '../../../../redux/reducers/filterUi/filterUiActions'
import { fetchResults } from '../../../../redux/reducers/searchResults/resultsActions'
import fields, {allBedroomValues} from './inputFields'

const mapStateToProps = state => ({
  showAll: state.showAllCounties,
  initialCounties: state.counties.slice(0, 4),
  hiddenCounties: state.counties.slice(4),
  allBedroomValues: allBedroomValues,
  selectedBedroomValues: state.filter.numberOfBedrooms,
  selectedCounties: state.filter.counties,
  minPrice: state.filter.minPrice,
  maxPrice: state.filter.maxPrice,
  minSize: state.filter.minSize,
  maxSize: state.filter.maxSize.bedroomValues,
  filter: state.filter
})

const mapDispatchToProps = dispatch => ({
  handleToggle (show) {
    dispatch(toggleFilter(show))
  },
  handleChange (field, value) {
    switch (field) {
      case fields.ADD_COUNTY:
        dispatch(addCounty(value))
        break
      case fields.REMOVE_COUNTY:
        dispatch(removeCounty(value))
        break
      case fields.MIN_PRICE:
        dispatch(setMinPrice(value))
        break
      case fields.MAX_PRICE:
        dispatch(setMaxPrice(value))
        break
      case fields.MIN_SIZE:
        dispatch(setMinSize(value))
        break
      case fields.MAX_SIZE:
        dispatch(setMaxSize(value))
        break
      case fields.ADD_BEDROOM_OPTION:
        dispatch(addBedroomOption(value))
        break
      case fields.REMOVE_BEDROOM_OPTION:
        dispatch(removeBedroomOption(value))
        break
      default:
        break
    }
  },
  handleBlur () {
    console.log('Handling blur. Searching …')
  },
  performSearch (filter) {
    dispatch(fetchResults(filter))
  },
  handleReset () {
    dispatch(clearFilter())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Filter)
