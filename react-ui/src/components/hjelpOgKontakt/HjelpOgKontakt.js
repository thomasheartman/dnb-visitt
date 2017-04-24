/*
 * Created by Thomas Hartmann
 * Help and contact page
 */
import React from 'react'
import Form from './components/form/ContactFormMap'
import Map from './components/map/Map'

export default () => (
  <div>
    <div className='row heading'>
      <h1 className='title'>Kontakt Oss</h1>
    </div>
    <main className='row contact'>
      <Form />
      <Map />
    </main>
  </div>
)
