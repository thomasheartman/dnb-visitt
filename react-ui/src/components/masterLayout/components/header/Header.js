/*
 * Created by Thomas on 16/04/2017.
 * The app's main header
 */

import React from 'react'
import { Link } from 'react-router-dom'
import logo from './media/dnb-visitt.svg'

export default () => (
  <div className='container-header'>
    <header className='row middle-xs '>
      <Link to='/' className='col-xs full-width start-xs'>
        <img className='logo'
          src={logo} alt='DNB Visitt logo' />
      </Link>
      <nav className='col-xs-12 col-sm-8 start-xs end-md'>
        <ul className='row center-xs middle-xs start-xs end-md'>
          <li>
            <Link to='/boligvelger'>Boligsøk</Link>
          </li>
          <li>
            <Link to='/om-visitt'>Om Visitt</Link>
          </li>
          <li>
            <Link to='/hjelp-og-kontakt'>Hjelp og Kontakt</Link>
          </li>
        </ul >
      </nav >
    </header >
  </div >
)
