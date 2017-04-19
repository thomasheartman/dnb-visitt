/*
 * Created by Thomas Hartmann
 * The home page
 */

import React from 'react'
import { Link } from 'react-router-dom'
import AboutBox from './components/aboutBox/AboutBox'
import Steps from './components/visitSteps/VisitSteps'

export default ({ selectedCounty, allCounties, handleChange = f => f, handleSubmit = f => f }) => (
  <main className='frontpage full-width'>
    <AboutBox />
    <section className='home-search center-xs middle-xs'>
      <div className='row'>
        <div className='col-xs-12 center-xs'>
          <h1 className='title-heading'>Hvor ønsker du å bo?</h1>
          <div className='dropdown row center-xs' />
          <select onChange={(event) => handleChange(event.target.value)}>
            <option value='' >VIS ALLE</option>
            {allCounties.map((county) =>
              <option value={county} key={county}>{county}</option>
            )}
          </select><br />
          <Link to='/boligvelger' onClick={() => handleSubmit(selectedCounty)}>
            <input type='submit' value='Søk' />
          </Link>
        </div>
      </div>
    </section>
    <Steps />
  </main>
)
