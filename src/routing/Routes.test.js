/* global it */

/*
 * Created by Thomas on 16/04/2017.
 * Test file for routes
 */

import React from 'react'
import ReactDOM from 'react-dom'
import Routes from './Routes'

it('should render without crashing', () => {
 // shallow(<Routes/>)
  const div = document.createElement('div')
  ReactDOM.render(<Routes />, div)
})
