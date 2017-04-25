/*
 * Created by Thomas on 16/04/2017.
 * The app's main header
 */

import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from './media/dnb-visitt.svg'
import { home, boligvelger, omVisitt, hjelpOgKontakt } from '../../../../routing/Routes'

const activeClassName ='selected'

export default () => (
    <div className='container-header'>
      <header className='row middle-xs '>
        <Link to={home} className='col-xs full-width start-xs'>
          <img className='logo'
            src={logo} alt='DNB Visitt logo' />
        </Link>
        <nav className='col-xs-12 col-sm-8 start-xs end-md'>
          <ul className='row center-xs middle-xs start-xs end-md'>
            <li>
              <NavLink activeClassName={activeClassName} to={boligvelger}>Boligsøk</NavLink>
            </li>
            <li>
            <NavLink activeClassName={activeClassName} to={omVisitt}>Om Visitt</NavLink>
            </li>
            <li>
              <NavLink activeClassName={activeClassName} to={hjelpOgKontakt}>Hjelp og Kontakt</NavLink>
            </li>
          </ul >
        </nav >
      </header >
    </div >
)
