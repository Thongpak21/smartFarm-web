import React, { Component } from 'react'
import '../../App.css'
import { db } from '../../Config/firebase'
class Temperature extends Component {
  state = {
    isWaterOn: false,
    isLoading: true,
    date: 'loading...',
    temperature: 'loading...'
  }

  componentDidMount() {
    db.ref('users/qweasdzxc').on('value', dataSnapshot => {
      const { temperature } = dataSnapshot.val()
      const { updatedAt } = dataSnapshot.val()
      this.setState({
        isLoading: false,
        date: updatedAt,
        temperature: temperature + '°C'
      })
    })
  }
  render() {
    return (
      <div style={{ margin: '10px' }}>
        <h1>อุณหภูมิ</h1>

        <h2>{this.state.temperature}</h2>
        <p>updated at {this.state.date}</p>
      </div>
    )
  }
}

export default Temperature
