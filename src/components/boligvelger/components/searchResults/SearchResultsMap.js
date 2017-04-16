/*
 * Created by Thomas Hartmann
 * Wrapping component to map state to results view
 */
import { connect } from 'react-redux'
import SearchResults from './SearchResults'

const mapStateToProps = state => ({
  results: state.searchResults.results
})

export default connect(mapStateToProps)(SearchResults)
