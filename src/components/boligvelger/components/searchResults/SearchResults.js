/*
 * Created by Thomas Hartmann
 * The section of the page that holds search results
 */
import React from 'react'
import ResultItem from './components/resultItem/ResultItem'

export default ({ results }) => (
  <div>
    {results.map((result, key) => <ResultItem {...result} key={key} />)}
  </div>
)
