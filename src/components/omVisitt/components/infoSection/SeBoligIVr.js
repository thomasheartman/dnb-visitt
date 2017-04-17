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
    <p>Hva hvis du kunne gå på visning i en leilighet som er innredet og malt sånn som du vil ha det.</p>
    <p>Med Visitt kan du tilpasse boligen slik du ser den for deg. Slik at du kan vurdere smarte valg før selve
      byggeprosessen begynner.</p>
  </div>
})

export default connect(mapStateToProps)(InfoSection)
