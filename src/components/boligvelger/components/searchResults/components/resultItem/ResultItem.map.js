/*
 * Created by Thomas Hartmann
 * Mapping comoponent for ResultItem
 */
import Result from './ResultItem'
import { connect } from 'react-redux'
import { getProperty } from '../../../../../../redux/reducers/currentProperty/currentPropertyActions'

const mapStateToProps = state => ({

})


export default connect(mapStateToProps)(Result)