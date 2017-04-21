/*
 * Created by Thomas Hartmann
 * A material-ui loader for loading :)
 */

import React from 'react'
import LinearProgress from 'material-ui/LinearProgress'
import CircularProgress from 'material-ui/CircularProgress'

// TODO: style this

export const LoadingBar = () => (<LinearProgress />)

export const Spinner = () => (<CircularProgress size={300}/>)