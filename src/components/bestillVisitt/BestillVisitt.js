/*
 * Created by Thomas Hartmann
 * Help and contact page
 */
import React from 'react'
import Form from './components/form/ContactForm'
import { Link } from 'react-router-dom'

export default () => (
  <div>
     <main className="reservation-main">
        <div className="row heading">
            <div className="col-xs full-width">
                <h2>Bestill Visitt</h2>
                <p>Reserver din Visitt på noen få tastetrykk.</p>
            </div>
        </div>
        <div className="row reservation-box">
            <div className="col-xs-12 col-sm-6">
                <Form />
            </div>
            <div className="col-xs-12 col-sm-6">
                <p>Valgt bolig:</p>
                <h2>StreetName StreetNumber</h2>
                <img href="/"/>
            </div>
        </div>
        <div className="row">
             
        </div>
    </main>
  </div>
)
