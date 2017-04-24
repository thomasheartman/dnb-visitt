/*
 * Created by Thomas Hartmann
 * Info about visitt
 */
import React from 'react'
import InfoSection from './InfoSection'
import { connect } from 'react-redux'
import { leilighet } from '../../../../media/icons'

const mapStateToProps = () => ({
  link: 'what',
  icon: leilighet,
  iconAltText: 'Se bolig i VR',
  heading: 'Se bolig i VR',
  body:
  <div>
    <p>Å kjøpe ny bolig er en milepæl som forandrer mye mer enn bare adressen din. Og det kan være ganske nervepirrende. Derfor er det viktig at du har tenkt gjennom så mye som mulig på forhånd.</p>
    <p>Hos DNB mener vi finn annonser og prospekter for nybygg er en dinosaur i dagens teknologi-landskap. Med Visitt flytter visninger av nybygg inn i dette århundre ved å ikke bare vise deg din fremtidige bolig, men plassere inne i boligen - før den står ferdigstilt.
    </p>
    <p>Ved bruk av ny teknologi får du muligheten til å bruke god tid på visning og kjenne etter om dette føles riktig. Er det her du vil bo? Du må få godfølelsen - også når du skal kjøpe nybygg.</p>
  </div>
})

export default connect(mapStateToProps)(InfoSection)
