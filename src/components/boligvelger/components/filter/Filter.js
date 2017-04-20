/*
 * Created by Thomas Hartmann
 * The website's property filtering tool
 */
import React from 'react'
import fields from './inputFields'
import { VelocityTransitionGroup } from 'velocity-react'
import Checkbox from 'material-ui/Checkbox'
import TextField from 'material-ui/TextField'

export default ({ showAll, initialCounties, hiddenCounties, allBedroomValues, selectedBedroomValues,
  selectedCounties, minPrice, maxPrice, minSize, maxSize, filter,
  handleToggle = f => f, handleChange = f => f, handleReset = f => f, performSearch = f => f }) => (
    <div className='col-xs-4 housing-filter'>
      <ul id='regions-container'>
        <div id='showMore' onClick={() => handleToggle(!showAll)}>Vis {showAll ? 'mindre' : 'mer'}</div>

        {initialCounties.map((county) =>
          <li className='filter-item' key={county}>
            <Checkbox className='regionItem' label={county}
              checked={selectedCounties.includes(county)}
              onCheck={() => {
                handleChange(selectedCounties.includes(county) ? fields.REMOVE_COUNTY : fields.ADD_COUNTY, county)
                performSearch()
              }} />
          </li>
        )}
        <VelocityTransitionGroup component='div' enter='slideDown' leave='slideUp'>
          {showAll
            ? hiddenCounties.map((county) =>
              <li className='filter-item' key={county}>
                <Checkbox className='regionItem' label={county}
                  checked={selectedCounties.includes(county)}
                  onChange={() => {
                    handleChange(selectedCounties.includes(county) ? fields.REMOVE_COUNTY : fields.ADD_COUNTY, county)
                    performSearch()
                  }}
                />
              </li>
            )
            : null}
        </VelocityTransitionGroup>
      </ul>

      <legend>Pris</legend>
      <ul>
        <li className='filter-item'>
          <TextField type='number' placeholder='Fra kr'
            value={minPrice > 0 ? minPrice : ''}
            onChange={(event) => {
              handleChange(fields.MIN_PRICE, event.target.value)
              performSearch(filter)
            }}
            onBlur={() => performSearch(filter)}
          />

          <TextField type='number' placeholder='Til kr'
            value={maxPrice > 0 ? maxPrice : ''}
            onChange={(event) => {
              console.log(event.target.value)
              handleChange(fields.MAX_PRICE, event.target.value)
              performSearch(filter)
            }}
          />
        </li>
      </ul>

      <legend>Areal</legend>
      <ul>
        <li className='filter-item'>
          <TextField type='number' placeholder='Fra kvm'
            value={minSize > 0 ? minSize : ''}
            onChange={(event) => {
              handleChange(fields.MIN_SIZE, event.target.value)
              performSearch(filter)
            }}
            onBlur={() => performSearch(filter)}
          />
          <TextField type='number' placeholder='Til kvm' value={maxSize > 0 ? maxSize : ''}
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
            <Checkbox value={entry}
              label={entry}
              checked={selectedBedroomValues.includes(entry)}
              onCheck={() => {
                handleChange(selectedBedroomValues.includes(entry)
                  ? fields.REMOVE_BEDROOM_OPTION
                  : fields.ADD_BEDROOM_OPTION,
                  entry)
                performSearch()
              }}
            />
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
