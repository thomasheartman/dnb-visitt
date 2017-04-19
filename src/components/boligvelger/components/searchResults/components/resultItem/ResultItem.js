/*
 * Created by Thomas Hartmann
 * Component that lists details about a single result
 */
import React from 'react'
import { Link } from 'react-router-dom'
import defaultImage from '../../../../../../media/images/nybygg.jpg'

export default ({ ProjectName, Poststed, HousingType, Bedrooms, Price, image, altText, ...props }) => (
  <article className='housing-item-container'>
    <div className='housing-item-header row middle-xs'>
      <h2 className='housing-item-title col-xs start-xs'>{ProjectName}</h2>
      <span className='housing-item-loc col-xs end-xs'>{Poststed}</span>
    </div>
    <div className='row'>
      <div className='col-xs-6 housing-item-info-container'>
        <div className='row housing-item-type'>
          <p>Hustype: {HousingType}</p>
        </div>
        <div className='row housing-item-rooms'>
          <p>Rom: {Bedrooms}</p>
        </div>
        <div className='row housing-item-price'>
          <p>Pris: {Price}</p>
        </div>
        <div className='row housing-item-read'>
          <Link to={{
            pathname: `/annonse/${ProjectName}_${props.StreetName}`,
            props: { ...props }
          }}>Les mer</Link>
        </div>
      </div>
      <div className='col-xs-6 housing-item-image'>
        <img className='img-responsive'
          src={image || defaultImage}
          alt={altText || ProjectName} />
      </div>
    </div>
  </article>
)
