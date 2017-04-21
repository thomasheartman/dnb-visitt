/*
 * Created by Thomas Hartmann
 * Help and contact page
 */
import React from 'react'
import Form from './components/form/ContactForm'
import { Link } from 'react-router-dom'

export default () => (
  <div>
     <main class="reservation-main">
        <div class="row heading">
            <div class="col-xs full-width">
                <h2>Bestill Visitt</h2>
                <p>Reserver din Visitt på noen få tastetrykk.</p>
            </div>
        </div>
        <div class="row reservation-box">
            <div class="col-xs full-width">
                <Form />
            </div>
        </div>
    </main>
  </div>
)
