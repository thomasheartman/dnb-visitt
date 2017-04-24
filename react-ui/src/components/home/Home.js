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

// This can be used to override values in the theme
const styles = {
  dropdownStyle: {
    width: '32rem',
    height: '4rem',
    fontSize: '1.5rem',
    backgroundColor: '#FFF',
    color: '#404040'

  },
  color: {
    color: '#404040'
  },

  inactiveBackground: {
    color: '#e0e0e0'
  },

  centerLabel: {
    position: 'relative',
    top: '1.25rem',
    right: '7rem'
  },

  listStyle: {
    color: '#e0e0e0'
  }
}

export default ({ selectedCounty, allCounties, handleChange = f => f, handleSubmit = f => f }) => (
  <main className='frontpage full-width'>
    <section className='home-search row middle-xs '>
      <AboutBox />
      <div className="col-xs-offset-1 col-sm-offset-2"></div>
      <div className='select-fylke-container col-xs-12 col-sm-6'>
          <div className="title-container row center-xs">
            <h1 className='title-heading'>Hvor ønsker du å bo?</h1>
          </div>
          <div className='dropdown row middle-xs center-xs' >
            <SelectField name='dropDownCounty' className="select-county"
              onChange={(event, index, value) => handleChange(value)}
              hintText={selectedCounty || 'Velg et fylke ...'}
              style={styles.dropdownStyle}
              floatingLabelText={selectedCounty || 'Velg et fylke ...'}
              fullWidth={true}
              listStyle={styles.listStyle}
              labelStyle={styles.inactiveBackground}
              floatingLabelStyle={styles.centerLabel}
            >
              <MenuItem value={showAll} primaryText={showAll} />
              {allCounties.map((county) =>
                <MenuItem value={county} key={county} primaryText={county} />
              )}
            </SelectField>
            <Link to='/boligvelger' onClick={() => handleSubmit(selectedCounty)} className="select-county-search-button">
              <input type='submit' value='Søk' />
            </Link>
          </div>
        </div>
    </section>
    <Steps />
    <div className="recentProperties row center-xs between-xs middle-xs">
        <RecentProperties />
    </div>
    
  </main >
)
