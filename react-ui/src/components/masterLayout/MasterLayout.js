/*
 * Created by Thomas on 16/04/2017.
 * The master layout of the app, containing header, footer, and
 * other items that should be rendered on every page.
 */

import React from 'react'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import '../../styles/meyersReset.css'
import '../../styles/flexboxgrid.css'
import '../../styles/style.css'

export default ({ children }) => (
  <div>
    <Header />
    {children}
    <Footer />
  </div>
)
