/*
 * Created by Thomas Hartmann
 * The home page
 */

import React from 'react'
import { Link } from 'react-router-dom'
// import Dropdown from 'react-toolbox/lib/dropdown'
import AboutBox from './components/aboutBox/AboutBox'
import Steps from './components/visitSteps/VisitSteps'
/*
const testCounties = [
  { value: 'Nord-Trøndelag', label: 'Nord-Trøndelag' },
  { value: 'Østfold', label: 'Møre og Romsdal' },
  { value: 'Østfold', label: 'Østfold' }
]
*/

// TODO: fix this: Dropdown is messing with styling
/* <Dropdown
  onChange={(value) => handleChange(value)}
  source={allCounties}
  value={selectedCounty}
/> */

export default ({ selectedCounty, allCounties, handleChange = f => f }) => (
  <main className='frontpage full-width'>
    <AboutBox />
    <section className='home-search center-xs middle-xs'>
      <div className='row'>
        <div className='col-xs-12 center-xs'>
          <h1 className='title-heading'>Hvor ønsker du å bo?</h1>
          <div className='dropdown row center-xs' />
          <Link to='/boligvelger'>
            <input type='submit' value='Søk' />
          </Link>
        </div>
      </div>
    </section>
    <Steps />
  </main>
)
