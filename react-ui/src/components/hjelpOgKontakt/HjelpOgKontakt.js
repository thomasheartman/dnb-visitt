/*
 * Created by Thomas Hartmann
 * Help and contact page
 */
import React from 'react'
import Form from './components/form/ContactFormMap'
import Map from './components/map/Map'
import { Link } from 'react-router-dom'

export default () => (
  <div>
{/*
    <div className='breadcrumbs-wrapper'>
      <nav className='breadcrumbs'>
        <Link to='/'>Hjem</Link>
        <span>></span>
        <Link to='/hjelp-og-kontakt'>Hjelp og Kontakt</Link>
      </nav>
    </div>*/}
    <div className='row heading'>
      <h1 className='title'>Kontakt Oss</h1>
    </div>
    <main className='row contact'>
      <Form />
      <Map />
    </main>
  </div>
)
