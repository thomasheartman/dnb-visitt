/*
 * Created by Thomas Hartmann
 * The section of the page that holds search results
 */
import React from 'react'

export default class SearchResults extends React.Component {
  componentWillMount() {
    this.props.getResults()
  }

  render() {
    console.log(this.props.fetching)
return this.props.fetching
      ? <h1>Laster innhold</h1> //TODO: put a loader here
      : this.props.results
  }
}

