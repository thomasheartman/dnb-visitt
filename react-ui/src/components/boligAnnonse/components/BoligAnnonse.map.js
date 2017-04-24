/*
 * Created by Thomas Hartmann
 * A mapper for boligannonser
 */

import { connect } from 'react-redux'
import Annonse from './BoligAnnonse'
import { clearBooking } from '../../../redux/reducers/booking/bookingActions'
import { getAdImages } from './media/annonseImages'

const toObjectArray = (images) => {
  let results = []
  images.forEach((image) => {
    results = [...results, {src: image, caption: 'Opplev din bolig'}]
  })
  return results
}

const mapStateToProps = state => {
  const property = state.currentProperty.propertyData
  if (!property) return

  const images = getAdImages(property.housingType)

  const lightboxSource = toObjectArray(images)

  return ({
    id: property.id,
    price: property.price || 50,
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
    county: property.county,
    images,
    lightboxSource
  })
}

const mapDispatchToProps = (dispatch) => ({
  handleSelectProperty () {
    dispatch(clearBooking())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Annonse)
