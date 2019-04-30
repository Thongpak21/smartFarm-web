import React, { Component } from 'react'
import './App.css'

import Routing from './Routes'

class App extends Component {
  componentDidMount() {
    document.title = 'AIS Easy App'
  }
  render() {
    return (
      <div className="App">
        <Routing />
      </div>
    )
  }
}

export default App
