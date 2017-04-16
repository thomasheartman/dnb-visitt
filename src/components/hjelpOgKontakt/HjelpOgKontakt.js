/*
 * Created by Thomas Hartmann
 * Help and contact page
 */
import react from 'react'

export default () => (
  <div>


    <div className="breadcrumbs-wrapper">
      <nav className="breadcrumbs">
        <a href="index.html">Hjem</a>
        <span>></span>
        <a href="hjelp-og-kontakt.html">Hjelp og Kontakt</a>
      </nav>
    </div>

    <main className="contact">
      <div className="row heading text-box">
        <h2 className="heading-title">Kontakt Oss</h2>
        <p className="heading-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aut nulla, mollitia. Odit magni ex culpa corporis laboriosam, vel eius minima inventore dignissimos quisquam ducimus, reiciendis. In unde culpa error?</p>
      </div>

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
      </main>
</div>
            )