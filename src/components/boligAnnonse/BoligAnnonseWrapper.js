/*
 * Created by Thomas Hartmann
 * A wrapper component for boligannonser. Helpful
 * when we don't know whether we have the required data
 * or not
 */

import React from 'react'
import Annonse from './components/BoligAnnonse.map'
import { Spinner } from '../loadingIndicators/Loading'

// making this a stateful component so that we can load data on mount.
class AnnonseWrapper extends React.Component {
  componentDidMount () {
    if (parseInt(this.props.match.params.id) !== parseInt(this.props.id)) {
      this.props.fetchProperty(this.props.match.params.id)
    }
  }

  render () {
    return this.props.fetching
      ? <Spinner />
      : < Annonse />
  }
}

export default AnnonseWrapper
