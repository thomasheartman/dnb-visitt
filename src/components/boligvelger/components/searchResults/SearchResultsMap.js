/*
 * Created by Thomas Hartmann
 * Wrapping component to map state to results view
 */
import React from 'react'
import { connect } from 'react-redux'
import SearchResults from './SearchResults'
import _ from 'lodash'
import NoResults from './components/noResults/NoResults'
import { fetchResults } from '../../../../redux/reducers/searchResults/resultsActions'
import ResultItem from './components/resultItem/ResultItem'

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

const mapDispatchToProps = dispatch => ({
  getResults () {
    dispatch(fetchResults())
  }
})

const mapStateToProps = state => ({
  fetching: state.searchResults.fetchingResults,
  results: processedResults(state.searchResults.results)
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults)
