/*
 * Created by Thomas Hartmann
 * A shell for inputting information, to be used by the other components in the folder
 */

import React from 'react'

export default ({ link, heading, icon, iconAltText, body }) => (
  <div>
    < a name={link} />
    <div className='row about-heading'>
      <div className='col-xs start-xs'>
        <h3>{heading}</h3>
      </div>
      <div className='col-xs-2 end-xs'>
        <img className='icon end-xs' src={icon} alt={iconAltText} />
      </div>
    </div>
    <div className='row about-description'>
      <div className='col-xs'>
        {body}
      </div>
    </div>
  </div>
)
