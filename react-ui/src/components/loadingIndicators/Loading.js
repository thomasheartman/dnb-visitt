/*
 * Created by Thomas Hartmann
 * A material-ui loader for loading :)
 */

import React from 'react'
import LinearProgress from 'material-ui/LinearProgress'
import CircularProgress from 'material-ui/CircularProgress'

export const LoadingBar = () => (<LinearProgress />)

export const Spinner = () => (
  <div className='spinner-container'>
    <CircularProgress size={300} />
  </div>
)
