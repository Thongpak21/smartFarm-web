import React, { Component } from 'react'
import './App.css'

import Routing from './Routes'

class App extends Component {
  componentDidMount() {
    document.title = 'Smart Farm '
  }
  render() {
    return (
      <div className="App" style={{ justifyContent: 'center' }}>
        <Routing />
      </div>
    )
  }
}

export default App
