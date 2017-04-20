/*
 * Created by Thomas Hartmann
 * The main page for property filtering
 */
import React from 'react'
import Filter from './components/filter/FilterMap'
import SearchResults from './components/searchResults/SearchResultsMap'

export default () => (
  <div>
    <main className='boligVelger-main'>
      <div className='row'>
        <Filter />
        <section className='col-xs-12 col-sm-8 housing-list-items' id='boligfilter'>
                    <h2>Finn bolig</h2>
          <SearchResults />
        </section>
      </div>
    </main>
  </div>
)
