import React, { Component } from 'react'
import '../../App.css'
import { db } from '../../Config/firebase'
import { Switch } from 'antd'
import moment from 'moment'
import 'moment/locale/th'
moment.locale('th')
class WaterControl extends Component {
  state = {
    isWaterOn: false,
    isLoading: true,
    date: 'loading...',
    status: 'loading...'
  }

  handleOnChange = checked => {
    db.ref('users/qweasdzxc').update({
      isWaterOn: checked,
      updatedAt: moment().format('LLL')
    })
    console.log(`switch to ${checked}`)
  }

  componentDidMount() {
    db.ref('users/qweasdzxc').on('value', dataSnapshot => {
      const { isWaterOn } = dataSnapshot.val()
      const { updatedAt } = dataSnapshot.val()
      let status = ''
      if (isWaterOn) {
        status = 'เปิด'
      } else {
        status = 'ปิด'
      }
      this.setState({
        isWaterOn: isWaterOn,
        isLoading: false,
        date: updatedAt,
        status: status
      })
    })
  }
  render() {
    return (
      <div style={{ margin: '10px' }}>
        <h1>ควบคุมน้ำ</h1>
        <Switch
          loading={this.state.isLoading}
          onChange={this.handleOnChange}
          checked={this.state.isWaterOn}
        />
        <p>status: {this.state.status}</p>
        <p>updated at {this.state.date}</p>
      </div>
    )
  }
}

export default WaterControl
