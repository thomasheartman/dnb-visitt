/*
 * Created by Thomas Hartmann
 * The home page
 */

import React from 'react'
import { Link } from 'react-router-dom'
import AboutBox from './components/aboutBox/AboutBox'
import Steps from './components/visitSteps/VisitSteps'
import MenuItem from 'material-ui/MenuItem'
import SelectField from 'material-ui/SelectField'
import RecentProperties from './components/recentProperties/RecentProperties.map'
import { showAll } from './dropdownConstants'
import { boligvelger } from '../../routing/Routes'
import styles from './homeStyles'

export default ({ selectedCounty, allCounties, handleChange = f => f, handleSubmit = f => f }) => (
  <main className='frontpage full-width'>
    <section className='home-search row middle-xs '>
      <AboutBox />
      <div className='col-xs-offset-1 col-sm-offset-2' />
      <div className='select-fylke-container col-xs-12 col-sm-6'>
        <div className='title-container row center-xs'>
          <h1 className='title-heading'>Hvor ønsker du å bo?</h1>
        </div>
        <div className='dropdown row middle-xs center-xs' >
          <SelectField name='dropDownCounty' className='select-county'
            onChange={(event, index, value) => handleChange(value)}
            hintText={selectedCounty || 'Velg et fylke ...'}
            style={styles.dropdownStyle}
            floatingLabelText={selectedCounty || 'Velg et fylke ...'}
            fullWidth
            listStyle={styles.listStyle}
            labelStyle={styles.inactiveBackground}
            floatingLabelStyle={styles.centerLabel}
            >
            <MenuItem value={showAll} primaryText={showAll} />
            {allCounties.map((county) =>
              <MenuItem value={county} key={county} primaryText={county} />
              )}
          </SelectField>
          <Link to={boligvelger} onClick={() => handleSubmit(selectedCounty)} className='select-county-search-button'>
            <input type='submit' value='Søk' />
          </Link>
        </div>
      </div>
    </section>
    <Steps />
    <div className='recentProperties row center-xs between-xs middle-xs'>
      <RecentProperties />
    </div>

  </main >
)
