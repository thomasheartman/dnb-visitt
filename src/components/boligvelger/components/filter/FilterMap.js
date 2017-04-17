/*
 * Created by Thomas Hartmann
 * Wrapper component to map state to Filter
 */
import Filter from './Filter'
import { connect } from 'react-redux'
import { setCounty, setMaxPrice, setMinPrice, setMaxSize, setMinSize, setOne, setTwo, setThreePlus, clearFilter } from '../../../../redux/reducers/filter/filterActions'
import fields from './inputFields'

const mapStateToProps = state => ({
  counties: state.counties,
  bedroomValues: [
    { value: fields.ONE, checked: state.filter.numberOfBedrooms.one },
    { value: fields.TWO, checked: state.filter.numberOfBedrooms.two },
    { value: fields.THREE_PLUS, checked: state.filter.numberOfBedrooms.threePlus }
  ],
  selectedCounty: state.filter.county,
  minPrice: state.filter.minPrice,
  maxPrice: state.filter.maxPrice,
  minSize: state.filter.minSize,
  maxSize: state.filter.maxSize
})

const mapDispatchToProps = dispatch => ({
  handleChange (field, value) {
    switch (field) {
      case fields.COUNTY:
        dispatch(setCounty(value))
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
      case fields.ONE:
        dispatch(setOne(value))
        break
      case fields.TWO:
        dispatch(setTwo(value))
        break
      case fields.THREE_PLUS:
        dispatch(setThreePlus(value))
        break
      default:
        break
    }
  },
  handleBlur () {
    console.log('Handling blur. Searching …')
  },
  performSearch () {
    console.log('Performing search!')
  },
  handleReset () {
    dispatch(clearFilter())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Filter)
