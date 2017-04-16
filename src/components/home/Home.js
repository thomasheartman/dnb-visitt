/*
 * Created by Thomas Hartmann
 * The home page
 */

import React from 'react'
import { Dropdown } from 'react-toolbox/lib/dropdown'
import AboutBox from './components/aboutBox/AboutBox'
import Steps from './components/visitSteps/VisitSteps'

const testCounties = [
    { value: 'Nord-Trøndelag', label: 'Nord-Trøndelag'},
    { value: 'Østfold', label: 'Møre og Romsdal'},
    { value: 'Østfold', label: 'Østfold'}
]

export default ({ selectedCounty, allCounties, handleChange = f => f }) => (
  <main className='frontpage full-width'>
    <AboutBox />
    <section className='home-search center-xs middle-xs'>
      <div className='row'>
        <div className='col-xs-12 center-xs'>
          <h1 className='title-heading'>Hvor ønsker du å bo?</h1>
          <div className='dropdown row center-xs' />
          <Dropdown
            onChange={(value) => handleChange(value)}
            source={testCounties}
            value={selectedCounty}
                    />
        </div>
      </div>
    </section>
    <Steps />
  </main>
)
