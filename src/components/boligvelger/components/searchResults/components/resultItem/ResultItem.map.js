/*
 * Created by Thomas Hartmann
 * Mapping comoponent for ResultItem
 */
import Result from './ResultItem'
import { connect } from 'react-redux'
import { getProperty } from '../../../../../../redux/reducers/currentProperty/currentPropertyActions'

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
  fetchProperty (id) {
    dispatch(getProperty(id))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Result)