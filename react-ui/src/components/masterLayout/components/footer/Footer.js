/*
 * Created by Thomas on 16/04/2017.
 * The app's footer
 */

import React from 'react'
import { Link } from 'react-router-dom'
import visittLogo from './media/dnb_visitt_footer.svg'
import dnbLogo from './media/dnb-standard.svg'
import { boligvelger, omVisitt, hjelpOgKontakt } from '../../../../routing/Routes'

export default () => (
  <footer className='row middle-xs'>
    <div className='col-xs-4 center-xs middle-xs footer-logo-container'>
      <img src={visittLogo} className='visitt-logo-footer' alt='DNB Visitt logo' />
    </div>
    <div className='col-xs-8 footer-links'>
      <ul>
        <li>
          <Link to={boligvelger}>Boligsøk</Link>
        </li>
        <li>
          <Link to={omVisitt}>Om Visitt</Link>
        </li>
        <li>
          <Link to={hjelpOgKontakt}>Kontakt Oss</Link>
        </li>
      </ul>
      <div className='footer-box'>
        <img src={dnbLogo} className='dnb-logo-footer' alt='DNB logo' />
        <p>©2017 DNB Eiendom - Hele Norges Eiendomsmegler</p>
        <p>Hovedkontor: Dronning Eufemiasgt. 30, Oslo</p>
        <p>Postadresse: 0191 Oslo</p>
        <p>Org.nr: 910 968 955</p>
        <p><a href='#'>Om cookies</a></p>
      </div>
    </div>
  </footer>
)
