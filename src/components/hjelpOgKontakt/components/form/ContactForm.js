/*
 * Created by Thomas Hartmann
 * The contact form for the contact us page
 */
import react from 'react'

export default () => (
  <div>
    <form action="#">
      <p>Navn:</p>
      <input type="text">
        <p>Nummer:</p>
        <input type="number">
          <p>
            Email:
        </p>
          <input type="email">
            <p>Din beskjed:</p>
            <textarea name="Din beskjed" id="" cols="50" rows="5"></textarea>
            <br>
              <input type="submit" value="Send">
          </form>
</div>
            )