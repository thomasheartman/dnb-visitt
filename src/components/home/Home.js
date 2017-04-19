/*
 * Created by Thomas Hartmann
 * The home page
 */

import React from 'react'
import { Link } from 'react-router-dom'
import AboutBox from './components/aboutBox/AboutBox'
import Steps from './components/visitSteps/VisitSteps'

export default ({ selectedCounties, allCounties, handleChange = f => f }) => (
  <main className='frontpage full-width'>
    <AboutBox />
    <section className='home-search center-xs middle-xs'>
      <div className='row'>
        <div className='col-xs-12 center-xs'>
          <h1 className='title-heading'>Hvor ønsker du å bo?</h1>
          <div className='dropdown row center-xs'>
            <select value={selectedCounties} onChange={(event) => handleChange(event.target.value)}>
				<option value="" disabled selected>Velg fylke</option>
              {allCounties.map((county) =>
                <option value={county} key={county}>{county}</option>
					)}
            </select><br />
            <Link to='/boligvelger'>
              <input type='submit' value='Søk' />
            </Link>
          </div>
        </div>
      </div>
    </section>
    <Steps />
  </main>
)
