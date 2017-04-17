/*
 * Created by Thomas Hartmann
 * Component to map state to the home component
 */
import Home from './Home'
import { connect } from 'react-redux'
import { setCounty } from '../../redux/reducers/filter/filterActions'

const mapStateToProps = state => ({
  selectedCounty: state.filter.county,
  allCounties: state.counties
})

const mapDispatchToProps = dispatch => ({
  handleChange (value) {
    console.log(`getting jiggy in ${value}`)
    dispatch(setCounty(value))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
