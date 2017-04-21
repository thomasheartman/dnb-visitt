/*
 * Created by Nikolai Nergård
 * Reserve time slot to Visit page
 */
import React from 'react'
import Form from './components/form/ContactForm'
import { Link } from 'react-router-dom'

export default ({ streetName, streetNumber }) => (
  <div>
     <main className="reservation-main">
        <div className="row">
            <div className="col-xs">
                <h2>Bestill Visitt</h2>

            </div>
        </div>
        <div className="row reservation-container">
            <div className="col-xs-12 col-sm-6 reserve-form-container">
                <p>Reserver din Visitt:</p>
                <Form />
            </div>
            <div className="col-xs-12 col-sm-6 reserved-house-container">
                <p>Valgt bolig:</p>
                <h2>{`${streetName} ${streetNumber}`}</h2>
                <img href="/"/>
            </div>
        </div>
    </main>
  </div>
)
