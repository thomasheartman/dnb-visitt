/*
 * Created by Thomas Hartmann
 * Component to map state to the home component
 */
import Home from './Home'
import { connect } from 'react-redux'
import { setDropDownCounty } from '../../redux/reducers/dropDownCounty/dropDownCountyActions'
import { setCounty, clearCounties } from '../../redux/reducers/filter/filterActions'
import counties from '../../redux/counties'
import { showAll } from './dropdownConstants'

const mapStateToProps = state => ({
  selectedCounty: state.dropDownCounty,
  allCounties: counties
})

const mapDispatchToProps = dispatch => ({
  handleChange (value) {
    dispatch(setDropDownCounty(value))
  },
  handleSubmit (value) {
    if (!value || value === showAll) {
      dispatch(clearCounties())
    } else {
      dispatch(setCounty(value))
    }
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
