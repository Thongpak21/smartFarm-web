import React, { Component } from 'react'
import '../../../App.css'
import { Layout } from 'antd'
import WaterControl from '../../../Components/ControlWater'
import Temperature from '../../../Components/Temperature'
import { auth } from '../../../Config/firebase'
import { Redirect } from 'react-router'
const { Header } = Layout
class Home extends Component {
  state = {
    redirect: false
  }
  componentDidMount() {
    auth.onAuthStateChanged(user => {
      const { uid } = user
      localStorage.setItem('userID', uid)
      if (user) {
      } else {
        this.setState({ redirect: true })
      }
    })
  }
  render() {
    const { redirect } = this.state
    if (redirect) {
      return <Redirect to="/login" />
    }
    return (
      <Layout className="layout">
        <Header style={{ backgroundColor: '#282c3e4' }}>
          <div className="navBarHeader">
            {/* <img src={icon} style={{ width: '40px', height: '40px' }} alt="" /> */}
            <p style={{ marginLeft: '10px' }}>Smart Farm</p>
          </div>
        </Header>
        <div className="App">
          <div className="Group">
            <div className="Item-Group" style={{ backgroundColor: '#645986' }}>
              <WaterControl />
            </div>
            <div className="Item-Group" style={{ backgroundColor: '#1E1B18' }}>
              <Temperature />
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Home
