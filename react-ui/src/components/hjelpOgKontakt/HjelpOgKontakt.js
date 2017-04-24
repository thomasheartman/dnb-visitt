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

    <div className='breadcrumbs-wrapper'>
      <nav className='breadcrumbs'>
        <Link to='/'>Hjem</Link>
        <span>></span>
        <Link to='/hjelp-og-kontakt'>Hjelp og Kontakt</Link>
      </nav>
    </div>

    <main className='contact'>
      <div className='row heading text-box'>
        <h2 className='heading-title'>Kontakt Oss</h2>
        <p className='heading-description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aut nulla, mollitia. Odit magni ex culpa corporis laboriosam, vel eius minima inventore dignissimos quisquam ducimus, reiciendis. In unde culpa error?</p>
      </div>

      <Form />

      <Map />
    </main>
  </div>
)
