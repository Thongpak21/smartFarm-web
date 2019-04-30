import React, { Component } from 'react'
import '../../App.css'
import { db } from '../../Config/firebase'
import { Switch } from 'antd'
class Group extends Component {
  state = {
    isWaterOn: false,
    isLoading: true,
    date: 'loading...',
    version: 'loading...'
  }

  handleOnChange = checked => {
    // window.open(this.props.prop['download'], '_self')
    console.log(`switch to ${checked}`)
  }

  componentDidMount() {
    db.ref('users/qweasdzxc').on('value', dataSnapshot => {
      const { isWaterOn } = dataSnapshot.val()
      this.setState({
        isWaterOn: isWaterOn,
        isLoading: false
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
        <div dangerouslySetInnerHTML={{ __html: this.state.version }} />
        <p>updated at {this.state.date}</p>
      </div>
    )
  }
}

export default Group
