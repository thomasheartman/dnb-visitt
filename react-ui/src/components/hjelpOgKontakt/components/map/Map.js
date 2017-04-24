/*
 * Created by Thomas Hartmann
 * The map section of the about page
 */
import React from 'react'

export default () => (
  <div className="row col-xs-12 col-sm-8">
    <div className='col-xs-4 visitt-branches'>
      <h2>Visitt Filialer</h2>
      <ul>
        <li><a href='#'>Oslo</a></li>
        <li><a href='#'>Bergen</a></li>
        <li><a href='#'>Trondheim</a></li>
        <li><a href='#'>Tromsø</a></li>
        <li><a href='#'>Kristiansand</a></li>
        <li><a href='#'>Kristiansund</a></li>
        <li><a href='#'>Skien</a></li>
        <li><a href='#'>Ringerike</a></li>
        <li><a href='#'>Follo</a></li>
        <li><a href='#'>Halden</a></li>
      </ul>
    </div>
    <div className='col-xs-8 end-xs'>
      <iframe width='100%' height='450' frameBorder='0' style={{ 'border': 0 }}
        src='https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d63988.206511967895!2d10.696302725463612!3d59.921663634337634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sdnb+eiendom!5e0!3m2!1sen!2sno!4v1488880132304
    &q=Oslo, Norway' allowFullScreen />
    </div>
  </div >
)
