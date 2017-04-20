/*
 * Created by Thomas Hartmann
 * A wrapper component for boligannonser. Helpful
 * when we don't know whether we have the required data
 * or not
 */

import React from 'react'
import Annonse from './components/BoligAnnonse.map'
import { getProperty } from '../../redux/reducers/currentProperty/currentPropertyActions'

// making this a stateful component so that we can load data on mount.
class AnnonseWrapper extends React.Component {

  componentDidMount () {
    this.props.dispatch(getProperty(this.props.match.params.id))
  }

  render = () => {
    return this.props.fetching
      ? <h1>Laster innhold</h1> //TODO: put a loader here
      : < Annonse />

  }
}

export default AnnonseWrapper;


/*

    {
      currentContent.Id === parseInt(match.params.id)
      ? content
      : fetching
        ? loading
        : fetchContent(parseInt(match.params.id))
    }

*/