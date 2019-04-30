import React, { Component } from 'react'
import '../../../App.css'
import { Layout } from 'antd'
import Group from '../../../Components/GroupType'
const { Header } = Layout
class Home extends Component {
  componentDidMount() {}
  render() {
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
              <Group />
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Home
