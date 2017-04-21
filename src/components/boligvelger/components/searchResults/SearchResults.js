/*
 * Created by Thomas Hartmann
 * The section of the page that holds search results
 */
import React from 'react'
import { Spinner } from '../../../loadingIndicators/Loading'

export default class SearchResults extends React.Component {
  componentWillMount () {
    this.props.getResults()
  }

  render () {
    return this.props.fetching
      ? <Spinner/>
      : this.props.results
  }
}
