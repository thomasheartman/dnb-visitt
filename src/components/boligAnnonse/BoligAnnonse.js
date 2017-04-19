/*
 * Created by Nikolai Nergård
 * Housing page
 */
import React from 'react'
import { Link } from 'react-router-dom'
import { icons } from '../../../src/media/icons.js'

export default () => (
    <main className='boligAnnonse-main'>
      <div className='row'>
        <section className='col-xs-12'>
			<div className="row center-xs">
				<div className="col-xs housing-header">
					<h2 className="housing-title">Gabels Gate 29</h2>
					<p className="housing-location">Frogner, Oslo</p>
				</div>
			</div>

			<image src="/media/images/Trinn-5-alm-crop.jpg" className="housing-main-img" alt="Trinn 5 bolig"/>
			<nav className="housing-inline-nav">
				<ul>
					<li>
						<Link to="#information">Informasjon</Link>
					</li>
					<li>
						<Link to="#presentation">Presentasjon</Link>
					</li>
					<li>
						<Link to="#decorate-house">Ta en Visitt</Link>
					</li>
				</ul>
			</nav>
			<section className="row">
				<div className="col-xs-12 col-sm-4 col-md-6 housing-basics">
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
					<image src="/media/images/mekler.jpg" alt="mekler Rolf Kåre" className="img-container"/>
					<div className="row middle-xs">
						<div className="col-xs-4">
							<image className="housing-listing-icon" src="/media/icons/kalkulator.svg" alt="kalkulator"/>
						</div>
						<div className="col-xs-8">
							<h3>Last ned prospekt</h3>
						</div>
					</div>
					<div className="row middle-xs">
						<div className="col-xs-4">
							<image className="housing-listing-icon" src="/media/icons/omrade-velg.svg" alt="Velg område" className="img-container"/>
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
					<image src="/media/images/Trinn-5.jpg" alt="Trinn 5" className="img-container"/>
				</div>
				<div className="col-xs-6 two-grid-gutter big-button">
					<image src="/media/images/vardevei.jpg" alt="Vardevei" className="img-container"/>
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
					<image src="/media/images/kjokken.jpg" alt="Kjøkken" className="img-container"/>
				</div>
				<div className="col-xs-6 two-grid-gutter">
					<image src="/media/images/illustrasjon-stue.jpg" alt="Stue" className="img-container"/>
				</div>
			</div>
			<div className="row">
				<div className="col-xs-12 full-width big-button middle-xs center-xs">
					<Link to="#!">Standard</Link>
				</div>
			</div>
			<div className="row center-xs">
				<div className="col-xs-6 two-grid-gutter">
					<image src="/media/images/lekeplass.jpg" alt="Lekeplass" className="img-container"/>
				</div>
				<div className="col-xs-6 two-grid-gutter">
					<image src="/media/images/vardevei.jpg" alt="Vardevei" className="img-container"/>
				</div>
			</div>
			<div className="row">
				<div className="col-xs-12 full-width big-button middle-xs center-xs">
					<Link to="#!">Innhold</Link>
				</div>
			</div>
			<div className="row center-xs">
				<div className="col-xs-6 two-grid-gutter">
					<image src="/media/images/barn.jpg" alt="Barn" class="img-container"/>
				</div>
				<div className="col-xs-6 two-grid-gutter">
					<image src="/media/images/familie.jpg" alt="Familie" className="img-container"/>
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
