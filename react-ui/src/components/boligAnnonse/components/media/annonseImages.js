/*
 * Created by Thomas Hartmann
 * A file to serve relevant images
 * depending on the housing type
 */
import ene1 from './enebolig/annonse-1.JPG'
import ene2 from './enebolig/annonse-2.JPG'
import ene3 from './enebolig/annonse-3.JPG'
import ene4 from './enebolig/annonse-4.JPG'
import ene5 from './enebolig/annonse-5.JPG'
import ene6 from './enebolig/annonse-6.JPG'
import ene7 from './enebolig/annonse-7.JPG'

import leil1 from './leilighet/annonse-1.JPG'
import leil2 from './leilighet/annonse-2.JPG'
import leil3 from './leilighet/annonse-3.JPG'
import leil4 from './leilighet/annonse-4.JPG'
import leil5 from './leilighet/annonse-5.JPG'
import leil6 from './leilighet/annonse-6.JPG'
import leil7 from './leilighet/annonse-7.JPG'

import rekke1 from './rekkehus/annonse-1.JPG'
import rekke2 from './rekkehus/annonse-2.JPG'
import rekke3 from './rekkehus/annonse-3.JPG'
import rekke4 from './rekkehus/annonse-4.JPG'
import rekke5 from './rekkehus/annonse-5.JPG'
import rekke6 from './rekkehus/annonse-6.JPG'
// import rekke7 from './rekkehus/annonse-7.JPG'

const enebolig = [
  ene1,
  ene2,
  ene3,
  ene4,
  ene5,
  ene6,
  ene7
]

const rekkehus = [
  rekke1,
  rekke2,
  rekke3,
  rekke4,
  rekke5,
  rekke6
  // rekke7
]

const leilighet = [
  leil1,
  leil2,
  leil3,
  leil4,
  leil5,
  leil6,
  leil7
]

export const getAdImages = (propertyType) => {

  const switchTerm = propertyType ? propertyType : ' leilighet'

  switch (switchTerm) {
    case 'enebolig':
      return enebolig
    case 'rekkehus':
      return rekkehus
    case 'leilighet':
    default:
      return leilighet
  }
}