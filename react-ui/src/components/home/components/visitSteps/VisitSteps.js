/*
 * Created by Thomas Hartmann
 * A component detailing the steps necessary in the process
 */

import React from 'react'
import { Link } from 'react-router-dom'
import { omVisitt } from '../../../../routing/Routes'

// icons
import { kontrakt, velg, vr, sok, eie } from '../../../../media/icons'

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
      <div className='col-xs-2'>
        <img className='visitt-icon' src={sok} alt='Finn bolig' />
        <div className='frontpage-button'>Finn bolig</div>
      </div>
      <div className='col-xs-2'>
        <img className='visitt-icon' src={velg} alt='Velg bolig' />
        <div className='frontpage-button'>Velg bolig</div>
      </div>
      <div className='col-xs-4'>
        <img className='visitt-icon' src={vr} alt='Se bolig i VR' />
        <div className='frontpage-button frontpage-button-big'>Se bolig i VR</div>
      </div>
      <div className='col-xs-2'>
        <img className='visitt-icon' src={kontrakt} alt='Bolig kontrakt' />
        <div className='frontpage-button'>Kontrakt</div>
      </div>
      <div className='col-xs-2'>
        <img className='visitt-icon' src={eie} alt='Eie bolig' />
        <div className='frontpage-button'>Eie ny bolig</div>
      </div>
    </div>
  </div>
)
