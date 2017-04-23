/*
 * Created by Nikolai Nergård
 * Reserve time slot to Visit page
 */
import React from 'react'
import Form from './components/form/BookingForm.map'
import BookingCompleted from './components/bookingCompleted/BookingCompleted.map'
import { Spinner } from '../loadingIndicators/Loading'
// import { Link } from 'react-router-dom'

class BestillVisitt extends React.Component {
  componentDidMount () {
    if (parseInt(this.props.match.params.id, 10) !== parseInt(this.props.id, 10)) {
      // this means that the currently loaded property is not the right one
      // so we'll have to load the right one from the database
      this.props.fetchProperty(this.props.match.params.id)
    }
  }

  render () {
    const { bookingCompleted, address, image, fetching, fireMail } = this.props

    if (bookingCompleted) {
      return <BookingCompleted />
    }

    return (
      fetching
        ? <Spinner />
        : <div>
          <main className='reservation-main'>
            <div className='row'>
              <div className='col-xs'>
                <h2>Bestill Visitt</h2>
              </div>
            </div>
            <div className='row reservation-container'>
              <div className='col-xs-12 col-sm-6 reserve-form-container'>
                <p>Reserver din Visitt:</p>
                <Form />
              </div>
              <div className='col-xs-12 col-sm-6 reserved-house-container'>
                <p>Valgt bolig:</p>
                <h2>{address}</h2>
                <img href={image} role='presentation' />
              </div>
            </div>
          </main>
        </div>
    )
  }
}

export default BestillVisitt
