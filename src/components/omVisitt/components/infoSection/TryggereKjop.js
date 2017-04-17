/*
 * Created by Thomas Hartmann
 * Info about visitt
 */
import React from 'react'
import InfoSection from './InfoSection'
import { connect } from 'react-redux'
import { hjem } from '../../../../media/icons'

const mapStateToProps = () => ({
  link: 'why',
  icon: hjem,
  iconAltText: 'Tilpass bolig',
  heading: 'Tryggere kjøp',
  body:
  <div>
    <p>Med VR teknologi har du en unik mulighet til å oppleve nybygg før de er oppført, noe som kan gjøre deg som kunde tryggere på kjøpet ditt.</p>
  </div>
})

export default connect(mapStateToProps)(InfoSection)
