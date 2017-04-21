/*
 * Created by Thomas Hartmann
 * Component to map state to the home component
 */
import Home from './Home'
import { connect } from 'react-redux'
import { setDropDownCounty } from '../../redux/reducers/dropDownCounty/dropDownCountyActions'
import { setCounty, clearCounties } from '../../redux/reducers/filter/filterActions'
import { fetchResults } from '../../redux/reducers/searchResults/resultsActions'
import counties from '../../redux/counties'

const mapStateToProps = state => ({
  selectedCounty: state.dropDownCounty,
  allCounties: counties
})

const mapDispatchToProps = dispatch => ({
  handleChange (value) {
    console.log(value)
    dispatch(setDropDownCounty(value))
  },
  handleSubmit (value) {
    if (!value) {
      dispatch(clearCounties())
    } else {
      dispatch(setCounty(value))
    }
    dispatch(fetchResults())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
