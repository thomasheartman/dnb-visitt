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
import { visittLogo } from '../../media/logos'

export default () => (
  <div>
    <main className='about-main'>   
      <div className='row middle-xs page-sub-heading'>
          <h2 className='col-xs'>Om Visitt</h2>
          <img src={visittLogo} viewBox='0 0 500 500' role='presentation' />
      </div>
      <Banner />
      <Hva />
      <Se />
      <Tryggere />
      <div className="row center-xs">
        <Link to="/boligvelger" className="orange-button">Gå til bolig velger</Link>
      </div>
      <Hvor />
      <div className="row center-xs">
        <Link to="/hjelp-og-kontakt" className="orange-button">Finn din lokale Visitt-filial</Link>
      </div>

    </main>
  </div >
)
