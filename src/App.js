import React, { Component } from 'react'
import logo from './logo.svg'
import Test from './components/test/TestComponent'
// import './App.css'
import RootTest from './RootTestComponent'
// import './styles/testStyles.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2 className="my-class">Welcome to React</h2>
        </div>
        <Test />
        <p className='App-intro'>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <RootTest/>
      </div>
    )
  }
}

export default App
