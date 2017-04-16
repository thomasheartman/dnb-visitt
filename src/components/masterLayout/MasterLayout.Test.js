/* global it */
/*
 * Created by Thomas on 16/04/2017.
 * Test file for master layout
 */

import React from 'react'
import ReactDOM from 'react-dom'
import MasterLayout from './MasterLayout'

it('should render without crashing', function () {
  const div = document.createElement('div')
  ReactDOM.render(<MasterLayout />, div)
})
