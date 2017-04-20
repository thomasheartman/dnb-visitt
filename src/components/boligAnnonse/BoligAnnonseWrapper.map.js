/*
 * Created by Thomas Hartmann
 * Mapper for wrapper for annonser
 */
import { connect } from 'react-redux'
import Wrapper from './BoligAnnonseWrapper'

const mapStateToProps = state => ({
  fetching: state.currentProperty.fetchingProperty
})

export default connect(mapStateToProps)(Wrapper)