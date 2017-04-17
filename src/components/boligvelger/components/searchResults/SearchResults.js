/*
 * Created by Thomas Hartmann
 * The section of the page that holds search results
 */
import React from 'react'
import _ from 'lodash'

export default ({ results, getResults = f => f }) => (
  <div>
    {getResults()}
    {results}
  </div>
)
