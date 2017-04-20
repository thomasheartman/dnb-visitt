/*
 * Created by Thomas Hartmann
 * Mapper for wrapper for annonser
 */
import { connect } from 'react-redux'
import Wrapper from './BoligAnnonseWrapper'
import { getProperty } from '../../redux/reducers/currentProperty/currentPropertyActions'


const mapStateToProps = state => ({
  fetching: state.currentProperty.fetchingProperty
})

const mapDispatchToProps = dispatch => ({
  fetchProperty (id) {
    dispatch(getProperty(id))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Wrapper)