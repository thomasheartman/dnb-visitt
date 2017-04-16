/*
 * Created by Thomas Hartmann
 * A simple about page
 */

import React from 'react'
import Banner from './components/aboutBanner/AboutBanner'
import Hva from './components/infoSection/HvaErVisitt'
import Hvor from './components/infoSection/HvorFinnerJegVisitt'
import Se from './components/infoSection/SeBoligIVr'
import Tryggere from './components/infoSection/TryggereKjop'
import Map from './components/map/Map'

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
      <Hvor />
      <Map />
    </main>
  </div >
)
