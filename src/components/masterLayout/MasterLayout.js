/*
 * Created by Thomas on 16/04/2017.
 * The master layout of the app, containing header, footer, and
 * other items that should be rendered on every page.
 */

import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'

export default ({ children }) => (
  <div>
    <Header />
    {children}
    <Footer />
  </div>
)