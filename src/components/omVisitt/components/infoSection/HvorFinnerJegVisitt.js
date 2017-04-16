/*
 * Created by Thomas Hartmann
 * Info about visitt
 */
import React from 'react'
import InfoSection from './InfoSection'
import { connect } from 'react-redux'
import icon from '../../../../media/icons/omrade-velg.svg'

const mapStateToProps = () => ({
  Link: <div>< a name='where' /></div>,
  Icon: <img className='icon end-xs' src={icon} alt='Visittfilialer' />,
  Header: <h3>Hvor finner jeg Visitt?</h3>,
  Body: (<div>
    <p>Med Visitt VR kan du se boligprosjekter fra hele landet fra hvilken som helst filial som tilbyr Visitt.</p>
    <p>Flytte til Oslo? Men bor i Tromsø? Inget problem. Bare besøk din nærmeste DNB filial.</p>
  </div>
  )
})

export default connect(mapStateToProps)(InfoSection)
