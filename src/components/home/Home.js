/*
 * Created by Thomas Hartmann
 * The home page
 */

import React from 'react'
import { Link } from 'react-router-dom'
import AboutBox from './components/aboutBox/AboutBox'
import Steps from './components/visitSteps/VisitSteps'
import {Field} from 'redux-form'
import MenuItem from 'material-ui/MenuItem'
import SelectField from 'material-ui/SelectField'

export default ({ selectedCounty, allCounties, handleChange = f => f, handleSubmit = f => f }) => (
  <main className='frontpage full-width'>
    <AboutBox />
    <section className='home-search center-xs middle-xs'>
      <div className='row'>
        <div className='col-xs-12 center-xs'>
          <h1 className='title-heading'>Hvor ønsker du å bo?</h1>
          <div className='dropdown row center-xs' >
            <SelectField name='dropDownCounty' onChange={(event) => handleChange(event.target.value)} hintText='Velg et fylke'>
            <MenuItem value='' primaryText='Vis alle'/>
            </SelectField>
            <select onChange={(event) => handleChange(event.target.value)}>
              <option value='' >VIS ALLE</option>
              {allCounties.map((county) =>
                <option value={county} key={county}>{county}</option>
              )}
            </select><br />
            <Link to='/boligvelger'onClick={() => handleSubmit(selectedCounty)}>
              <input type='submit' value='Søk' />
            </Link></div>
        </div>
      </div>
    </section>
    <Steps />
  </main>
)
