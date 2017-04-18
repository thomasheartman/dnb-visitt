/*
 * Created by Thomas Hartmann
 * The website's property filtering tool
 */
import React from 'react'
import fields from './inputFields'
import { Collapse } from 'react-collapse'
import { presets } from 'react-motion'

export default ({ showAll, initialCounties, hiddenCounties, bedroomValues, selectedCounties, minPrice, maxPrice, minSize, maxSize, filter,
  handleToggle = f => f, handleChange = f => f, handleReset = f => f, performSearch = f => f }) => (
    <div className='col-xs-4 housing-filter'>
      <ul id='regions-container'>
        <div id='showMore' onClick={() => handleToggle(!showAll)}>Vis {showAll ? 'mindre' : 'mer'}</div>

        {initialCounties.map((county) =>
          <li className='filter-item' key={county}>
            <input type='checkbox' className='regionItem' value={county}
              checked={selectedCounties.includes(county)}
              onChange={() => handleChange(selectedCounties.includes(county) ? fields.REMOVE_COUNTY : fields.ADD_COUNTY, county)}
            />
            <label htmlFor='location'>{county}</label>
          </li>
        )}
        <Collapse isOpened={showAll}>
          <div>
        {hiddenCounties.map((county) =>
          <li className='filter-item' key={county}>
            <input type='checkbox' className='regionItem' value={county}
              checked={selectedCounties.includes(county)}
              onChange={() => handleChange(selectedCounties.includes(county) ? fields.REMOVE_COUNTY : fields.ADD_COUNTY, county)}
            />
            <label htmlFor='location'>{county}</label>
          </li>
        )}
        </div>
        </Collapse>
      </ul>

      <legend>Pris</legend>
      <ul>
        <li className='filter-item'>
          <input type='number' placeholder='Fra kr' value={minPrice > 0 ? minPrice : ''} onChange={(event) => handleChange(fields.MIN_PRICE, event.target.value)} />
          <input type='number' placeholder='Til kr' value={maxPrice > 0 ? maxPrice : ''} onChange={(event) => handleChange(fields.MAX_PRICE, event.target.value)} />
        </li>
      </ul>

      <legend>Areal</legend>
      <ul>
        <li className='filter-item'>
          <input type='number' placeholder='Fra kvm' value={minSize > 0 ? minSize : ''} onChange={(event) => handleChange(fields.MIN_SIZE, event.target.value)} />
          <input type='number' placeholder='Til kvm' value={maxSize > 0 ? maxSize : ''} onChange={(event) => handleChange(fields.MAX_SIZE, event.target.value)} />
        </li>
      </ul>

      <legend>Antall soverom</legend>
      <ul>
        {bedroomValues.map((entry) =>
          <li className='filter-item' key={entry.value}>
            <input type='checkbox' value={entry.value} checked={entry.checked} onChange={() => handleChange(entry.value, !entry.checked)} />
            <label htmlFor={entry.value}>{entry.value}</label>
          </li>
        )}
      </ul>

      <input type='reset' value='Tilbakestill' onClick={() => handleReset()} />
      <input type='submit' value='Søk' className='submit' onClick={() => performSearch(filter)} />
    </div>
  )
