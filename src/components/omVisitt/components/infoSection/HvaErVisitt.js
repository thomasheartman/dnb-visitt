/*
 * Created by Thomas Hartmann
 * Info about visitt
 */
import React from 'react'
import InfoSection from './InfoSection'
import { connect } from 'react-redux'
import icon from '../../../../media/icons/bolig-vr.svg'

const mapStateToProps = () => ({
  Link: <div>< a name='who' /></div>,
  Icon: <img className='icon end-xs' src={icon} alt='Hva er Visitt?' />,
  Header: <h3>Hva er Visitt?</h3>,
  Body: (<div>
    <p>Visitt bruker det nyeste innen VR teknologien.</p>
    <p> Virtual reality er en teknologi der du tar på deg headset med display for hvert av øynene. Disse har høy oppløsning og sporer bevegelsen din.</p>
    <p>Derfor kan du med vår løsning få følelsen av hvordan din fremtidig bolig kan se ut.</p>
  </div>
  )
})

export default connect(mapStateToProps)(InfoSection)
