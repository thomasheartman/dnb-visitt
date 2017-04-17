/*
 * Created by Thomas Hartmann
 * Component that lists details about a single result
 */
import React from 'react'
import defaultImage from '../../../../../../media/images/nybygg.jpg'

export default ({ projectName, poststed, housingType, bedrooms, price, image, altText }) => (
  <article className='housing-item-container'>
    <div className='housing-item-header row middle-xs'>
      <h2 className='housing-item-title col-xs start-xs'>{projectName}</h2>
      <span className='housing-item-loc col-xs end-xs'>{poststed}</span>
    </div>
    <div className='row'>
      <div className='col-xs-6 housing-item-info-container'>
        <div className='row housing-item-type'>
          <p>Hustype: {housingType}</p>
        </div>
        <div className='row housing-item-rooms'>
          <p>Rom: {bedrooms}</p>
        </div>
        <div className='row housing-item-price'>
          <p>Pris: {price}</p>
        </div>
      </div>
      <div className='col-xs-6 housing-item-image'>
        <img className='img-responsive'
          src={image || defaultImage}
          alt={altText || projectName} />
      </div>
    </div>
  </article>
)
