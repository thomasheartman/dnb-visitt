/*
 * Created by Thomas Hartmann
 * A mapper for boligannonser
 */

import { connect } from 'react-redux'
import Annonse from './BoligAnnonse'
import { _ } from 'lodash'

const defaultData = {
  Price: 50000000,
  Fellesutgifter: 1340,
  Fellesgjeld: 0,
  BRA: 90,
  PRom: 85,
  SquareMetres: 5000,
  Inngangsetasje: 1,
  AntallPlan: 1,
  AntallRom: 4,
  Bedrooms: 3,
  EnergyRating: 'C',
  StreetNumber: '29',
  Byggestart: '30.06.2017',
  Ferdigstillelse: '30.03.2018',
  StreetName: 'Gabels Gate',
  AparmentNumber: '4a',
  Poststed: 'Frogner',
  Fylke: 'Oslo'
}

const mapStateToProps = state => {
  const property = state.currentProperty.propertyData
  if (!property) return

  return ({
    Price: property.Price,
    Fellesutgifter: 1340,
    Fellesgjeld: 0,
    BRA: 90,
    PRom: 85,
    SquareMetres: property.SquareMetres,
    Inngangsetasje: 1,
    AntallPlan: 1,
    AntallRom: 4,
    Bedrooms: property.Bedrooms,
    EnergyRating: 'C',
    StreetNumber: property.StreetNumber,
    Byggestart: '30.06.2017',
    Ferdigstillelse: '30.03.2018',
    StreetName: property.StreetName,
    AparmentNumber: '4a',
    Poststed: property.Poststed,
    Fylke: property.Fylke
  })

}

const mapDispatchToProps = (dispatch, getState) => ({
  // TODO: map dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(Annonse)