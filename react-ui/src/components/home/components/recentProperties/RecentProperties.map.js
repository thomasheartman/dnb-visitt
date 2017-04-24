/*
 * Created by Thomas Hartmann
 * A file for mapping state to
 * recent properties
 */
import React from 'react'
import { connect } from 'react-redux'
import RecentProperties from './RecentProperties'
import { fetchResultsHomePage } from '../../../../redux/reducers/searchResults/resultsActions'
import _ from 'lodash'
import NoResults from '../../../boligvelger/components/searchResults/components/noResults/NoResults'
import ResultItem from '../../../boligvelger/components/searchResults/components/resultItem/ResultItem.map'

const mapResults = (results) => (
  <div>
    {results.map((result, key) => <ResultItem {...result} key={key} />)}
  </div>
)

const processedResults = (results) => (
  _.isEmpty(results)
    ? <NoResults />
    : mapResults(results)
)

const mapStateToProps = state => ({
  properties: state.searchResults.results,
  results: processedResults(state.searchResults.results)
})

const mapDispatchToProps = dispatch => ({
  getResults () {
    dispatch(fetchResultsHomePage())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(RecentProperties)
