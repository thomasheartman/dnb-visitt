/*
 * Created by Thomas Hartmann
 * Info about visitt
 */
import React from 'react'
import InfoSection from './InfoSection'
import { connect } from 'react-redux'
import { omradeVelg } from '../../../../media/icons'

const mapStateToProps = () => ({
  link: 'where',
  icon: omradeVelg,
  iconAltText: 'Visittfilialer',
  heading: 'Hvor finner jeg Visitt?',
  body:
  <div>
    <p>Med Visitt VR kan du se boligprosjekter fra hele landet fra hvilken som helst filial som tilbyr Visitt.</p>
    <p>Flytte til Oslo? Men bor i Tromsø? Inget problem. Bare besøk din nærmeste DNB-filial.</p>
  </div>
})

export default connect(mapStateToProps)(InfoSection)
