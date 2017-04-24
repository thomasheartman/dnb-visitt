/*
 * Created by Thomas Hartmann
 * A page displaying the detauls of
 * the completed booking
 */

import React from 'react'
import { Link } from 'react-router-dom'
import { hjem } from '../../../../media/icons'
import { getHousingImage } from '../../../boligvelger/components/searchResults/components/resultItem/media/defaultThumbnails'

export default ({ date, time, branch, address, housingType }) => (
  <div>
    <main className='confirmation-container'>
      <div className='row middle-xs page-sub-heading'>
        <h2 className='col-xs'>Takk for bestillingen din</h2>
        <img src={hjem} viewBox='0 0 500 500' role='presentation' />
      </div>
      <div className="row center-xs notification-container">
        <p className='center-xs notification'>Din Visitt visning er nå bestilt. </p>
        <p className="center-xs notification">Du vil motta bekreftelse på epost.</p>
      </div>
      <div className='reservation-info'>
        <h2>Din Bestilling</h2>
        <div className='col-xs center-xs'>
          <div className='reservation-info-line row'>
            <span>Dato </span>
            <span className='col-xs end-xs'>{`${date}`}</span>
          </div>
          <div className='reservation-info-line row'>
            <span>Tid </span>
            <span className='col-xs end-xs'>{`${time}`}</span>
          </div>
          <div className='reservation-info-line row'>
            <span>Filial </span>
            <span className='col-xs end-xs'>{branch}</span>
          </div>
        </div>
      </div>
      <div className='row center-xs reserved-houses'>
        <h3 className='col-xs-12'>{address}</h3>
        <img src={getHousingImage(housingType)} role='presentation' />
      </div>
      <div className='row center-xs'>
        <Link to='/' className='orange-button' target='_blank'>Gå til forsiden</Link>
      </div>
    </main>
  </div>
)
