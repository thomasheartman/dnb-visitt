/*
 * Created by Thomas Hartmann
 * The website's property filtering tool
 */
import React from 'react'
import fields from './inputFields'
import limits from './filterLimits'
import { VelocityTransitionGroup } from 'velocity-react'
import Checkbox from 'material-ui/Checkbox'
import Slider from 'material-ui/Slider'

export default ({ showAll, initialCounties, hiddenCounties, allBedroomValues, selectedBedroomValues,
  selectedCounties, minPrice, maxPrice, minSize, maxSize, filter,
  handleToggle = f => f, handleChange = f => f, handleReset = f => f, performSearch = f => f }) => (
    <div className='col-xs-12 col-sm-4 housing-filter'>
      <ul id='regions-container'>
        <div id='showMore' onClick={() => handleToggle(!showAll)}>Vis {showAll ? 'mindre' : 'mer'}</div>

        {initialCounties.map((county) =>
          <li className='filter-item' key={county}>
            <Checkbox className='regionItem' label={county}
              checked={selectedCounties.includes(county)}
              onCheck={() => {
                handleChange(selectedCounties.includes(county) ? fields.REMOVE_COUNTY : fields.ADD_COUNTY, county)
                performSearch()
              }}
              labelStyle={{color: 'white'}}
              iconStyle={{fill: 'white'}}
              />
          </li>
        )}
        <VelocityTransitionGroup component='div' enter='slideDown' leave='slideUp'>
          {showAll
            ? hiddenCounties.map((county) =>
              <li className='filter-item' key={county}>
                <Checkbox className='regionItem' label={county}
                  checked={selectedCounties.includes(county)}
                  onCheck={() => {
                    handleChange(selectedCounties.includes(county) ? fields.REMOVE_COUNTY : fields.ADD_COUNTY, county)
                    performSearch()
                  }}
                  labelStyle={{color: 'white'}}
                  iconStyle={{fill: 'white'}}
                />
              </li>
            )
            : null}
        </VelocityTransitionGroup>
      </ul>

      <legend>Pris</legend>
      <ul className='filter-slider-container'>
        <li>
          <label htmlFor='minPriceSlider'>Fra kr. {minPrice.toLocaleString()}</label>
          <Slider
            name='minPriceSlider'
            min={0}
            max={limits.MAX_PRICE}
            value={minPrice}
            step={limits.PRICE_STEP_SIZE}
            onDragStop={() => performSearch(filter)}
            onBlur={() => performSearch(filter)}
            onChange={(event, value) => {
              handleChange(fields.SET_MIN_PRICE, value)
            }}
            style={{ marginBottom: 0 }}
          />
          <br />

          <label htmlFor='maxPriceSlider'>Til kr. {maxPrice.toLocaleString()}</label>
          <Slider
            name='maxPriceSlider'
            min={0}
            max={limits.MAX_PRICE}
            value={maxPrice}
            step={limits.PRICE_STEP_SIZE}
            onDragStop={() => performSearch(filter)}
            onBlur={() => performSearch(filter)}
            onChange={(event, value) => {
              handleChange(fields.SET_MAX_PRICE, value)
            }}
            style={{ marginBottom: 0 }}
          />
        </li>
      </ul>

      <legend>Areal</legend>
      <ul className='filter-slider-container'>

        <li>
          <label htmlFor='minSizeSlider'>Fra {minSize} m&#178;</label>
          <Slider
            name='minSizeSlider'
            min={0}
            max={limits.MAX_SIZE}
            value={minSize}
            step={limits.SIZE_STEP_SIZE}
            onDragStop={() => performSearch(filter)}
            onBlur={() => performSearch(filter)}
            onChange={(event, value) => {
              handleChange(fields.SET_MIN_SIZE, value)
            }}
            style={{ marginBottom: 0 }}
          />
          <br />

          <label htmlFor='maxSizeSlider'>Til {maxSize} m&#178;</label>
          <Slider
            name='maxSizeSlider'
            min={0}
            max={limits.MAX_SIZE}
            value={maxSize}
            step={limits.SIZE_STEP_SIZE}
            onDragStop={() => performSearch(filter)}
            onBlur={() => performSearch(filter)}
            onChange={(event, value) => {
              handleChange(fields.SET_MAX_SIZE, value)
            }}
            style={{ marginBottom: 0 }}
          />
        </li>
      </ul>

      <legend>Antall soverom</legend>
      <ul className='filter-slider-container'>
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
              labelStyle={{color: 'white'}}
              iconStyle={{fill: 'white'}}
            />
          </li>
        )}
      </ul>
      <div className='row middle-xs between-xs'>
        <input type='submit' value='Søk' className='submit'
          onClick={() => performSearch(filter)}
        />
        <input type='reset' value='Tilbakestill' className='submit'
          onClick={() => {
            handleReset()
            performSearch()
          }}

        />
      </div>
    </div>
  )
