/*
 * Created by Thomas Hartmann
 * The website's property filtering tool
 */
import React from 'react'
import Dropdown from 'react-toolbox/lib/dropdown'

export default ({ counties, selectedCounty, bedroomValues, handleChange = f => f, clearFilter = f => f, performSearch = f => f }) => (
  <div className='col-xs-4 housing-filter'>
    <form onSubmit={(event) => event.preventDefault()}>
      <ul id='regions-container'>
        <div id='showMore'>Vis mer</div>
        <Dropdown
          onChange={(value) => handleChange(value)}
          source={counties}
          value={selectedCounty}
        />
      </ul>

      <legend>Pris</legend>
      <ul>
        <li className='filter-item'>
          <input type='number' placeholder='Fra kr' onChange={(value) => handleChange(value)} />
          <input type='number' placeholder='Til kr' onChange={(value) => handleChange(value)} />
        </li>
      </ul>

      <legend>Areal</legend>
      <ul>
        <li className='filter-item'>
          <input type='number' placeholder='Fra kvm' onChange={(value) => handleChange(value)} />
          <input type='number' placeholder='Til kvm' onChange={(value) => handleChange(value)} />
        </li>
      </ul>

      <legend>Antall soverom</legend>
      <ul>
        {bedroomValues.map((value) =>
          <li className='filter-item' key={value}>
            <input type='checkbox' value={value} onChange={(value) => handleChange(value)} />
            <label htmlFor={value}>{value}</label>
          </li>
        )}
      </ul>

      <input type='reset' value='Tilbakestill' onClick={() => clearFilter()} />
      <input type='submit' value='Søk' className='submit' onClick={() => performSearch()} />

    </form>
  </div>
)
