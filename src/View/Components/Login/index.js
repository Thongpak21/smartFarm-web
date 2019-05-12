import React from 'react'
import { Form, Icon, Input, Button } from 'antd'
import '../../../App.css'
import { auth } from '../../../Config/firebase/'
import { Redirect } from 'react-router'
class LoginForm extends React.Component {
  state = {
    redirect: false
  }

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({ redirect: true })
        
      }
    })
  }
  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const { username, password } = values
        auth.signInWithEmailAndPassword(username, password).then(response => {
          this.setState({ redirect: true })
        })
      }
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form
    const { redirect } = this.state
    if (redirect) {
      return <Redirect to="/" />
    }
    return (
      <div style={{ alignSelf: 'center' }}>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [
                { required: true, message: 'Please input your username!' }
              ]
            })(
              <Input
                prefix={
                  <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder="Username"
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [
                { required: true, message: 'Please input your Password!' }
              ]
            })(
              <Input
                prefix={
                  <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                type="password"
                placeholder="Password"
              />
            )}
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(LoginForm)
export default WrappedNormalLoginForm
