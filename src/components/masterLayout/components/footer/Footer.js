/*
 * Created by Thomas on 16/04/2017.
 * The app's footer
 */

import React from 'react'
import icons from './media/social-media-bar.png'

export default () => (
  <footer>
    <div className='row footer-box footer-heading'>
      <div className='col-xs-12'>
        <h2>TIL SALGS</h2>
      </div>
    </div>
    <div className='row footer-box'>
      <div className='col-xs-6'>
        <p>Nybygg i Oslo</p>
        <p>Nybygg i Bergen</p>
        <p>Nybygg i Tromsø</p>
      </div>
      <div className='col-xs-6'>
        <p>Selge</p>
        <p>Nybygg</p>
      </div>
    </div>
    <div className='row footer-box footer-heading'>
      <div className='col-xs-12'>
        <h2>HELE NORGES EIENDOMSMEGLER</h2>
      </div>
    </div>
    <div className='row footer-box'>
      <div className='col-xs-6'>
        <p>Kontakt Oss:</p>
        <p>Adresse: Bankveien 0256 Oslo</p>
        <p>Telefon: 90909090</p>
      </div>
      <div className='col-xs-6'>
        <p>Alt om bolig</p>
        <p>Kjøpsbetingelser</p>
      </div>
    </div>
    <div className='row footer-box'>
      <div className='col-xs-6'>
        <img className='social-media-icons' src={icons} alt='social media icons' />
      </div>
    </div>
  </footer>
)
