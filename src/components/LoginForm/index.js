import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {userName: '', password: '', errorMessage: ''}

  onChangeUsername = event => {
    this.setState({userName: event.target.value})
  }

  userNameInput = () => {
    const {userName} = this.state

    return (
      <>
        <label htmlFor="username" className="label">
          USERNAME
        </label>
        <input
          type="text"
          className="user-input"
          id="username"
          placeholder="Username"
          value={userName}
          onChange={this.onChangeUsername}
        />
      </>
    )
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  passwordInput = () => {
    const {password} = this.state
    return (
      <>
        <label htmlFor="password" className="label">
          PASSWORD
        </label>
        <input
          type="password"
          className="user-input"
          id="password"
          placeholder="Password"
          value={password}
          onChange={this.onChangePassword}
        />
      </>
    )
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
    console.log('/')
  }

  error = () => {
    this.setState({errorMessage: "*Username and Password didn't match"})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    console.log('Hi')
    const {userName, password} = this.state

    const userDetails = {userName, password}

    const url = 'https://apis.ccbp.in/login'

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    console.log(response)
    const data = response.json()
    console.log(data)

    if (response.ok === true) {
      this.onSubmitSuccess()
      console.log('Success')
    } else {
      this.setState({errorMessage: "*Username and Password didn't match"})
    }
  }

  render() {
    const {errorMessage} = this.state

    return (
      <div className="login-form-bg-container">
        <div className="login-form-container">
          <div className="login-form-image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              className="mobile-logo-image"
              alt="website logo"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
              className="login-image"
              alt="website login"
            />
          </div>
          <form className="form-container" onSubmit={this.onSubmitForm}>
            <img
              className="desktop-logo-image"
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
            />
            <div className="input-container">{this.userNameInput()}</div>
            <div className="input-container">{this.passwordInput()}</div>
            <button className="login-button" type="submit">
              Login
            </button>
            <p className="error-message">{errorMessage}</p>
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm
