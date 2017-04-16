/*
 * Created by Thomas on 16/04/2017.
 * The app's main header
 */

import React from 'react'
import { Link } from 'react-router-dom'
import logo from './media/dnb-standard.svg'

export default () => (
  <div className='container-header'>
    <header className='row middle-xs '>
      <Link to='/' className='col-xs-8 col-md-4 col-lg-2 full-width start-xs'>
        <img className='logo'
          src={logo} alt='DNB Visitt logo' />
      </Link>
      <nav className='col-sm-8 col-md-8 col-lg end-xs'>
        <ul className='row center-xs middle-xs end-xs'>
          <li>
            <Link to='/boligvelger'>BOLIGSØK</Link>
          </li>
          <li>
            <Link to='/om-visitt'>OM VISITT</Link>
          </li>
          <li>
            <Link to='/hjelp'>HJELP OG KONTAKT</Link>
          </li>
        </ul >
      </nav >
    </header >
  </div >
)
