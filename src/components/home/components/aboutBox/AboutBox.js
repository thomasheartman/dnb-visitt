/*
 * Created by Thomas Hartmann
 * A box to be displayed on the home page, containing a summary
 * of what the serice is and offers
 */

import React from 'react'

import hjem from '../../../../media/icons/bolig-hjem.svg'
import velg from '../../../../media/icons/bolig-velg.svg'
import vr from '../../../../media/icons/bolig-vr.svg'

export default () => (
  <div className='about-visit row middle-xs'>
    <div className='center-xs middle-xs text-box'>
      <div className='row center-xs'>
        <img className='icon col-xs-12' src={hjem} alt='Se bolig i VR' />
        <p>Opplev din fremtidige bolig før den i det hele tatt er bygget</p>
      </div>
      <div className='row center-xs'>
        <img className='icon col-xs-12' src={vr} alt='Velg bolig' />
        <p>Visitt lar deg gå på visning i nye boligprosjekter over hele landet</p>
      </div>
      <div className='row center-xs'>
        <img className='icon col-xs-12' src={velg} alt='Velg bolig' />
        <p>Føl på størrelsen og opplev nybygg lenge før det er bygget</p>
      </div>
    </div>
  </div>
)
