/*
 * Created by Thomas Hartmann
 * The website's property filtering tool
 */
import React from 'react'
import fields from './inputFields'
import { VelocityTransitionGroup } from 'velocity-react'

export default ({ showAll, initialCounties, hiddenCounties, allBedroomValues, selectedBedroomValues, selectedCounties, minPrice, maxPrice, minSize, maxSize, filter,
  handleToggle = f => f, handleChange = f => f, handleReset = f => f, performSearch = f => f }) => (
    <div className='col-xs-4 housing-filter'>
      <ul id='regions-container'>
        <div id='showMore' onClick={() => handleToggle(!showAll)}>Vis {showAll ? 'mindre' : 'mer'}</div>

        {initialCounties.map((county) =>
          <li className='filter-item' key={county}>
            <input type='checkbox' className='regionItem' value={county}
              checked={selectedCounties.includes(county)}
              onChange={() => {
                handleChange(selectedCounties.includes(county) ? fields.REMOVE_COUNTY : fields.ADD_COUNTY, county)
                performSearch()
              }} />
            <label htmlFor='location'>{county}</label>
          </li>
        )}
        <VelocityTransitionGroup component='div' enter='slideDown' leave='slideUp'>
          {showAll
            ? hiddenCounties.map((county) =>
              <li className='filter-item' key={county}>
                <input type='checkbox' className='regionItem' value={county}
                  checked={selectedCounties.includes(county)}
                  onChange={() => {
                    handleChange(selectedCounties.includes(county) ? fields.REMOVE_COUNTY : fields.ADD_COUNTY, county)
                    performSearch()
                  }}
                />
                <label htmlFor='location'>{county}</label>
              </li>
            )
            : null}
        </VelocityTransitionGroup>

      </ul>

      <legend>Pris</legend>
      <ul>
        <li className='filter-item'>
          <input type='number' placeholder='Fra kr'
            value={minPrice > 0 ? minPrice : ''}
            onChange={(event) => {
              handleChange(fields.MIN_PRICE, event.target.value)
              performSearch(filter)
            }}
            onBlur={() => performSearch(filter)}
          />

          <input type='number' placeholder='Til kr'
            value={maxPrice > 0 ? maxPrice : ''}
            onChange={(event) => {
              handleChange(fields.MAX_PRICE, event.target.value)
              performSearch(filter)
            }}
          />
        </li>
      </ul>

      <legend>Areal</legend>
      <ul>
        <li className='filter-item'>
          <input type='number' placeholder='Fra kvm'
            value={minSize > 0 ? minSize : ''}
            onChange={(event) => {
              handleChange(fields.MIN_SIZE, event.target.value)
              performSearch(filter)
            }}
            onBlur={() => performSearch(filter)}
          />
          <input type='number' placeholder='Til kvm' value={maxSize > 0 ? maxSize : ''}
            onChange={(event) => {
              handleChange(fields.MAX_SIZE, event.target.value)
              performSearch(filter)
            }}
            onBlur={() => performSearch(filter)}
          />
        </li>
      </ul>

      <legend>Antall soverom</legend>
      <ul>
        {allBedroomValues.map((entry) =>
          <li className='filter-item' key={entry}>
            <input type='checkbox' value={entry}
              checked={selectedBedroomValues.includes(entry)}
              onChange={() => {
                handleChange(selectedBedroomValues.includes(entry)
                ? fields.REMOVE_BEDROOM_OPTION
                : fields.ADD_BEDROOM_OPTION,
                entry)
                performSearch()
              }}
            />
            <label htmlFor={entry}>{entry}</label>
          </li>
        )}
      </ul>

      <input type='reset' value='Tilbakestill'
        onClick={() => {
          handleReset()
          performSearch()
        }}
      />
      <input type='submit' value='Søk' className='submit'
        onClick={() => performSearch(filter)}
      />
    </div>
  )
