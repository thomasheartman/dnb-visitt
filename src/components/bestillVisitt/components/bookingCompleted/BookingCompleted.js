/*
 * Created by Thomas Hartmann
 * A page displaying the detauls of
 * the completed booking
 */

import React from 'react'

export default ({ date, time, branch, address }) => (
  <div>
    <h1>Din bestilling</h1>
    <h2>Date {`${date}, klokken ${time}`}</h2>
    <h2>Sted: {branch}</h2>

    <h3>{address}</h3>
  </div>
)