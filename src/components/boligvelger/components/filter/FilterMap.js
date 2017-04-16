/*
 * Created by Thomas Hartmann
 * Wrapper component to map state to Filter
 */
import Filter from './Filter'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  counties: state.counties,
  selectedCounty: state.filter.county,
  bedroomValues: ['1', '2', '3+']
})

const mapDispatchToProps = dispatch => ({
  handleChange (value) {
    console.log(`Handling change here, buddy! New value: ${value}`)
  },
  clearFilter () {
    console.log('Clearing filter, captain!')
  },
  performSearch () {
    console.log('Performing search!')
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Filter)
