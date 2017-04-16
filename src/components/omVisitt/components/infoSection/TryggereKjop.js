/*
 * Created by Thomas Hartmann
 * Info about visitt
 */
import React from 'react'
import InfoSection from './InfoSection'
import { connect } from 'react-redux'
import icon from '../../../../media/icons/bolig-hjem.svg'

const mapStateToProps = () => ({
  Link: <div><a name='why' /></div>,
  Icon: <img className='icon end-xs' src={icon} alt='Tilpass bolig' />,
  Header: <h3>Tryggere kjøp</h3>,
  Body: (<div>
    <p>Med VR teknologi har du en unik mulighet til å oppleve nybygg før de er oppført, noe som kan gjøre deg som kunde tryggere på kjøpet ditt.</p>
  </div>
  )
})

export default connect(mapStateToProps)(InfoSection)
