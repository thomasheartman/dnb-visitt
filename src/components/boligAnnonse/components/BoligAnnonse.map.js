/*
 * Created by Thomas Hartmann
 * A mapper for boligannonser
 */

import { connect } from 'react-redux'
import Annonse from './BoligAnnonse'

// NOTE: kept around for structure
/* const defaultData = {
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
} */

const mapStateToProps = state => {
  const property = state.currentProperty.propertyData
  if (!property) return


  return ({
    price: property.price,
    commonCosts: property.commonCosts,
    sharedDebt: property.sharedDebt,
    grossArea: property.grossArea,
    netLivingSpace: property.netLivingSpace,
    entryFloor: property.entryFloor,
    floors: property.floors || 1,
    numberOfRooms: property.numberOfRooms,
    bedrooms: property.bedrooms,
    energyRating: property.energyRating,
    streetNumber: property.streetNumber,
    projectConstructionStart: property.projectConstructionStart || '2020-06-05',
    projectConstructionFinalized: property.projectConstructionFinalized || '2020-06-05',
    streetName: property.streetName,
    apartmentNumber: property.apartmentNumber,
    zipLocation: property.zipLocation,
    county: property.county
  })
}

const mapDispatchToProps = (dispatch, getState) => ({
  // TODO: map dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(Annonse)
