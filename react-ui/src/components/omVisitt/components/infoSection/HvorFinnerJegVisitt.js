/*
 * Created by Thomas Hartmann
 * Info about visitt
 */
import React from 'react'
import { Link } from 'react-router-dom'
import InfoSection from './InfoSection'
import { connect } from 'react-redux'
import { omradeVelg } from '../../../../media/icons'

const mapStateToProps = () => ({
  link: 'where',
  icon: omradeVelg,
  iconAltText: 'Visittfilialer',
  heading: 'Her finner du Visitt',
  body:
  <div>
    <p>Det å kjøpe bolig er et stort steg og ofte en del av et nytt kapittel i livet. <Link to='/hjelp-og-kontakt'>Kontakt oss</Link> gjerne om du har spørsmål.</p>
  </div>
})

export default connect(mapStateToProps)(InfoSection)
