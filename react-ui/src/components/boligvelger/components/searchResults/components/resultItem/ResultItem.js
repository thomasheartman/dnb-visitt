/*
 * Created by Thomas Hartmann
 * Component that lists details about a single result
 */
import React from 'react'
import { Link } from 'react-router-dom'
import { getHousingIcon } from '../../../../../../media/icons'
import { getHousingImage } from './media/defaultThumbnails'
import { annonse } from '../../../../../../routing/Routes'

class ResultItem extends React.Component {
  render () {
    const { id, price, postPlace, streetName, streetNumber, bedrooms, housingType } = this.props

    return (
      < Link to={`${annonse}/${id}`}
      >
        <article className='row housing-item-container start-xs'>
          <div className='col-xs-12 col-sm-6 full-width housing-item-image'>
            <img className='img-responsive'
              src={getHousingImage(housingType)}
              alt={`${streetName} ${streetNumber} | ${housingType}`}
            />
          </div>
          <div className='col-xs-12 col-sm-6 housing-item-info-container'>
            <div className="housing-items">
              <p className='housing-item-loc'>{postPlace}</p>
              <h2 className='housing-item-title'>{streetName} {streetNumber}</h2>
              <p className='housing-item-rooms'>Soverom: {bedrooms}</p>
              <p className='housing-item-price'>Pris fra: {price.toLocaleString()}</p>
              <div className='row middle-xs housing-item-type-container'>
                <img src={getHousingIcon(housingType)} alt={housingType} viewBox="0 0 100 100"/>
                <p className='housing-item-type'> {housingType}</p>
              </div>
            </div>
          </div>
        </article>
      </Link >
    )
  }
}

export default ResultItem
