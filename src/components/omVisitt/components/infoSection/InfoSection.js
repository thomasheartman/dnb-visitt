/*
 * Created by Thomas Hartmann
 * A shell for inputting information, to be used by the other components in the folder
 */

import React from 'react'

export default ({ Link, Header, Icon, Body }) => (
  <div>
    {Link}
    <div className='row about-heading'>
      <div className='col-xs start-xs'>
        {Header}
      </div>
      <div className='col-xs-2 end-xs'>
        {Icon}
      </div>
    </div>
    <div className='row about-description'>
      <div className='col-xs'>
        {Body}
      </div>
    </div>
  </div>
)
