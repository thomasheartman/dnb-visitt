/*
 * Created by Thomas Hartmann
 * The home page
 */

import React from 'react'
import { Link } from 'react-router-dom'
import Dropdown from 'react-toolbox/lib/dropdown'
import AboutBox from './components/aboutBox/AboutBox'
import Steps from './components/visitSteps/VisitSteps'

export default ({ selectedCounty, allCounties, handleChange = f => f }) => (
  <main className='frontpage full-width'>
    <AboutBox />
    <section className='home-search center-xs middle-xs'>
      <div className='row'>
        <div className='col-xs-12 center-xs'>
          <h1 className='title-heading'>Hvor ønsker du å bo?</h1>
          <div className='dropdown row center-xs' />
          <Link to='/boligvelger'>
            <Dropdown
              onChange={(value) => handleChange(value)}
              source={allCounties}
              value={selectedCounty}
            />
            <input type='submit' value='Søk' />
          </Link>
        </div>
      </div>
    </section>
    <Steps />
  </main>
)
