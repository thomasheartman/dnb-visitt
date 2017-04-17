/*
 * Created by Thomas Hartmann
 * Html for the loading animation. Stolen directly
 * from http://codepen.io/anon/pen/qmdzXL
 */
import React from 'react'
import './loading.css'

export default () => (
  <div>
    <h1>Velg en laste-animasjon :D</h1>
    <div className='content'>
      <h3>CSS3 Loading animations</h3>
      <div className='load-wrapp'>
        <div className='load-1'>
          <p>Loading 1</p>
          <div className='line' />
          <div className='line' />
          <div className='line' />
        </div>
      </div>
      <div className='load-wrapp'>
        <div className='load-2'>
          <p>Loading 2</p>
          <div className='line' />
          <div className='line' />
          <div className='line' />
        </div>
      </div>
      <div className='load-wrapp'>
        <div className='load-3'>
          <p>Loading 3</p>
          <div className='line' />
          <div className='line' />
          <div className='line' />
        </div>
      </div>
      <div className='load-wrapp'>
        <div className='load-4'>
          <p>Loading 4</p>
          <div className='ring-1' />
        </div>
      </div>
      <div className='load-wrapp'>
        <div className='load-5'>
          <p>Loading 5</p>
          <div className='ring-2'>
            <div className='ball-holder'>
              <div className='ball' />
            </div>
          </div>
        </div>
      </div>
      <div className='load-wrapp'>
        <div className='load-6'>
          <p>Loading 6</p>
          <div className='letter-holder'>
            <div className='l-1 letter'>L</div>
            <div className='l-2 letter'>o</div>
            <div className='l-3 letter'>a</div>
            <div className='l-4 letter'>d</div>
            <div className='l-5 letter'>i</div>
            <div className='l-6 letter'>n</div>
            <div className='l-7 letter'>g</div>
            <div className='l-8 letter'>.</div>
            <div className='l-9 letter'>.</div>
            <div className='l-10 letter'>.</div>
          </div>
        </div>
      </div>
      <div className='load-wrapp'>
        <div className='load-7'>
          <p>Loading 7</p>
          <div className='square-holder'>
            <div className='square' />
          </div>
        </div>
      </div>
      <div className='load-wrapp'>
        <div className='load-8'>
          <p>Loading 8</p>
          <div className='line' />
        </div>
      </div>
      <div className='load-wrapp'>
        <div className='load-9'>
          <p>Loading 9</p>
          <div className='spinner'>
            <div className='bubble-1' />
            <div className='bubble-2' />
          </div>
        </div>
      </div>
      <div className='load-wrapp'>
        <div className='load-10'>
          <p>Loading 10</p>
          <div className='bar' />
        </div>
      </div>
    </div>
    <div className='clear' />
  </div>
)
