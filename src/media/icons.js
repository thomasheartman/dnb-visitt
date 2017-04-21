/*
 * Created by Thomas Hartmann
 * A collection of all the icons. Makes importing them much easier
 */
export { default as avtale } from './icons/bolig-avtale.svg'
export { default as eie } from './icons/bolig-eie.svg'
export { default as hjem } from './icons/bolig-hjem.svg'
export { default as kontrakt } from './icons/bolig-kontrakt.svg'
export { default as sok } from './icons/bolig-sok.svg'
export { default as velg } from './icons/bolig-velg.svg'
export { default as vr } from './icons/bolig-vr.svg'
export { default as kalkulator } from './icons/kalkulator.svg'
export { default as omradeVelg } from './icons/omrade-velg.svg'
export { default as socialMediaBar } from './icons/social-media-bar.png'

// Imports for exports and return statements
import leilighetIcon from './icons/bolig-leilighet.svg'
import eneboligIcon from './icons/bolig-enebolig.svg'
import rekkehusIcon from './icons/bolig-rekkehus.svg'

export const leilighet = leilighetIcon
export const enebolig = eneboligIcon
export const rekkehus = rekkehusIcon

export const getHousingIcon = (propertyType) => {
  switch (propertyType.toLowerCase()) {
    case 'enebolig':
      return enebolig
    case 'rekkehus':
      return rekkehus
    case 'leilighet':
    default:
      return leilighet
  }
}