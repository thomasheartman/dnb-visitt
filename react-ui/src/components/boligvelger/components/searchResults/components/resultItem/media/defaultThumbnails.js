/*
 * Created by Thomas Hartmann
 * Export file for default illustrations
 * to be used at various places around the
 * website
 */

import eneboligSrc from './thumbnails/liste-enebolig.jpeg'
import rekkehusSrc from './thumbnails/liste-rekkehus.JPG'
import leilighetSrc from './thumbnails/liste-leilighet.JPG'

export const enebolig = eneboligSrc
export const rekkehus = rekkehusSrc
export const leilighet = leilighetSrc

export const getHousingImage = (propertyType) => {
  const type = propertyType ? propertyType.toLowerCase() : 'blank'
  switch (type) {
    case 'enebolig':
      return enebolig
    case 'rekkehus':
      return rekkehus
    case 'leilighet':
    default:
      return leilighet
  }
}
