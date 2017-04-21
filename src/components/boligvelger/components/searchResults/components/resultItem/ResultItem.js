/*
 * Created by Thomas Hartmann
 * Component that lists details about a single result
 */
import React from 'react'
import { Link } from 'react-router-dom'
import defaultImage from '../../../../../../media/illustrations/Trinn-5.jpg'
import { getIcon } from '../../../../../../media/icons'

export default ({ ProjectName, Poststed, StreetName, StreetNumber, HousingType, Bedrooms, Price, image, altText, Id,
  fetchProperty = f => f }) => (
    <Link to={{
      pathname: `boligvelger/annonse/${Id}`
    }}
    >
    <article className='row housing-item-container'>
        <div className='col-xs-12 col-sm-6 full-width housing-item-image'>
            <img className='img-responsive'
                src={image || defaultImage}
                alt={altText || ProjectName} />
        </div>
        <div className='col-xs-12 col-sm-6 housing-item-info-container'>
            <p className='housing-item-loc'>{Poststed}</p>
            <h2 className='housing-item-title'>{StreetName} {StreetNumber}</h2>
            <p className='housing-item-rooms'>Soverom: {Bedrooms}</p>
            <p className='housing-item-price'>Pris fra: {Price.toLocaleString()}</p>
            <div className="row housing-item-type-container">
                <p className='housing-item-type'>[HousingIcon] {HousingType}</p>
            </div>
        </div>
    </article>
    </Link>
  )
