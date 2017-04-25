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
    <p>Visitt er en komplett løsning for framvisning av nybygg for boligkjøpere. Vi tilbyr en unik mulighet til å se fremtidige boliger før de er bygget. Via nettsiden vår finner du din neste bolig og du kan bestille tjenesten vår.</p>
    <p>
Deretter velger du en av våre mange filialer rundt om i landet som tilbyr Visitt. Visitt benytter seg av virtual reality (VR) teknologi, som er en teknologi der du tar på deg headset med display for hvert av øynene. Disse har høy oppløsning og sporer bevegelsen din.
    </p>
    <p>Det er nettopp derfor du kan med vår tjeneste få følelsen av hvordan din fremtidig bolig kan se ut og muligheten til å være i Tromsø men gå på virtuell visning i Kristiansand.</p>
  </div>
})

export default connect(mapStateToProps)(InfoSection)
