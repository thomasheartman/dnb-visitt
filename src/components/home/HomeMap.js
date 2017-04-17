/*
 * Created by Thomas Hartmann
 * Component to map state to the home component
 */
import Home from './Home'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  selectedCounty: state.filter.county,
  allCounties: state.counties
})

const mapDispatchToProps = dispatch => ({
  handleChange (value) {
    console.log(`I'm changing to ${value}`)
    // dispatch(setCounty(value)) TODO: implement
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
