/*
 * Created by Thomas Hartmann
 * Mapper for wrapper for annonser
 */
import React from 'react'
import { connect } from 'react-redux'
import Wrapper from './BoligAnnonseWrapper'
import Annonse from './components/BoligAnnonse.map'
import { getProperty } from '../../redux/reducers/currentProperty/currentPropertyActions'
import _ from 'lodash'

const loading = <h1>Loading content. Please wait</h1>

const processContent = (content) => (
  content.fetchingProperty
    ? loading
    : <Annonse />
)

const mapStateToProps = state => ({
  fetching: state.currentProperty.fetching,
  loading: loading,
  currentContent: state.currentProperty.propertyData,
  content: processContent(state.currentProperty)
})

const mapDispatchToProps = (dispatch, getState) => ({
  fetchContent (id) {
    dispatch(getProperty(id))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Wrapper)