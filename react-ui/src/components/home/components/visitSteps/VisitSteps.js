/*
 * Created by Thomas Hartmann
 * A component detailing the steps necessary in the process
 */

import React from 'react'
import { Link } from 'react-router-dom'
import { omVisitt } from '../../../../routing/Routes'

// icons
import { velg, vr, hjem } from '../../../../media/icons'

export default () => (
  <div>
    <div className='row middle-xs visit-steps-container'>
      <div className='col-xs start-xs'>
        <h3>Slik fungerer Visitt</h3>
      </div>
      <div className='col-xs end-xs'>
        <Link to={omVisitt}>Mer om Visitt</Link>
      </div>
    </div >
    <div className='row center-xs frontpage-buttons'>
      <div className='col-xs-4'>
        <img className='visitt-icon' src={velg} alt='Sok bolig' />
        <div className='frontpage-button'>Finn din nye bolig</div>
      </div>
      <div className='col-xs-4'>
        <img className='visitt-icon' src={vr} alt='Bestill' />
        <div className='frontpage-button'>Bestill virtuell visning</div>
      </div>
      <div className='col-xs-4'>
        <img className='visitt-icon' src={hjem} alt='Oplev' />
        <div className='frontpage-button'>Bli kjent med boligen før den er bygget</div>
      </div>
    </div>
  </div>
)
