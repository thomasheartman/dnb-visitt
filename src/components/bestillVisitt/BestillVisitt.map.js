/*
 * Created by Thomas Hartmann
 * Component for mapping state of the app to the reserve Visit page
 */

import { connect } from 'react-redux'
import BestillVisitt from './BestillVisitt'
import { getProperty } from '../../redux/reducers/currentProperty/currentPropertyActions'

const mapStateToProps = state => ({
  id: state.currentProperty.propertyData.id,
  fetching: state.currentProperty.fetchingProperty,
  address: `${state.currentProperty.propertyData.streetName} ${state.currentProperty.propertyData.streetNumber}`,
  image: state.currentProperty.propertyData.image
})

const mapDispatchToProps = dispatch => ({
  fetchProperty (id) {
    dispatch(getProperty(id))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(BestillVisitt)
