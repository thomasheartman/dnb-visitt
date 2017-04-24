/*
 * Created by Thomas Hartmann
 * Help and contact page
 */
import React from 'react'
import Form from './components/form/ContactForm.map'
import Map from './components/map/Map'
import { omradeVelg} from '../../media/icons'
import { hjem} from '../../media/icons'

export default () => (
  <div>
    <main className='contact'>
      <div className='row middle-xs page-sub-heading'>
        <h2 className='col-xs'>Hjelp og Kontakt</h2>
        <img src={omradeVelg} viewBox='0 0 500 500' role='presentation' />
      </div>
      <Map />

      <div className='row middle-xs page-sub-heading'>
        <h2 className='col-xs'>Hovedkontor</h2>
        <img src={hjem} viewBox='0 0 500 500' role='presentation' />
      </div>
      <div className="row contact-info">
        <div className="col-xs-8">
          <p>Telefon: 04800</p>
          <p>Kontortid: Hverdager 10-16</p>
          <p>Epost: info@dnb-visitt.no</p>
          <p>Besøksadresse: Dronning Eufemiasgate 30, 0191 Oslo</p>
          <p>Postadresse: DNB, Postboks 1600 Sentrum, 0021 Oslo</p>
        </div>
        <div className="col-xs-4">
          <p>Følg Oss</p>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
          <p>Youtube</p>
        </div>
      </div>
      <div className='row middle-xs page-sub-heading'>
        <h2 className='col-xs'>Kontakt Oss</h2>
        <img src={omradeVelg} viewBox='0 0 500 500' role='presentation' />
      </div>
      <Form />
      
    </main>
  </div>
)
