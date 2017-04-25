/*
 * Created by Nikolai Nergård
 * Housing page
 */
import React from 'react'
import { Link } from 'react-router-dom'
import { kalkulator, omradeVelg, vr } from '../../../media/icons.js'
import mekler from './media/mekler.jpg'
import barn from './media/barn.jpg'
import familie from './media/familie.jpg'
import lekeplass from './media/lekeplass.jpg'
import { Sticky } from 'react-sticky'
import { bestillVisitt } from '../../../routing/Routes'

export default ({id, price, commonCosts, sharedDebt, grossArea,
  netLivingSpace, entryFloor, floors, numberOfRooms, bedrooms,
  energyRating, streetNumber, projectConstructionStart, projectConstructionFinalized,
  streetName, apartmentNumber, zipLocation, county,
  images, handleSelectProperty = f => f }) => (

    <div>
      <Sticky>
        <div className='housing-nav middle-xs row'>
          <ul className='col-xs middle-xs row'>
            <li>
              <a href='#spesifikasjoner'>Spesifikasjoner</a>
            </li>
            <li>
              <a href='#om-bolig'>Om Boligen</a>
            </li>
            <li>
              <a href='#bilder'>Bilder</a>
            </li>
            <li>
              <a href='#vr'>VR</a>
            </li>
          </ul>
          <div className='col-xs end-xs middle-xs full-width reserve-visit-button'>
            <Link to={`${bestillVisitt}/${id}`} onClick={() => handleSelectProperty()}>Bestill VR Visning</Link>
          </div>
        </div>
      </Sticky>

      <main className='housing-ad-main'>
        <div className='row'>
          <div className='col-xs-12'>
            <div className='row center-xs'>
              <div className='col-xs housing-header'>
                <h2 className='housing-title'>{`${streetName} ${streetNumber}`}</h2>
                <p className='housing-location'>{`${zipLocation}, ${county}`}</p>
              </div>
            </div>
            <img src={images[0]} className='housing-main-img' alt='Trinn 5 bolig' />
            <section className='row housing-basics'>
              <div className='col-xs-12 col-sm-4 col-md-6'>
                <h2>Om boligen</h2>
                <h3>{`${numberOfRooms}-roms leilighet`}</h3>
                <p>Pris: <span>{price.toLocaleString()},-</span></p>
                <p>Fellesutgifter: <span>{commonCosts},-</span></p>
                <p>Andel fellesgjeld: <span>{sharedDebt},-</span></p>
                <p>BRA: <span>{grossArea} m&#178;</span></p>
                <p>P-rom: <span>{netLivingSpace} m&#178;</span></p>
                <p>Tomteareal: <span>{grossArea} m&#178;</span></p>
                <p>Inngangsetasje: <span>{entryFloor}</span></p>
                <p>Antall plan: <span>{floors}</span></p>
                <p>Antall rom: <span>{numberOfRooms}</span></p>
                <p>Antall soverom: <span>{bedrooms}</span></p>
                <p>Energimerke: <span>{energyRating}</span></p>
                <p>Bolignummer: <span>{apartmentNumber}</span></p>
                <p>Byggestart: <span>{projectConstructionStart}</span></p>
                <p>Ferdigstillelse: <span>{projectConstructionFinalized}</span></p>
              </div>
              <aside className='col-xs-12 col-sm-8 col-md-6'>
                <img src={mekler} alt='mekler Rolf Kåre' className='img-container' />
                <div className='row middle-xs'>
                  <div className='col-xs-4 full-width'>
                    <img className='housing-listing-icon' src={kalkulator} alt='kalkulator' />
                  </div>
                  <div className='col-xs-8'>
                    <h3>Last ned prospekt</h3>
                  </div>
                </div>
                <div className='row middle-xs'>
                  <div className='col-xs-4 full-width'>
                    <img className='housing-listing-icon img-container' src={omradeVelg} alt='Velg område' />
                  </div>
                  <div className='col-xs-8'>
                    <h3>Åpne i kart</h3>
                  </div>
                </div>
              </aside>
              <a href='' name='spesifikasjoner' />
            </section>
            <div className='row center-xs'>
              <a href='' name='om-bolig' />
              <div className='col-xs-6 two-grid-gutter big-button'>
                <Link to='#'>Se Plantegning</Link>
              </div>
              <div className='col-xs-6 two-grid-gutter big-button'>
                <Link to='#'>Se 3D rendering</Link>
              </div>
            </div>
            <div className='row center-xs'>
              <div className='col-xs-6 two-grid-gutter big-button'>
                <img src={images[1]} alt='Trinn 5' className='img-container' />
              </div>
              <div className='col-xs-6 two-grid-gutter big-button'>
                <img src={images[2]} alt='Vardevei' className='img-container' />
              </div>
            </div>
            <div className='row center-xs middle-xs'>
              <div className='col-xs-8 two-grid-gutter big-button'>
                <a>Beliggenhet</a>
              </div>
              <div className='col-xs-4 two-grid-gutter big-button'>
                <a>Avstand til diverse</a>
              </div>
            </div>
            <div className='row center-xs'>
              <a href='' name='bilder' />
              <div className='col-xs-6 two-grid-gutter'>
                <img src={images[3]} alt='Kjøkken' className='img-container' />
              </div>
              <div className='col-xs-6 two-grid-gutter'>
                <img src={images[4]} alt='Stue' className='img-container' />
              </div>
            </div>
            <div className='row'>
              <div className='col-xs-12 full-width big-button middle-xs center-xs'>
                <Link to='#!'>Standard</Link>
              </div>
            </div>
            <div className='row center-xs'>
              <div className='col-xs-6  two-grid-gutter'>
                <img src={images[5]} alt='Lekeplass' className='img-container' />
              </div>
              <div className='col-xs-6 two-grid-gutter'>
                <img src={lekeplass} alt='Vardevei' className='img-container' />
              </div>
            </div>
            <div className='row'>
              <div className='col-xs-12 full-width big-button middle-xs center-xs'>
                <Link to='#!'>Innhold</Link>
              </div>
            </div>
            <div className='row center-xs'>
              <a href='' name='vr' />
              <div className='col-xs-6 two-grid-gutter'>
                <img src={barn} alt='Barn' className='img-container' />
              </div>
              <div className='col-xs-6 two-grid-gutter'>
                <img src={familie} alt='Familie' className='img-container' />
              </div>
            </div>
            <div className='row center-xs middle-xs'>
              <div className='col-xs-6 two-grid-gutter big-button'>
                <a>Adkomst</a>
              </div>
              <div className='col-xs-6 two-grid-gutter big-button'>
                <a>Lyst til å ta en titt?</a>
              </div>
            </div>
          </div>
        </div>
        <div className='row middle-xs page-sub-heading'>
          <h2 className='col-xs'>Bestill Visning</h2>
          <img src={vr} viewBox='0 0 500 500' role='presentation' />
        </div>
        <div className='row center-xs middle-xs'>
          <Link to={`/bestill-visitt/${id}`} onClick={() => handleSelectProperty()} className='orange-button'>Bestill VR Visning</Link>
        </div>
      </main>
    </div>
  )
