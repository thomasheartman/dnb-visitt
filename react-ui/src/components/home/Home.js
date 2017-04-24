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

// TODO: Create a line break between dropdown and button

// This can be used to override values in the theme
const styles = {
  customWidth: {
    width: 500,
    backgroundColor: '#FFF'

  },
  color: {
    color: '#FFF' // DNB-orange. As an example
  }
}

export default ({ selectedCounty, allCounties, handleChange = f => f, handleSubmit = f => f }) => (
  <main className='frontpage full-width'>
    <AboutBox />
    <section className='home-search center-xs middle-xs '>
      <div className='row'>
        <div className='col-xs-12 center-xs'>
          <h1 className='title-heading'>Hvor ønsker du å bo?</h1>
          <div className='dropdown row center-xs middle-xs' >
            <div className="dropDown-background col-xs">
              <SelectField name='dropDownCounty' className="selectField"
                onChange={(event, index, value) => handleChange(value)}
                hintText={selectedCounty || 'Velg et fylke'}
                style={styles.customWidth}
                floatingLabelText={selectedCounty || 'Velg et fylke'}
              floatingLabelStyle={styles.color}
              menuStyle={styles.backgroundColor}
              >
                <MenuItem value={null} primaryText='Vis alle' />
              {allCounties.map((county) =>
                <MenuItem value={county} key={county} primaryText={county} />
              )}
              </SelectField>
          </div>
          <br />
          <Link to='/boligvelger' onClick={() => handleSubmit(selectedCounty)} className="col-xs">
            <input type='submit' value='Søk' />
          </Link>
        </div>
      </div>
      </div>
    </section>
  <Steps />
  </main >
)
