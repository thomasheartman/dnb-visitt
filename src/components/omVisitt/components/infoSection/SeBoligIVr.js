/*
 * Created by Thomas Hartmann
 * Info about visitt
 */
import React from 'react'
import InfoSection from './InfoSection'
import { connect } from 'react-redux'
import icon from '../../../../media/icons/bolig-leilighet.svg'

const mapStateToProps = () => ({
  Link: < a name='what' />,
  Icon: <img className='icon end-xs' src={icon} alt='Se bolig i VR' />,
  Header: <h3>Se bolig i VR</h3>,
  Body: (<div>
    <p>Hva hvis du kunne gå på visning i en leilighet som er innredet og malt sånn som du vil ha det.</p>
    <p>Med Visitt kan du tilpasse boligen slik du ser den for deg. Slik at du kan vurdere smarte valg før selve byggeprosessen begynner.</p>
  </div>
  )
})

export default connect(mapStateToProps)(InfoSection)
