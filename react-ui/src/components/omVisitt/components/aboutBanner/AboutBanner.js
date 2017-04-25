/*
 * Created by Thomas Hartmann
 * The banner at the top of the about page
 */

import React from 'react'
import image from './media/omvisitt.jpg'

// icons
import { vr, leilighet, hjem, omradeVelg } from '../../../../media/icons'

export default () => (
  <div className='about-banner-container'>

    <div className='row img-container'>
      <img src={image} alt='Om Visitt banner' />
    </div>

    <div className='row center-xs aboutpage-buttons'>

      <div className='col-xs-3'>
        <img className='visitt-icon' src={vr} alt='Hva er Visitt?' />
        <a href='#who' className='frontpage-button'>Hva er Visitt?</a>
      </div>

      <div className='col-xs-3'>
        <img className='visitt-icon' src={leilighet} alt='Se i VR' />
        <a href='#what' className='frontpage-button'>Se bolig i VR</a>
      </div>

      <div className='col-xs-3'>
        <img className='visitt-icon' src={hjem} alt='Tilpass bolig' />
        <a href='#why' className='frontpage-button'>Tilpass bolig</a>
      </div>

      <div className='col-xs-3'>
        <img className='visitt-icon' src={omradeVelg} alt='Visitt-filialer' />
        <a href='#where' className='frontpage-button'>Hvor finner jeg Visitt?</a>
      </div>

    </div>
  </div>
)
