/*
 * Created by Thomas Hartmann
 * A simple 404 page for non-existing routes.
 */

import React from 'react'

export default () => (
  <div>
    <div className='row heading'>
      <h1 className='title'>404: siden finnes ikke.</h1>
    </div>
    <div className='col-xs'>
      <p>Har du skrevet feil? :/</p>
    </div>
  </div>
)
