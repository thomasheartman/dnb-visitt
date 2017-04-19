/*
 * Created by Nikolai Nergård
 * Housing page
 */
import React from 'react'
import { Link } from 'react-router-dom'
import { avtale, eie, hjem, kontrakt, leilighet, sok, velg, vr, kalkulator, omradeVelg } from '../../media/icons.js'
import trinn5 from './media/Trinn-5-alm-crop.jpg'
import mekler from './media/mekler.jpg'
import barn from './media/barn.jpg'
import familie from './media/familie.jpg'
import stue from './media/illustrasjon-stue.jpg'
import kjokken from './media/kjokken.jpg'
import lekeplass from './media/lekeplass.jpg'
import trinn5alm from './media/Trinn-5-alm.jpg'
import vardevei from './media/vardevei.jpg'

export default () => (
    <main className='housing-ad-main'>
      <div className='row'>
        <section className='col-xs-12'>
			<div className="row center-xs">
				<div className="col-xs housing-header">
					<h2 className="housing-title">Gabels Gate 29</h2>
					<p className="housing-location">Frogner, Oslo</p>
				</div>
			</div>

			<img src={trinn5} className="housing-main-img" alt="Trinn 5 bolig"/>
			<nav className="housing-inline-nav">
				<ul>
					<li>
						<Link to="#information">Informasjon</Link>
					</li>
					<li>
						<Link to="#presentation">Presentasjon</Link>
					</li>
					<li>
						<Link to="#reserve-visit">Bestill Visitt</Link>
					</li>
				</ul>
			</nav>
			<section className="row housing-basics">
				<div className="col-xs-12 col-sm-4 col-md-6">
					<h2>Om boligen</h2>
					<h3>4-roms leilighet</h3>
					<p>Pris: <span>2 848 000,-</span></p>
					<p>Fellesutgifter: <span>1340,-</span></p>
					<p>Andel fellesgjeld: <span>0,-</span></p>
					<p>BRA: <span>90 m&#178;</span></p>
					<p>P-rom: <span>85 m&#178;</span></p>
					<p>Tomteareal: <span>0 m&#178;</span></p>
					<p>Inngangs etasje: <span>1</span></p>
					<p>Antall plan: <span>1</span></p>
					<p>Antall rom: <span>4</span></p>
					<p>Antall soverom: <span>3</span></p>
					<p>Energimerke: <span>C</span></p>
					<p>Bolignummer: <span>1</span></p>
					<p>Byggestart: <span>30.06.2017</span></p>
					<p>Ferdigstillelse: <span>30.03.2018</span></p>
				</div>
				<aside className="col-xs-12 col-sm-8 col-md-6">
					<img src={mekler} alt="mekler Rolf Kåre" className="img-container"/>
					<div className="row middle-xs">
						<div className="col-xs-4 full-width">
							<img className="housing-listing-icon" src={kalkulator} alt="kalkulator"/>
						</div>
						<div className="col-xs-8">
							<h3>Last ned prospekt</h3>
						</div>
					</div>
					<div className="row middle-xs">
						<div className="col-xs-4 full-width">
							<img className="housing-listing-icon img-container" src={omradeVelg} alt="Velg område"/>
						</div>
						<div className="col-xs-8">
							<h3>Åpne i kart</h3>
						</div>
					</div>
				</aside>
			</section>
			<div className="row center-xs">
				<div className="col-xs-6 two-grid-gutter big-button">
					<Link to="#">Se Plantegning</Link>
				</div>
				<div className="col-xs-6 two-grid-gutter big-button">
					<Link to="#">Se 3D rendering</Link>
				</div>
			</div>
			<div className="row center-xs">
				<div className="col-xs-6 two-grid-gutter big-button">
					<img src={trinn5alm} alt="Trinn 5" className="img-container"/>
				</div>
				<div className="col-xs-6 two-grid-gutter big-button">
					<img src={vardevei} alt="Vardevei" className="img-container"/>
				</div>
			</div>
			<div className="row center-xs middle-xs">
				<div className="col-xs-8 two-grid-gutter big-button">
					<a>Beliggenhet</a>
				</div>
				<div className="col-xs-4 two-grid-gutter big-button">
					<a>Avstand til diverse</a>
				</div>
			</div>
			<div className="row center-xs">
				<div className="col-xs-6 two-grid-gutter">
					<img src={kjokken} alt="Kjøkken" className="img-container"/>
				</div>
				<div className="col-xs-6 two-grid-gutter">
					<img src={stue} alt="Stue" className="img-container"/>
				</div>
			</div>
			<div className="row">
				<div className="col-xs-12 full-width big-button middle-xs center-xs">
					<Link to="#!">Standard</Link>
				</div>
			</div>
			<div className="row center-xs">
				<div className="col-xs-6 two-grid-gutter">
					<img src={lekeplass} alt="Lekeplass" className="img-container"/>
				</div>
				<div className="col-xs-6 two-grid-gutter">
					<img src={vardevei} alt="Vardevei" className="img-container"/>
				</div>
			</div>
			<div className="row">
				<div className="col-xs-12 full-width big-button middle-xs center-xs">
					<Link to="#!">Innhold</Link>
				</div>
			</div>
			<div className="row center-xs">
				<div className="col-xs-6 two-grid-gutter">
					<img src={barn} alt="Barn" className="img-container"/>
				</div>
				<div className="col-xs-6 two-grid-gutter">
					<img src={familie} alt="Familie" className="img-container"/>
				</div>
			</div>
			<div className="row center-xs middle-xs">
				<div className="col-xs-6 two-grid-gutter big-button">
					<a>Adkomst</a>
				</div>
				<div className="col-xs-6 two-grid-gutter big-button">
					<a>Lyst til å ta en titt?</a>
				</div>
			</div>
        </section>
      </div>
    </main>
)
