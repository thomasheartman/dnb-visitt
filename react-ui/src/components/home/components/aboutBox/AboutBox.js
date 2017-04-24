/*
 * Created by Thomas Hartmann
 * A box to be displayed on the home page, containing a summary
 * of what the serice is and offers
 */

import React from 'react'

import { hjem, velg, vr } from '../../../../media/icons'

export default () => (
  <div className='col-xs-2 about-visit'>
    <div className='row center-xs between-xs middle-xs text-box'>
      <div className='row'>
        <img className='visitt-icon col-xs-12' src={hjem} alt='Se bolig i VR' />
        <p>Opplev din fremtidige bolig før den i det hele tatt er bygget</p>
      </div>
      <div className='row'>
        <img className='visitt-icon col-xs-12' src={vr} alt='Velg bolig' />
        <p>Visitt lar deg gå på visning i nye boligprosjekter over hele landet</p>
      </div>
      <div className='row'>
        <img className='visitt-icon col-xs-12' src={velg} alt='Velg bolig' />
        <p>Føl på størrelsen og opplev nybygg lenge før det er bygget</p>
      </div>
    </div>
  </div>
)
