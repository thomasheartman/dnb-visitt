/*
 * Created by Thomas Hartmann
 * Info about visitt
 */
import React from 'react'
import InfoSection from './InfoSection'
import { connect } from 'react-redux'
import { vr } from '../../../../media/icons'

const mapStateToProps = () => ({
  link: 'who',
  icon: vr,
  iconAltText: 'Hva er Visitt?',
  heading: 'Hva er Visitt?',
  body:
  <div>
    <p>Visitt bruker det nyeste innen VR teknologien.</p>
    <p> Virtual reality er en teknologi der du tar på deg headset med display for hvert av øynene. Disse har høy oppløsning og sporer bevegelsen din.</p>
    <p>Derfor kan du med vår løsning få følelsen av hvordan din fremtidig bolig kan se ut.</p>
  </div>
})

export default connect(mapStateToProps)(InfoSection)
