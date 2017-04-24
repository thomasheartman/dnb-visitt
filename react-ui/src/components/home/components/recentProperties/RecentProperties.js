/*
 * Created by Thomas Hartmann
 * A component displaying the top two most recent properties
 */
import React from 'react'
import { Spinner } from '../../../loadingIndicators/Loading'

export default class SearchResults extends React.Component {
  componentWillMount () {
    this.props.getResults()
  }

  render () {
    return this.props.fetching
      ? <Spinner />
      : this.props.results
  }
}