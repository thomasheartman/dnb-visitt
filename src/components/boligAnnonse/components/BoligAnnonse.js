/*
 * Created by Nikolai Nergård
 * Housing page
 */
import React from 'react'
import { Link } from 'react-router-dom'
import { kalkulator, omradeVelg } from '../../../media/icons.js'
import trinn5 from './media/Trinn-5-alm-crop.jpg'
import mekler from './media/mekler.jpg'
import barn from './media/barn.jpg'
import familie from './media/familie.jpg'
import stue from './media/illustrasjon-stue.jpg'
import kjokken from './media/kjokken.jpg'
import lekeplass from './media/lekeplass.jpg'
import trinn5alm from './media/Trinn-5-alm.jpg'
import vardevei from './media/vardevei.jpg'

export default ({
  Price = 50000000,
  Fellesutgifter = 1340,
  Fellesgjeld = 0,
  BRA = 90,
  PRom = 85,
  SquareMetres = 5000,
  Inngangsetasje = 1,
  AntallPlan = 1,
  AntallRom = 4,
  Bedrooms = 3,
  EnergyRating = 'C',
  StreetNumber = '29',
  Byggestart = '30.06.2017',
  Ferdigstillelse = '30.03.2018',
  StreetName = 'Gabels gate',
  ApartmentNumber = '4a',
  Poststed = 'Frogner',
  Fylke = 'Oslo' }) => (

    <div>

      <main className='housing-ad-main'>
        <div className='row'>
          <section className='col-xs-12'>
            <div className='row center-xs'>
              <div className='col-xs housing-header'>
                <h2 className='housing-title'>{`${StreetName} ${StreetNumber}`}</h2>
                <p className='housing-location'>{`${Poststed}, ${Fylke}`}</p>
              </div>
            </div>

            <img src={trinn5} className='housing-main-img' alt='Trinn 5 bolig' />
            <nav className='housing-inline-nav'>
              <ul>
                <li>
                  <Link to='#information'>Informasjon</Link>
                </li>
                <li>
                  <Link to='#presentation'>Presentasjon</Link>
                </li>
                <li>
                  <Link to='/bestill-visitt'>Bestill Visitt</Link>
                </li>
              </ul>
            </nav>
            <section className='row housing-basics'>
              <div className='col-xs-12 col-sm-4 col-md-6'>
                <h2>Om boligen</h2>
                <h3>{`${AntallRom}-roms leilighet`}</h3>
                <p>Pris: <span>{Price.toLocaleString()},-</span></p>
                <p>Fellesutgifter: <span>{Fellesutgifter},-</span></p>
                <p>Andel fellesgjeld: <span>{Fellesgjeld},-</span></p>
                <p>BRA: <span>{BRA} m&#178;</span></p>
                <p>P-rom: <span>{PRom} m&#178;</span></p>
                <p>Tomteareal: <span>{SquareMetres} m&#178;</span></p>
                <p>Inngangsetasje: <span>{Inngangsetasje}</span></p>
                <p>Antall plan: <span>{AntallPlan}</span></p>
                <p>Antall rom: <span>{AntallRom}</span></p>
                <p>Antall soverom: <span>{Bedrooms}</span></p>
                <p>Energimerke: <span>{EnergyRating}</span></p>
                <p>Bolignummer: <span>{ApartmentNumber}</span></p>
                <p>Byggestart: <span>{Byggestart}</span></p>
                <p>Ferdigstillelse: <span>{Ferdigstillelse}</span></p>
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
            </section>
            <div className='row center-xs'>
              <div className='col-xs-6 two-grid-gutter big-button'>
                <Link to='#'>Se Plantegning</Link>
              </div>
              <div className='col-xs-6 two-grid-gutter big-button'>
                <Link to='#'>Se 3D rendering</Link>
              </div>
            </div>
            <div className='row center-xs'>
              <div className='col-xs-6 two-grid-gutter big-button'>
                <img src={trinn5alm} alt='Trinn 5' className='img-container' />
              </div>
              <div className='col-xs-6 two-grid-gutter big-button'>
                <img src={vardevei} alt='Vardevei' className='img-container' />
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
              <div className='col-xs-6 two-grid-gutter'>
                <img src={kjokken} alt='Kjøkken' className='img-container' />
              </div>
              <div className='col-xs-6 two-grid-gutter'>
                <img src={stue} alt='Stue' className='img-container' />
              </div>
            </div>
            <div className='row'>
              <div className='col-xs-12 full-width big-button middle-xs center-xs'>
                <Link to='#!'>Standard</Link>
              </div>
            </div>
            <div className='row center-xs'>
              <div className='col-xs-6 two-grid-gutter'>
                <img src={lekeplass} alt='Lekeplass' className='img-container' />
              </div>
              <div className='col-xs-6 two-grid-gutter'>
                <img src={vardevei} alt='Vardevei' className='img-container' />
              </div>
            </div>
            <div className='row'>
              <div className='col-xs-12 full-width big-button middle-xs center-xs'>
                <Link to='#!'>Innhold</Link>
              </div>
            </div>
            <div className='row center-xs'>
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
          </section>
        </div>

      </main>
    </div>
  )
