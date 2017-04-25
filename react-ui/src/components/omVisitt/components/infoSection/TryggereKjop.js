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
  heading: 'Bolig fra A til Å',
  body:
  <div>
    <p>Visitt er en løsning fra DNB, dette vil gi deg som forbruker mange fordeler. Her kan du registrere hvilken type bolig du er på jakt etter. Da vil vi kontakte deg når vi får inn slike for salg. Det er jo betryggende å vite, at man alltid er oppdatert på boliger som tilfredsstiller de kravene du har.</p>
    <p>Vi har døgnåpen kundeservice. Kort og godt. Uansett når du lurer på noe, kan du ta kontakt med oss.
</p>
    <p>Du vil også være blant de første som får beskjed om at boligen legges ut på markedet. Dermed har du litt bedre tid enn mange andre på å forberede deg, hvis drømmehuset plutselig skulle dukke opp. Hos DNB hjelper vi med boligkjøp - Fra A til Å.</p>
  </div>
})

export default connect(mapStateToProps)(InfoSection)
