/*
 * Created by Thomas Hartmann
 * The main page for property filtering
 */
import React from 'react'
import Filter from './components/filter/Filter.map'
import SearchResults from './components/searchResults/SearchResults.map'
import { sok } from '../../media/icons'

export default () => (
  <div>
    <main className='boligVelger-main'>
      <div className='row'>
        <Filter />
        <section className='col-xs-12 col-sm-8 housing-list-items' id='boligfilter'>
          <div className='row middle-xs page-sub-heading'>
            <h2 className='col-xs'>Boligsøk</h2>
            <img src={sok} viewBox='0 0 500 500' role='presentation' />
          </div>
          <SearchResults />
        </section>
      </div>
    </main>
  </div>
)
