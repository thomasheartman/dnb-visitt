/*
 * Created by Thomas Hartmann
 * A simple about page
 */

import React from 'react'
import { Link } from 'react-router-dom'
import Banner from './components/aboutBanner/AboutBanner'
import Hva from './components/infoSection/HvaErVisitt'
import Hvor from './components/infoSection/HvorFinnerJegVisitt'
import Se from './components/infoSection/SeBoligIVr'
import Tryggere from './components/infoSection/TryggereKjop'
// import { visittLogo } from '../../media/logos'

export default () => (
  <div>
    <div className='row heading'>
      <h1 className='title'>Om Visitt</h1>
    </div>
    <main className='about-main'>

      <Banner />
      <Hva />
      <Se />
      <Tryggere />
      <div className='row center-xs'>
        <Link to='/boligvelger' className='orange-button'>Gå til bolig velger</Link>
      </div>
      <Hvor />
      <div className='row center-xs'>
        <Link to='/hjelp-og-kontakt' className='orange-button'>Finn din lokale Visitt-filial</Link>
      </div>

    </main>
  </div >
)
