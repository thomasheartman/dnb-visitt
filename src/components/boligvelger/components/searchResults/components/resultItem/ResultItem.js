/*
 * Created by Thomas Hartmann
 * Component that lists details about a single result
 */
import React from 'react'
import { Link } from 'react-router-dom'
import { getHousingIcon } from '../../../../../../media/icons'
import { getHousingImage } from './media/defaultThumbnails'


class ResultItem extends React.Component {

  render () {
    const { Id, ProjectName, Price, Poststed, StreetName, StreetNumber, Bedrooms, HousingType } = this.props

    return (
      < Link to={{
        pathname: `boligvelger/annonse/${Id}`
      }
      }
      >
        <article className='row housing-item-container'>
          <div className='col-xs-12 col-sm-6 full-width housing-item-image'>
            <img className='img-responsive'
              src={getHousingImage(HousingType)}
              alt={`${StreetName} ${StreetNumber} | ${HousingType}`}
            />
          </div>
          <div className='col-xs-12 col-sm-6 housing-item-info-container'>
            <p className='housing-item-loc'>{Poststed}</p>
            <h2 className='housing-item-title'>{StreetName} {StreetNumber}</h2>
            <p className='housing-item-rooms'>Soverom: {Bedrooms}</p>
            <p className='housing-item-price'>Pris fra: {Price.toLocaleString()}</p>
            <div className="row housing-item-type-container">
              <p className='housing-item-type'><img src={getHousingIcon(HousingType)} alt={HousingType} /> {HousingType}</p>
            </div>
          </div>
        </article>
      </Link >
    )
  }
}

export default ResultItem

